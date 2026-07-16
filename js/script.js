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
        name: "Fire Pit Box",
        image: "images/locations/fire-pit-box.PNG",
        alt: "Box spawn location near the outdoor fire pit",
        landmarks: [
            "Fire pit"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 2
    },

    {
        name: "Dock Box 1",
        image: "images/locations/dock-box-1.PNG",
        alt: "First box spawn location along the dock",
        landmarks: [
            "Dock"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 3
    },

    {
        name: "Dock Box 2",
        image: "images/locations/dock-box-2.PNG",
        alt: "Second box spawn location along the dock",
        landmarks: [
            "Dock"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 4
    },

    {
        name: "Dock Box 3",
        image: "images/locations/dock-box-3.PNG",
        alt: "Third box spawn location along the dock",
        landmarks: [
            "Dock"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 5
    },

    {
    name: "Souvenirs Shop Box",
    image: "images/locations/souvenirs-shop-box.PNG",
    alt: "Box spawn location near the souvenirs shop",
    landmarks: [
        "Souvenirs shop"
    ],
    boxVisible: true,
    retired: false,
    routeOrder: 6
    },

    {
        name: "Sushi Shop Box",
        image: "images/locations/sushi-shop-box.PNG",
        alt: "Box spawn location near the sushi shop",
        landmarks: [
            "Sushi shop"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 7
    },

    {
        name: "Beach Box 1",
        image: "images/locations/beach-box-1.PNG",
        alt: "First box spawn location along the beach",
        landmarks: [
            "Beach"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 8
    },

    {
        name: "Ferris Wheel Box 1",
        image: "images/locations/ferris-wheel-box-1.PNG",
        alt: "First box spawn location near the ferris wheel",
        landmarks: [
            "Ferris wheel"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 9
    },

    {
        name: "Ferris Wheel Box 2",
        image: "images/locations/ferris-wheel-box-2.PNG",
        alt: "Second box spawn location near the ferris wheel",
        landmarks: [
            "Ferris wheel"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 10
    },

    {
    name: "Ferris Wheel Box 3",
    image: "images/locations/ferris-wheel-box-3.PNG",
    alt: "Third box spawn location near the ferris wheel",
    landmarks: [
        "Ferris wheel"
    ],
    boxVisible: true,
    retired: false,
    routeOrder: 11
    },

    {
        name: "Ferris Wheel Box 4",
        image: "images/locations/ferris-wheel-box-4.PNG",
        alt: "Fourth box spawn location near the ferris wheel",
        landmarks: [
            "Ferris wheel"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 12
    },

    {
        name: "Park Box 1",
        image: "images/locations/park-box-1.PNG",
        alt: "First box spawn location in the park area",
        landmarks: [
            "Park"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 13
    },

    {
        name: "Park Box 2",
        image: "images/locations/park-box-2.PNG",
        alt: "Second box spawn location in the park area",
        landmarks: [
            "Park"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 14
    },

    {
        name: "Park Box 3",
        image: "images/locations/park-box-3.PNG",
        alt: "Third box spawn location in the park area",
        landmarks: [
            "Park"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 15
    },

    {
        name: "Park Box 4",
        image: "images/locations/park-box-4.PNG",
        alt: "Fourth box spawn location in the park area",
        landmarks: [
            "Park"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 16
    },

    {
        name: "Look Shop Box",
        image: "images/locations/look-shop-box.PNG",
        alt: "Box spawn location near the Look shop",
        landmarks: [
            "Look shop"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 17
    },

    {
        name: "Look Sky Boxes 1 and 2",
        image: "images/locations/look-sky-boxes-1-2.PNG",
        alt: "Two box spawn locations near the Look Sky area",
        landmarks: [
            "Look Sky"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 18
    },

    {
        name: "Sunday Coffee Café Box 1",
        image: "images/locations/sunday-coffee-cafe-box-1.png",
        alt: "First box spawn location near the Sunday Coffee Café",
        landmarks: [
            "Sunday Coffee Café"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 19
    },

    {
        name: "Fashion Boutique Box",
        image: "images/locations/fashion-boutique-box.PNG",
        alt: "Box spawn location near the Fashion Boutique",
        landmarks: [
            "Fashion Boutique"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 20
    },

    {
        name: "Sunday Coffee Café Box 2",
        image: "images/locations/sunday-coffee-cafe-box-2.PNG",
        alt: "Second box spawn location near the Sunday Coffee Café",
        landmarks: [
            "Sunday Coffee Café"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 21
    },

    {
        name: "Garage Box",
        image: "images/locations/garage-box.PNG",
        alt: "Box spawn location near the garage",
        landmarks: [
            "Garage"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 22
    },

    {
        name: "Mr. Trucker Box",
        image: "images/locations/mr-trucker-box.PNG",
        alt: "Box spawn location near Mr. Trucker",
        landmarks: [
            "Mr. Trucker"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 23
    },

    {
        name: "Pure Beauty Salon Box",
        image: "images/locations/pure-beauty-salon-box.PNG",
        alt: "Box spawn location near the Pure Beauty Salon",
        landmarks: [
            "Pure Beauty Salon"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 24
    },

    {
        name: "Gas Station Box",
        image: "images/locations/gas-station-box.PNG",
        alt: "Box spawn location near the gas station",
        landmarks: [
            "Gas station"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 25
    },

    {
        name: "Townhouse Box 1",
        image: "images/locations/townhouse-box-1.PNG",
        alt: "First box spawn location near the townhouses",
        landmarks: [
            "Townhouses"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 26
    },

    {
        name: "Dice Sculpture Box 1",
        image: "images/locations/dice-sculpture-box-1.PNG",
        alt: "First box spawn location near the dice sculpture",
        landmarks: [
            "Dice sculpture"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 27
    },

    {
        name: "Dice Sculpture Box 2",
        image: "images/locations/dice-sculpture-box-2.PNG",
        alt: "Second box spawn location near the dice sculpture",
        landmarks: [
            "Dice sculpture"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 28
    },

    {
        name: "Cable Car Box",
        image: "images/locations/cable-car-box.PNG",
        alt: "Box spawn location near the cable car",
        landmarks: [
            "Cable car"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 29
    },

    {
        name: "Home Box 1",
        image: "images/locations/home-box-1.PNG",
        alt: "First box spawn location near a residential home",
        landmarks: [
            "Residential home"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 30
    },

    {
        name: "Palm Tree Box 1",
        image: "images/locations/palm-tree-box-1.PNG",
        alt: "First box spawn location near the palm trees",
        landmarks: [
            "Palm trees"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 31
    },

    {
        name: "Palm Tree Box 2",
        image: "images/locations/palm-tree-box-2.PNG",
        alt: "Second box spawn location near the palm trees",
        landmarks: [
            "Palm trees"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 32
    },

    {
        name: "Home Box 2",
        image: "images/locations/home-box-2.PNG",
        alt: "Second box spawn location near a residential home",
        landmarks: [
            "Residential home"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 33
    },

    {
        name: "Side Yard Box",
        image: "images/locations/side-yard-box.PNG",
        alt: "Box spawn location in the side yard beside the townhouses",
        landmarks: [
            "Side yard",
            "Townhouses"
        ],
        boxVisible: false,
        retired: true,
        routeOrder: 34
    },

    {
        name: "Townhouse Box 2",
        image: "images/locations/townhouse-box-2.PNG",
        alt: "Second box spawn location near the townhouses",
        landmarks: [
            "Townhouses"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 35
    },

    {
        name: "Back of Casino Box",
        image: "images/locations/back-of-casino-box.PNG",
        alt: "Box spawn location behind the casino",
        landmarks: [
            "Casino"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 36
    },

    {
        name: "Barry Bakery Box",
        image: "images/locations/barry-bakery-box.PNG",
        alt: "Box spawn location near Barry Bakery",
        landmarks: [
            "Barry Bakery"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 37
    },

    {
        name: "Taco Hat Box 1",
        image: "images/locations/taco-hat-box-1.PNG",
        alt: "First box spawn location near the Taco Hat restaurant",
        landmarks: [
            "Taco Hat"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 38
    },

    {
        name: "Shipyard Box",
        image: "images/locations/shipyard-box.PNG",
        alt: "Box spawn location in the shipyard area",
        landmarks: [
            "Shipyard"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 39
    },

    {
        name: "Sea Food Box 1",
        image: "images/locations/sea-food-box-1.PNG",
        alt: "First box spawn location near the Sea Food restaurant",
        landmarks: [
            "Sea Food restaurant"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 40
    },

    {
        name: "Sea Food Box 2",
        image: "images/locations/sea-food-box-2.PNG",
        alt: "Second box spawn location near the Sea Food restaurant",
        landmarks: [
            "Sea Food restaurant"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 41
    },

    {
        name: "Taco Hat Box 2",
        image: "images/locations/taco-hat-box-2.PNG",
        alt: "Second box spawn location near the Taco Hat restaurant",
        landmarks: [
            "Taco Hat"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 42
    },

    {
        name: "Home Box 3",
        image: "images/locations/home-box-3.PNG",
        alt: "Third box spawn location near a residential home",
        landmarks: [
            "Residential home"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 43
    },

    {
        name: "Home Box 4",
        image: "images/locations/home-box-4.PNG",
        alt: "Fourth box spawn location near a residential home",
        landmarks: [
            "Residential home"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 44
    },

    {
        name: "Baseball Field Box",
        image: "images/locations/baseball-field-box.PNG",
        alt: "Box spawn location near the baseball field",
        landmarks: [
            "Baseball field"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 45
    },

    {
        name: "Home Box 5",
        image: "images/locations/home-box-5.PNG",
        alt: "Fifth box spawn location near a residential home",
        landmarks: [
            "Residential home"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 46
    },

    {
        name: "West Parking Box",
        image: "images/locations/west-parking-box.PNG",
        alt: "Box spawn location in the west parking area",
        landmarks: [
            "West parking area"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 47
    },

    {
        name: "Bay Resort Box",
        image: "images/locations/bay-resort-box.PNG",
        alt: "Box spawn location near Bay Resort",
        landmarks: [
            "Bay Resort"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 48
    },

    {
        name: "Plaza Parking Lot Box",
        image: "images/locations/plaza-parking-lot-box.PNG",
        alt: "Box spawn location in the plaza parking lot",
        landmarks: [
            "Plaza parking lot"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 49
    },

    {
        name: "Plaza Box",
        image: "images/locations/plaza-box.PNG",
        alt: "Box spawn location in the plaza",
        landmarks: [
            "Plaza"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 50
    },

    {
        name: "Town Strip Box 1",
        image: "images/locations/town-strip-box-1.PNG",
        alt: "First box spawn location along the town strip",
        landmarks: [
            "Town strip"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 51
    },

    {
        name: "777 Bar Box",
        image: "images/locations/777-bar-box.PNG",
        alt: "Box spawn location near the 777 Bar",
        landmarks: [
            "777 Bar"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 52
    },

    {
        name: "Town Strip Box 2",
        image: "images/locations/town-strip-box-2.PNG",
        alt: "Second box spawn location along the town strip",
        landmarks: [
            "Town strip"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 53
    },

    {
        name: "Mario’s Trattoria Box",
        image: "images/locations/marios-box.PNG",
        alt: "Box spawn location near Mario’s Trattoria",
        landmarks: [
            "Mario’s Trattoria"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 54
    },

    {
        name: "Road Worker Box",
        image: "images/locations/road-worker-box.PNG",
        alt: "Box spawn location near the road worker area",
        landmarks: [
            "Road worker"
        ],
        boxVisible: false,
        retired: true,
        routeOrder: 55
    },

    {
        name: "Skyler Clothes Box 1",
        image: "images/locations/skyler-clothes-box-1.PNG",
        alt: "First box spawn location near Skyler Clothes",
        landmarks: [
            "Skyler Clothes"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 56
    },

    {
        name: "Skyler Clothes Box 2",
        image: "images/locations/skyler-clothes-box-2.PNG",
        alt: "Second box spawn location near Skyler Clothes",
        landmarks: [
            "Skyler Clothes"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 57
    },

    {
        name: "Guest Attendant Box",
        image: "images/locations/guest-attendant-box.PNG",
        alt: "Box spawn location near the guest attendant",
        landmarks: [
            "Guest attendant"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 58
    },

    {
        name: "Light House Courtyard Box",
        image: "images/locations/light-house-courtyard-box.PNG",
        alt: "Box spawn location in the lighthouse courtyard",
        landmarks: [
            "Lighthouse courtyard"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 59
    },

    {
        name: "Townhouse Box 3",
        image: "images/locations/townhouse-box-3.PNG",
        alt: "Third box spawn location near the townhouses",
        landmarks: [
            "Townhouses"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 60
    },

    {
        name: "Light House Box",
        image: "images/locations/light-house-box.PNG",
        alt: "Box spawn location near the lighthouse",
        landmarks: [
            "Lighthouse"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 61
    },

    {
        name: "Bleacher Box",
        image: "images/locations/bleacher-box.PNG",
        alt: "Box spawn location near the bleachers",
        landmarks: [
            "Bleachers"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 62
    },

    {
        name: "Beach Box 2",
        image: "images/locations/beach-box-2.PNG",
        alt: "Second box spawn location along the beach",
        landmarks: [
            "Beach"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 63
    },

    {
        name: "Gym Box",
        image: "images/locations/gym-box.PNG",
        alt: "Box spawn location near the gym",
        landmarks: [
            "Gym"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 64
    },

    {
        name: "Beach Box 3",
        image: "images/locations/beach-box-3.PNG",
        alt: "Third box spawn location along the beach",
        landmarks: [
            "Beach"
        ],
        boxVisible: true,
        retired: false,
        routeOrder: 65
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
        console.log("Selected filter:", selectedFilter);
    const searchText = searchInput.value.toLowerCase();

    let visibleCardCount = 0;

    locationCards.forEach(function (card) {
        const boxVisible = card.dataset.boxVisible;
        const locationName = card.querySelector("h3").textContent.toLowerCase();

        const matchesSearch = locationName.includes(searchText);

        let matchesFilter = false;

        if (selectedFilter === "all") {
            matchesFilter = true;
        } else if (selectedFilter === "box-visible") {
            matchesFilter = boxVisible === "true";
        } else if (selectedFilter === "location-only") {
            matchesFilter = boxVisible === "false";
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
