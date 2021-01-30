# Changelog

## Unreleased
- Hyperlinks on `pages/calendar.html` need to link to the right pages
- Hyperlinks on `pages/details_for_registration.html` need to link to the registration page
- A not-so-sharp color for Table Caption "Important Note"

## 2021-01-30 14:50 [Trevor]

### `css/style.css`
#### Added
- `.text-list-2` for lists on the "Calendar" page
- `.text-list-3` for nested, unordered list
- `.item-style-3` for ordered list of instructions for "Details for Registration" page, which needs more spacing between groups of instructions
- `.item-style-4` for ordered lists, mostly for TOC in pages
- `.item-style-5`, which is basically the same as `.item-style-1`, but designed for bullet points with shorter texts that need to be more compact when displayed on smaller screens
- `.alert` for alert boxes
- Descriptions on what the styles are designed for
#### Removed
- `th.list-col-1` is no longer needed because indentation of lists on "Calendar" page fixed by `.text-list-2`
#### Changed
- Renamed `ul.textlist1` to `.text-list-1` and changed `padding: 0;` to `padding-left: 2em;`
- Renamed `ul li.item-style1` to `.item-style-1` and changed `margin: 0 0 12px 0` to `margin: 0 0 0.75em 0` and `padding-left: 2em;` to `padding-left: 1em;`
- Renamed `ul li.item-style1::marker` to `.item-style-1::marker`, but no content changed

### `index.html`
#### Added
- Hyperlink to `https://idec-wiki.herokuapp.com/` in menu bar
- Hyperlink to `pages/ethics_biosafety_and_biosecurity.html` in menu bar

### `pages/about_us.html`
#### Added
- Hyperlink to `details_for_registration.html` in menu bar
- Hyperlink to `pages/ethics_biosafety_and_biosecurity.html` in menu bar
#### Changed
- Renamed `class="textlist1"` to `class="text-list-1"`
- Renamed `class="item-style1"` to `class="item-style-1"`
#### Removed
- Subheadings of "Executive Committee" and "Volunteers" as requested by Yang

### `pages/calendar.html`
#### Added
- Hyperlink to `details_for_registration.html` in menu bar
- Hyperlink to `pages/ethics_biosafety_and_biosecurity.html` in menu bar
- Hyperlink to `tracks_and_awards.html#tracks`
#### Removed
- `class="list-col-1"` from `<th scope="col">Event</th>`
#### Changed
- Changed `class="textlist1"` to use new `class="text-list-2"`
- Renamed `class="item-style1"` to use new `class="item-style-5"`

### `pages/requirements.html`
#### Added
- Hyperlink to `details_for_registration.html` in menu bar
- Hyperlink to `pages/ethics_biosafety_and_biosecurity.html` in menu bar
#### Changed
- Renamed `class="textlist1"` to `class="text-list-1"`
- Renamed `class="item-style1"` to `class="item-style-1"`
- Changed wording: "wiki pages should not be merely a digital conversion of the academic report" -> "wiki pages should not be merely a web adaptation of the academic report"

### `pages/details_for_registration.html`
#### Added
- Completed page with texts

### `pages/tracks_and_awards.html`
#### Added
- Hyperlink to `pages/details_for_registration.html` in menu bar
- Hyperlink to `pages/ethics_biosafety_and_biosecurity.html` in menu bar
- CSS styles and hyperlinks to lists for TOC
- Spacing between text sections
#### Fixed
- Minor issues in headings and consistencies in lists of single awards
#### Changed
- "Mystery awards" to "Mysterious awards"

## 2021-01-29 11:24 [Trevor]

### `css/style.css`
#### Added
- `th.list-col-1`
- `.link-style-1`, `.link-style-1:hover`

### `pages/index.html`
#### Fixed
- Hyperlinks to `calendar.html` and `requirements.html`

### `pages/about_us.html`
#### Fixed
- Hyperlinks to `tracks_and_awards.html` and `requirements.html`

### `pages/calendar.html`
#### Added
- Completed page with table and dates
- Hyperlinks to Requirements page #Report and #Wiki

### `pages/requirements.html`
#### Added
- Completed page with texts


## 2021-01-28 03:44 [Trevor]

### `pages/about_us.html`
#### Added
- Completed page with section "Where do we come from?" and all texts under "Equality and Diversity Policy"
- Added footer banner modified from `index.html`, see `style.css`
#### Fixed
- Hyperlinks to self and to `index.html`
- `src=` paths fixed for js scripts
#### Changed
- Title "Committee members" changed to "Executive Committee"

### `css/style.css`
#### Added
- `.card-footer2`
- `.card-footer2 img`
- `ul.text_list1`
- `ul li.item-style1::marker`
- `ul li.item-style1`

### `img/`
#### Added
- `footer2.png`
