# Changelog

## Unreleased
- A not-so-sharp color for Table Caption "Important Note"
- New illustrations for "COMPEITION SUMMARY" on `index.html`
- Illustrations for "AWARDS" on `index.html`
- Comment out Search box on all pages if the function is not available soon
- Feedback form needs to be functional

## 2021-02-1 13:38 [Trevor]

### `index.html`
#### Changed
- Used `hidden` class to hide a section instead of commenting out a section

### `css/style.css`
#### Added
- `.hidden` for hiding elements

## 2021-02-1 07:12 [Trevor]
### `pages/about_us.html`
#### Changed
- Increased HQ member job titles' font size from `0.5em` to `0.8em`

## 2021-02-1 03:14 [Trevor]
### `index.html`
#### Added
- Descriptions for the 3 Tracks
- Descriptions for the 3 Award categories
- Hyperlink of "Ethics biosafety and Biosecurity" to the "Read more" button in the relevant section
- Spaces between sections
#### Changed
- Redesigned the "OUR MISSION" section and turn it into "COMPEITION SUMMARY", and created new texts to better describe what the entire competition is about. This section will receive new illustrations.
- Rearranged the orders for different sections. Moved "REQUIREMENTS" to 2nd last time section and "Ethics, Biosafety and Biosecurity" section to the bottom.
- Track "Chassis" changed to "Genomes", as requested
- Hyperlinks for "View details" under "Awards"
- "Register Now!" button text -> "Get ready to Register!", and linked to `page/details_for_registration.html`
- Changed the subtitle of "promoting irrational synthetic biology" to "Nurturing the next generation of experts to revolutionize mutagenesis". This is the new placeholder text
#### Removed
- "WHO WE ARE" section. It was meant to convey the message that we want to build a community. This message is now incorporated under "COMPETITION SUMMARY"

### `pages/tracks_and_awards.html`
#### Changed
- Track "Chassis" changed to "Genomes", as requested
- Descriptions under the 3 tracks, as requested
#### Added
- Anchors for the 5 award types headings, for links from `index.html` and `calendar.html`

### `pages/details_for_registration.html`
#### Added
- Registration open date under "What do you need?" heading and "(1) Register your personal account"
#### Changed
- The "Register Now" button -> "Registration Opens on Mar 1", with hyperlink removed, and button moved under "(2) Register your team"
#### Removed
- Hyperlink in the sentence "As a first step, please register your personal account"
- Hyperlink for biosaftey consent form

### `pages/calendar.html`
#### Added
- Hyperlink to "Details you need for Registration" for "Registration opens"
- Hyperlink to "Track Plus: Challenge" for "Challenge releases"
#### Removed
- Hyperlinks that currently have no destinations

### `pages/requirements.html`
#### Added
- Hyperlinks to TOC to link to headings

### Bulk menu link change on `index.html` and all child pages
#### Changed
- Menu link text "Register for iDEC 2021" -> "Register for iDEC 2021 (open on Mar 1)"

## 2021-01-31 23:47 [Trevor]
### `index.html`
#### Changed
- Image sizes for Requirements and Tracks

## 2021-01-31 18:40 [Trevor]
### `pages/details_for_registration.html`
#### Added
- Privacy Policy (ver.2) texts

## 2021-01-30 22:13 [Trevor]
### `index.html`, `pages/about_us.html`, `pages/calendar.html`, `pages/details_for_registration.html`, `pages/requirements.html`, `pages/tracks_and_awards.html`
#### Fixed
- Footer text typos

## 2021-01-30 15:00 [Trevor]
### `index.html`
#### Added
- Hyperlink to `pages/details_for_registration.html` in menu bar
#### Fixed
- Hyperlink to `pages/ethics_biosafety_and_biosecurity.html` in menu bar

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
