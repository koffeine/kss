# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

### Fixed

- Fixed missing semicolon


## [4.4.0] - 2025-09-14

### Changed

- Simplified selectors

### Fixed

- Fixed padding of file input
- Fixed padding of range input


## [4.3.0] - 2025-09-13

### Added

- Added icon to search input

### Changed

- Updated icons

### Fixed

- Fixed icon size of number input in Safari on macOS
- Fixed icon margin of search input in Chromium and Safari on macOS/iPadOS/iOS
- Fixed gap of datetime-local and date inputs in Chromium


## [4.2.0] - 2025-09-12

### Added

- Added hover to a


## [4.1.0] - 2025-09-12

### Added

- Added .grid


## [4.0.1] - 2025-09-11

### Fixed

- Fixed width of non-empty datetime-local and date inputs in Safari on iPadOS/iOS
- Fixed height of empty datetime-local, date and time inputs in Safari on iPadOS/iOS
- Fixed extra space after datetime-local, date and time inputs in Safari on iPadOS/iOS
- Fixed extra space after textarea


## [4.0.0] - 2025-09-07

### Added

- Added inline and block labels
- Added number input
- Added search input

### Changed

- Changed focus from `:focus` and `box-shadow` to `:focus-visible` and `outline`
- Changed icons sizes from `1.05em` to `1em`
- Changed the top and bottom margins of checkbox, color, radio and range inputs from `0` to a value that aligns their box-size with the rest of the inputs
- Updated to current browsers

### Removed

- Removed `--form-accent-color`
- Removed `box-shadow` from button

### Fixed

- Fixed color contrast


## [3.0.1] - 2025-07-10


## [3.0.0] - 2023-04-22

### Changed

- Updated calendar and clock icons
- Moved `cursor: text` from input to read-only input, date, datetime-local and time inputs
- Moved `cursor: text` from textarea to read-only textarea
- Changed `padding-top: 0; padding-bottom: 0;` to `padding: 0;` in fields of date, datetime-local and time inputs

### Removed

- Removed search input (functionality not supported in Firefox)
- Removed number input (Firefox and Safari allows non-numerical characters)
- Removed unnecessary properties

### Fixed

- Fixed missing focus on readonly inputs and textarea (because they are focusable)
- Fixed position of checkbox, color and radio inputs (they are now vertically centered)
- Fixed potential misalignment of checked marker in checkbox and radio inputs (happened when changing padding)
- Fixed size of calendar and clock icons in Edge (they now match the size used in other browsers)
- Fixed size and position of drowdown icon (to match calendar and clock icons)


## [2.0.1] - 2023-04-16

### Changed

- Removed duplicated property


## [2.0.0] - 2023-04-15

### Changed

- Replaced `-webkit-appearance: none` with `appearance: none` (browser prefix no longer needed)
- Moved `margin: 0` from input to checkbox, radio and range inputs (only where it's needed)
- Moved `cursor: pointer` from label to label with for attribute (fixes cursor for floating labels)
- Moved `cursor: pointer` from hovering enabled button to enabled button (simpler)
- Fixed select arrow position and padding
- Removed unnecessary properties, simplified properties and made images smaller (reduce size)


## [1.0.5] - 2022-07-09

### Fixed

- Fixed warning with vite-plugin-svelte/rollup-plugin-svelte


## [1.0.4] - 2022-02-27

### Added

- Added `-webkit-appearance: none` to input and textarea (fixes missing focus box-shadows in Safari on iPadOS/iOS)
- Added `height: calc(var(--line-height) * 1em + var(--vertical-padding) * 2)` to date, datetime-local and time inputs (fixes too small height when value is empty in Safari on iPadOS/iOS)
- Added `vertical-align: top` to date, datetime-local and time inputs (removes extra gap at bottom in Safari on iPadOS/iOS)
- Added `text-align: left` to input::-webkit-date-and-time-value (fixes center alignment in Safari on iPadOS/iOS)

### Removed

- Removed `-webkit-appearance: none` from checkbox, radio and range inputs (these are now inherited from input)


## [1.0.3] - 2022-02-05

### Added

- Added `color-scheme: dark` to :root (makes date and time picker modals dark)


## [1.0.2] - 2021-12-02

### Added

- Added `vertical-align: top` to textarea (removes extra gap at bottom)
- Added `resize: none` to textarea


## [1.0.1] - 2021-11-23

### Added

- Added `cursor: pointer` to label


## [1.0.0] - 2021-11-17

### Added

- Initial public release
