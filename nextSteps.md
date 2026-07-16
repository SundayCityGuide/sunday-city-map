# Sunday City Box Guide — Updated Next Steps

## Current Progress

The following features are complete:

* Filter dropdown reads the selected value.
* JavaScript loops through every location card.
* Card data attributes are read through `dataset`.
* All filter options work:

  * All Locations
  * Box Visible
  * Location Only
  * Potentially Retired
* Cards are shown or hidden using the `hidden` property.
* The Potentially Retired filter was tested successfully.
* The empty-results message works.
* Search works and ignores capitalization.
* Search and filters work together through `updateLocationCards()`.
* Sorting works:

  * Route Order
  * Alphabetical
* Location cards are generated automatically from the JavaScript `locations` array.
* Each location includes a `routeOrder` value.
* Route Order sorting uses each card’s `data-route-order` value.

## Next Steps

### 1. Replace the Temporary Sample Card

Remove the temporary `Sample Location Card` object from the `locations` array.

Replace it with the next real Sunday City location.

Confirm that the new card displays:

* The correct location name
* The correct screenshot
* The correct nearby landmarks
* The correct box visibility status
* The correct retired status
* The correct route order

### 2. Continue Adding Real Locations

Add the remaining locations to the JavaScript `locations` array.

Use this structure:

```javascript
{
    name: "Location Name",
    image: "images/locations/image-name.png",
    alt: "Description of the location screenshot",
    landmarks: [
        "Nearby landmark one",
        "Nearby landmark two"
    ],
    boxVisible: true,
    retired: false,
    routeOrder: 2
}
```

Each location should have its own object.

### 3. Keep Route Order Values Unique

Each location should have a unique `routeOrder` number.

Example:

```javascript
routeOrder: 1
routeOrder: 2
routeOrder: 3
```

These values determine the order of the cards when Route Order is selected.

The route numbers should match the intended box-run sequence.

### 4. Add Locations in Small Groups

Do not add all 60 or more locations at once.

Add around five locations at a time, then test:

* Images
* Location names
* Landmarks
* Search
* Filters
* Alphabetical sorting
* Route Order sorting
* Empty-results message

This will make mistakes easier to find.

### 5. Add Potentially Retired Badges

Cards with:

```javascript
retired: true
```

should display a visible badge:

```text
⚠️ Potentially Retired
```

Cards with:

```javascript
retired: false
```

should not display the badge.

The badge should be generated automatically by JavaScript.

### 6. Add Optional Location Notes

Some locations may need an extra note, especially potentially retired locations.

Add an optional field such as:

```javascript
note: "This location has not been confirmed recently."
```

JavaScript should only generate the note when the field contains text.

Regular locations should not display an empty note section.

### 7. Improve the Empty-Results Message

The current message refers only to the selected filter.

Update it to cover both search and filtering.

Suggested wording:

```text
No locations match your current search or filter.
```

The message should appear whenever every location card is hidden.

### 8. Test Search, Filters, and Sorting Together

Test combinations such as:

* Search plus All Locations
* Search plus Box Visible
* Search plus Location Only
* Search plus Potentially Retired
* Alphabetical sorting while searching
* Route Order while searching
* Alphabetical sorting after filtering
* Route Order after filtering
* Clearing the search box
* Returning the filter to All Locations

A card should only appear when it matches the current search and filter.

Sorting should rearrange the matching cards without changing whether they are visible.

### 9. Review Image File Names

Use clear and consistent image names.

Example:

```text
sunday-city-board-box.png
casino-side-box.png
lighthouse-courtyard-box.png
```

Keep image paths consistent:

```javascript
image: "images/locations/image-name.png"
```

Avoid spaces and capital letters in image filenames.

### 10. Review Accessibility Text

Each image should have a useful `alt` description.

Example:

```javascript
alt: "Box spawn location beside the Sunday City information board near the casino entrance"
```

The alt text should describe the location clearly rather than simply repeating the location name.

### 11. Remove Temporary Testing Content

After several real locations have been added and tested:

* Remove the Sample Location Card.
* Remove temporary retired test values.
* Remove unnecessary `console.log()` statements.
* Confirm there are no broken image paths.
* Confirm the browser console has no errors.

## Immediate Next Step

Replace the temporary Sample Location Card with the next real Sunday City location.

Then add a small group of real locations and test the toolbar before continuing.
