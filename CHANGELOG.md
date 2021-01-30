# Changelog

## Unreleased
- Hyperlinks on `pages/calendar.html` need to link to the right pages
- Hyperlinks on `pages/details_for_registration.html` need to link to the registration page
- A not-so-sharp color for Table Caption "Important Note"
- (To be fixed by Yinan) Footer image is not covering RHS when site enlarged to large screens. Happens to all pages

## 2021-01-30 XX:XX [Trevor]

### `css/style.css`
#### Added
- `.text-list-2` for lists on the "Calendar" page
- `.text-list-3` for nested, unordered list
- `.item-style-3` for ordered list of instructions for "Details for Registration" page, which needs more spacing between groups of instructions
- `.alert` for alert boxes
- Descriptions on what the styles are designed for
#### Removed
- `th.list-col-1` is no longer needed because indentation of lists on "Calendar" page fixed by `.text-list-2`
#### Changed
- Renamed `ul.textlist1` to `.text-list-1` and changed `padding: 0;` to `padding-left: 2em;`
- Renamed `ul li.item-style1` to `.item-style-1` and changed `margin: 0 0 12px 0` to `margin: 0 0 0.75em 0`
- Renamed `ul li.item-style1::marker` to `.item-style-1::marker`, but no content changed

### `pages/about_us.html`
#### Added
- Hyperlink to `details_for_registration.html`
#### Changed
- Renamed `class="textlist1"` to `class="text-list-1"`
- Renamed `class="item-style1"` to `class="item-style-1"`

### `pages/calendar.html`
#### Added
- Hyperlink to `details_for_registration.html`
#### Removed
- `class="list-col-1"` from `<th scope="col">Event</th>`
#### Changed
- Changed `class="textlist1"` to use new `class="text-list-2"`
- Renamed `class="item-style1"` to `class="item-style-1"`

### `pages/requirements.html`
#### Added
- Hyperlink to `details_for_registration.html`
#### Changed
- Renamed `class="textlist1"` to `class="text-list-1"`
- Renamed `class="item-style1"` to `class="item-style-1"`
- Changed wording: "wiki pages should not be merely a digital conversion of the academic report" -> "wiki pages should not be merely a web adaptation of the academic report"

### `pages/details_for_registration.html`
#### Added
- Completed page with texts

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
