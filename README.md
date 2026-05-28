# Automatic Cookie Consent Handler Extension

A Chrome browser extension that automatically detects and handles OneTrust cookie consent banners using a modular CMP-aware automation architecture.

This project is being developed in progressive phases to build a scalable browser automation system for consent management platforms (CMPs).

## Current Progress

✅ Phase 1 - Basic Consent Automation MVP

## Features

- Detects OneTrust cookie consent banners
- Automatically locates reject buttons
- Supports multiple selector strategies
- Supports fallback text-based detection
- Handles delayed popup rendering using retries
- Prevents repeated automation using state protection
- Uses modular architecture for scalability

## Tech Stack

- JavaScript (ES6 Modules)
- Webpack
- Chrome Extension Manifest V3
- DOM APIs
- Browser Automation Concepts

## Current Status

- Phase 2 MVP Completed
- OneTrust CMP detection
- Automatic reject button handling
- Retry system for delayed popups
- Visibility validation before clicks
- Modular detector/action architecture
- Chrome Manifest V3
- Webpack-based bundling

## Project Evolution

• Phase 1:

- Basic DOM scanning
- Generic cookie button detection
- Content script experimentation

• Phase 2:

- OneTrust CMP detection
- Modular architecture
- Reject button automation
- Retry system
- State protection
- Real-world CMP validation

## Supported CMPs

- Currently supported: OneTrust
- Future phases will expand support for additional CMPs

## Architecture Overview

- Website Loads
  ↓
- content.js Injected
  ↓
- OneTrust Detector
  ↓
- Reject Button Finder
  ↓
- Action Executor
  ↓
- Retry System
  ↓
- Consent Handling Complete

## Project Structure

- src/
- ├── background/
- │ └── background.js
- ├── content/
- │ ├── content.js
- │ ├── detectors/
- │ │ └── onetrustDetector.js
- │ └── actions/
- │ └── rejectHandler.js
- └── popup/
-        ├── popup.html
-        └── popup.js

## Installation

1. Clone Repository

- git clone <your-repository-url>

2. Install Dependencies

- npm install

3. Build Extension

- npm run build

4. Load Extension in Chrome

- Open chrome://extensions
- Enable Developer Mode
- Click Load unpacked
- Select the project folder containing manifest.json

## How It Works

- The extension injects a content script into webpages.
- Detects whether the website uses OneTrust CMP.
- Searches for reject consent buttons.
- Validates button visibility.
- Automatically clicks the reject button.
- Retries detection if popup loads later.

## Example Console Flow

- Initializing Cookie Consent Extension...
- Scanning website for OneTrust CMP...
- OneTrust detected
- Reject button located
- Reject button clicked
- Cookie consent successfully rejected

## Current Limitations

- Supports only OneTrust CMP
- Limited selector coverage
- No iframe handling yet
- No shadow DOM support yet
- No MutationObserver support yet
- No advanced rule engine yet

## Planned Future Improvements

- MutationObserver support
- Multiple CMP support
- iframe traversal
- Shadow DOM handling
- Dynamic rule engine
- Preference center automation
- Better heuristics
- Analytics/debug panel

## Learning Goals of This Project

- Browser extension development
- Browser automation architecture
- DOM manipulation
- Modular JavaScript architecture
- Webpack bundling
- Manifest V3
- Real-world consent management systems

## Disclaimer

- This project is intended for educational and development purposes.
- Website implementations of cookie banners vary significantly and may change over time.
