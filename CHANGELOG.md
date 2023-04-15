# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [Unreleased]

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

- Added `-webkit-appearance: none` to input and textarea elements (fixes missing focus box-shadows on iOS)
- Added `height: calc(var(--line-height) * 1em + var(--vertical-padding) * 2)` to date, datetime-local and time inputs (fixes too small height when value is empty on iOS)
- Added `vertical-align: top` to date, datetime-local and time inputs (removes extra gap at bottom on iOS)
- Added `text-align: left` to input::-webkit-date-and-time-value (fixes center alignment on iOS)

### Removed

- Removed `-webkit-appearance: none` from checkbox, radio and range inputs (these are now inherited from input)


## [1.0.3] - 2022-02-05

### Added

- Added `color-scheme: dark` to :root element (makes date and time picker modals dark)


## [1.0.2] - 2021-12-02

### Added

- Added `vertical-align: top` to textarea element (removes extra gap at bottom)
- Added `resize: none` to textarea element


## [1.0.1] - 2021-11-23

### Added

- Added `cursor: pointer` to label element


## [1.0.0] - 2021-11-17

### Added

- Initial public release
