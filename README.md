# Stopwatch Web App

A minimalist stopwatch built with JavaScript and jQuery, featuring keyboard controls, UI toggling, and persistent time storage.

## Features

- Start / Pause / Resume stopwatch
- Reset with animated reset icon
- Keyboard shortcuts:
  - Space / Enter -> Start / Pause
  - R -> Reset
  - H -> Hide / Show controls
- Includes a dedicated button to toggle the visibility of the control UI, allowing for a cleaner and distraction-free view.
- Persistent time storage using localStorage
- Clean and responsive UI
- Toggleable UI (hide/show buttons)

## Usage

1. Click Start or press Space / Enter to begin
2. Click Pause or press Space / Enter to stop the timer temporarily
3. Click Resume or press Space / Enter to proceed the timer
4. Click Reset or press R to reset the timer
5. Hover over the top left corner of viewport and click icon or press H to hide or show the control buttons
6. Reloading the page will restore the last saved time automatically

##  Technical Notes

- The stopwatch is based on setInterval and Date.now() to ensure accurate time tracking.
- Elapsed time is stored in localStorage, allowing the timer to persist across page reloads.
- CSS animations are used for the reset icon rotation.
- Keyboard input is handled via global keydown event listener.
- The UI is fully controlled through JavaScript and CSS without any backend.

  ### Technologies Used:

  - HTML5
  - CSS3
  - JavaScript (jQuery)
  - Google Fonts & Icons

## Preview

[![Stopwatch Screenshot](img/screenshot.png)](img/screenshot.png)

## GitHub Page
Link: https://manuel-amberger.github.io/HTML-CSS-JS-Stopwatch/

## About

Created by Manuel Amberger, a student at a technical high school (HTL) in austria.
