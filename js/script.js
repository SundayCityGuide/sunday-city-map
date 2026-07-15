const locations = [
    {
    name: "Sunday City Board Box",
    image: "images/locations/sunday-city-board-box.png",
    alt: "Sunday City Board box spawn location near the casino entrance",
    landmarks: [
        "Sunday City information board",
        "Casino entrance"
    ],
    boxVisible: false,
    retired: false,
    routeOrder: 1
    },

    {
        name: "Sample Location Card",
        image: "images/locations/sunday-city-board-box.png",
        alt: "Sample location screenshot",
        landmarks: [
            "Landmark One",
            "Landmark Two"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 2
    }
];

const filterSelect = document.getElementById("filter-locations");
const searchInput = document.getElementById("location-search");
const sortSelect = document.getElementById("sort-locations");

const locationList = document.querySelector(".location-list");
const noResultsMessage = document.getElementById("no-results-message");

function createLocationCards() {
    locations.forEach(function (location) {
        const card = document.createElement("article");

        card.classList.add("location-card");

        card.dataset.boxVisible = location.boxVisible;
        card.dataset.retired = location.retired;
        card.dataset.routeOrder = location.routeOrder;

        const landmarkItems = location.landmarks
            .map(function (landmark) {
                return `<li>${landmark}</li>`;
            })
            .join("");

        card.innerHTML = `
            <h3>${location.name}</h3>

            <figure class="location-photo">
                <img
                    src="${location.image}"
                    alt="${location.alt}"
                >
            </figure>

            <div class="location-landmarks">
                <h4>Nearby Landmark(s)</h4>

                <ul>
                    ${landmarkItems}
                </ul>
            </div>
        `;

        locationList.appendChild(card);
    });
}

createLocationCards();

const locationCards = Array.from(
    document.querySelectorAll(".location-card")
);

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

    let sortedCards = [...locationCards];

    if (selectedSort === "alphabetical") {
        sortedCards.sort(function (cardA, cardB) {
            const nameA = cardA.querySelector("h3").textContent;
            const nameB = cardB.querySelector("h3").textContent;

            return nameA.localeCompare(nameB);
        });
    } else {
        sortedCards.sort(function (cardA, cardB) {
            return Number(cardA.dataset.routeOrder)
                - Number(cardB.dataset.routeOrder);
        });
    }

    sortedCards.forEach(function (card) {
        locationList.appendChild(card);
    });
}

filterSelect.addEventListener("change", updateLocationCards);

searchInput.addEventListener("input", updateLocationCards);

sortSelect.addEventListener("change", sortLocationCards);
