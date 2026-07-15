Next Steps
1. Read the Selected Filter

Update the filter event listener so JavaScript reads the value of the selected option.

Example values:

all
box-visible
location-only
potentially-retired

This will use:

filterSelect.value

The selected value will be stored in a variable such as:

const selectedFilter = filterSelect.value;
2. Loop Through Every Location Card

Use JavaScript to go through the list of location cards one at a time.

This will use:

locationCards.forEach(...)

The same code will work for the two test cards now and for all future location cards.

3. Read Each Card’s Data Attributes

For each card, JavaScript will read:

data-box-visible
data-retired

JavaScript can access them through the card’s dataset.

Example:

card.dataset.boxVisible
card.dataset.retired

These values will tell JavaScript whether:

The screenshot contains the box.
The screenshot is only a reference photo.
The location may be retired.
4. Decide Whether Each Card Matches the Filter

Use conditional logic to compare the selected filter with each card’s data.

Planned behavior:

All Locations
Show every card.

Box Visible
Show cards where data-box-visible="true".

Location Only
Show cards where data-box-visible="false" and data-retired="false".

Potentially Retired
Show cards where data-retired="true".

This will introduce JavaScript concepts such as:

if
else if
else

and comparison operators such as:

===
&&
5. Show or Hide Each Card

Once JavaScript determines whether a card matches the selected filter, it will show or hide that card.

Possible approach:

card.hidden = true;
card.hidden = false;

This allows the browser to remove nonmatching cards from the visible layout without deleting them from the HTML.

6. Test Every Filter Option

Use the two test cards to confirm that:

All Locations shows both cards.
Box Visible shows only the sample card.
Location Only shows only the Sunday City Board Box card.
Potentially Retired shows no cards until a retired test card is added.

We may temporarily change one test card to:

data-retired="true"

to verify the retired filter.

7. Add an Empty-Results Message

After filtering works, add a message for situations where no cards match.

Example:

No locations match the selected filter.

The message should only appear when all location cards are hidden.

8. Build the Search Feature

After filtering is complete, make the search box work.

The search feature will:

Listen for typing in the search box.
Read the text the user entered.
Compare it with each location name.
Hide cards whose names do not match.

This will introduce:

input events
textContent
toLowerCase()
includes()
9. Make Search and Filter Work Together

A location card should only remain visible when it matches both:

The search text.
The selected filter.

Instead of having separate features overwrite one another, we will likely create one function that updates the visible cards based on all current controls.

Possible name:

updateLocationCards()
10. Build the Sort Feature

After search and filtering work together, connect the Sort dropdown.

Planned options:

Route Order
Alphabetical

Route Order will preserve the intended box-run sequence.

Alphabetical will sort cards by location name.

11. Generate Cards from JavaScript Data

Once the toolbar features work, move the location information into a JavaScript data structure.

Example:

const locations = [
    {
        name: "Sunday City Board Box",
        image: "images/locations/sunday-city-board-box.png",
        landmarks: [
            "Sunday City information board",
            "Casino entrance"
        ],
        verifiedWithoutPhoto: true,
        retired: false
    }
];

JavaScript will then generate the HTML cards automatically.

This will prevent us from manually writing and maintaining more than 60 nearly identical <article> elements.

Immediate Next Step

Continue inside the existing filter event listener by reading the selected value:

const selectedFilter = filterSelect.value;

Then test it with:

console.log(selectedFilter);

After that, begin looping through the location cards.