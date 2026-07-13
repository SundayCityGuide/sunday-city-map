# Sunday City Box Guide - Project Standards

This document defines the design and development standards for the Sunday City Box Guide. These standards help keep the project consistent and make future development easier.

---

# Folder Structure

```
sunday-city-map/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── locations/
│   ├── maps/
│   ├── icons/
│   └── ui/
│
├── index.html
├── README.md
└── PROJECT-STANDARDS.md
```

---

# Image Naming

- Use lowercase letters.
- Separate words with hyphens.
- Use PNG whenever possible.

### Examples

```
sunday-city-board-box.png
dock-box-1.png
dock-box-2.png
fire-pit-box.png
lighthouse-courtyard-box.png
```

---

# CSS Organization

Organize `style.css` using the following section order:

1. Color Palette
2. Global Styles
3. Global Page Styles
4. Header
5. Navigation
6. Guide Information
7. Main Content
8. Sections
9. Interactive Map
10. Optimal Route
11. Locations
12. Location Cards
13. Footer
14. Media Queries

---

# Color Palette

Use CSS variables for all colors.

```
:root {
    --color-background
    --color-header
    --color-water
    --color-accent
    --color-text
    --color-light-text
}
```

Avoid hardcoding colors whenever possible.

---

# HTML Standards

Use semantic HTML whenever possible.

Preferred elements:

- header
- nav
- main
- section
- article
- figure
- figcaption
- footer

Only use `<div>` when a semantic element does not exist for the purpose.

---

# Location Card Layout

Every location card should follow this layout:

```
Location Name

Screenshot

Nearby Landmark(s)

📍 Landmark
📍 Landmark

⚠️ Potentially Retired
(only if applicable)
```

Do **not** include:

- Description
- Route Notes
- Additional Information

unless a future feature requires them.

---

# Screenshot Standards

All screenshots should:

- Use the same aspect ratio.
- Be cropped consistently.
- Use the same zoom level whenever possible.
- Be large enough to easily recognize the location.

---

# Guide Information

Display near the top of the homepage.

Include:

- About This Guide
- Latest Verification
- Known Box Locations
- Box Rotation

---

# Location Data Model (Future JavaScript)

Each location will eventually contain:

```
name
image
landmarks
verifiedWithoutPhoto
retired
```

Example:

```javascript
{
    name: "Sunday City Board Box",

    image: "sunday-city-board-box.png",

    landmarks: [
        "Sunday City information board",
        "Casino entrance"
    ],

    verifiedWithoutPhoto: true,

    retired: false
}
```

---

## verifiedWithoutPhoto

Type: Boolean

### true

The location has been verified through gameplay, but a current screenshot showing the box has not yet been captured.

### false

A current screenshot showing the box is available.

---

## retired

Type: Boolean

### true

The location is believed to be retired but remains documented until its status can be confirmed.

### false

The location is currently considered active.

---

# Design Philosophy

The website should prioritize:

- Simplicity
- Consistency
- Readability
- Transparency
- Easy maintenance

If a piece of information does not help the user find a box location, it should generally not be displayed.

---

# Source of Truth

The PowerPoint presentation serves as the project's source of truth.

It defines:

- Route order
- Official location names
- Screenshots
- Potentially retired locations

The website should always reflect the PowerPoint unless changes are intentionally made.

## Filter Categories

The website displays the following filter options:

- All Locations
- Box Visible
- Location Only
- Potentially Retired

These are user-facing names and should remain simple and easy to understand.

Internally, these correspond to the following data model:

|        Internal Code        |      User Sees      |
|-----------------------------|---------------------|
| verifiedWithoutPhoto: false | Box Visible         |
| verifiedWithoutPhoto: true  | Location Only       |
| retired: true               | Potentially Retired |