const filterSelect = document.getElementById("filter-locations");
const sortSelect = document.getElementById("sort-locations");
const locationList = document.querySelector(".location-list");

const searchInput = document.getElementById("location-search");
const locationCards = Array.from(document.querySelectorAll(".location-card"));
const noResultsMessage = document.getElementById("no-results-message");

function updateLocationCards() {
    const selectedFilter = filterSelect.value;
    const searchText = searchInput.value.toLowerCase();

    let visibleCardCount = 0;

    locationCards.forEach(function (card) {
        const boxVisible = card.dataset.boxVisible;
        const retired = card.dataset.retired;
        const locationName = card.querySelector("h3").textContent.toLowerCase();

        const matchesSearch = locationName.includes(searchText);

        let matchesFilter = false;

        if (selectedFilter === "all") {
            matchesFilter = true;
        } else if (selectedFilter === "box-visible") {
            matchesFilter = boxVisible === "true";
        } else if (selectedFilter === "location-only") {
            matchesFilter = boxVisible === "false" && retired === "false";
        } else if (selectedFilter === "potentially-retired") {
            matchesFilter = retired === "true";
        }

        card.hidden = !(matchesSearch && matchesFilter);

        if (card.hidden === false) {
            visibleCardCount++;
        }
    });

    noResultsMessage.hidden = visibleCardCount !== 0;
}

function sortLocationCards() {
    const selectedSort = sortSelect.value;

    let sortedCards;

    if (selectedSort === "alphabetical") {
        sortedCards = [...locationCards].sort(function (cardA, cardB) {
            const nameA = cardA.querySelector("h3").textContent;
            const nameB = cardB.querySelector("h3").textContent;

            return nameA.localeCompare(nameB);
        });
    } else {
        sortedCards = [...locationCards];
    }

    sortedCards.forEach(function (card) {
        locationList.appendChild(card);
    });
}

filterSelect.addEventListener("change", updateLocationCards);

searchInput.addEventListener("input", updateLocationCards);

sortSelect.addEventListener("change", sortLocationCards);
