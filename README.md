# Automatic Cookie Consent Handler Extension

A Chrome browser extension that automatically detects and handles cookie consent banners using a scalable CMP-aware automation architecture.

This project is being developed in progressive phases to evolve from a basic cookie automation prototype into a production-grade browser automation framework for Consent Management Platforms (CMPs).

---

# Current Progress

✅ Phase 1 - Basic Consent Automation MVP
✅ Phase 2 - OneTrust Modular Automation
✅ Phase 3 - Scalable CMP-Aware Architecture

---

# Project Goal

The goal of this project is to build a scalable browser extension capable of:

- Detecting multiple CMP frameworks
- Automatically handling cookie consent flows
- Supporting dynamic website rendering patterns
- Using reusable modular automation systems
- Expanding into production-grade browser automation architecture

---

# Features

## Current Capabilities

- Detects OneTrust cookie consent banners
- Automatically locates reject consent buttons
- Supports centralized CMP detection routing
- Uses rule-driven selector architecture
- Supports generic fallback text detection
- Handles delayed popup rendering using retries
- Prevents repeated automation using state protection
- Uses reusable modular automation layers
- Uses scalable CMP-aware architecture

---

# Tech Stack

- JavaScript (ES6 Modules)
- Webpack
- Chrome Extension Manifest V3
- DOM APIs
- Browser Automation Concepts

---

# Phase Evolution

## Phase 1 - Basic Automation MVP

Initial proof-of-concept implementation.

### Features

- Basic DOM scanning
- Generic cookie button detection
- Initial content script experimentation
- Basic automation workflow

### Objective

Validate whether automated cookie interaction was possible using browser extension content scripts.

---

## Phase 2 - OneTrust Modular Automation

Focused on creating a stable OneTrust automation workflow.

### Features

- OneTrust CMP detection
- Reject button automation
- Retry system for delayed popups
- Visibility validation before clicks
- Modular detector/action separation
- Improved browser automation reliability

### Objective

Build a reliable real-world automation flow for a production CMP implementation.

---

## Phase 3 - Scalable CMP Architecture

Focused on transforming the extension into a reusable automation platform.

### Features

- Centralized CMP detection engine
- Rule registry architecture
- Modular CMP routing
- Generic reject button handlers
- Reusable text matching engine
- Generic fallback detection system
- Hybrid selector + text detection
- Improved orchestration architecture
- Scalable modular folder structure

### Objective

Transform the extension from a OneTrust-specific automation script into a scalable CMP automation framework.

---

# Supported CMPs

## Currently Supported

- OneTrust

## Planned Support

- Cookiebot
- TrustArc
- Sourcepoint
- Didomi
- Additional CMP frameworks in future phases

---

# Architecture Overview

## Phase 3 Architecture Flow

Website Loads
↓
content.js Injected
↓
CMP Detection Engine
↓
CMP Routing System
↓
Rule Registry
↓
Generic Reject Handler
↓
Selector Detection
↓
Fallback Text Detection
↓
Action Executor
↓
Retry System
↓
Consent Handling Complete

---

# Current Project Structure

```plaintext
src/
│
├── background/
│   └── background.js
│
├── content/
│   └── content.js
│
├── core/
│   ├── cmpDetector.js
│   ├── ruleRegistry.js
│   ├── textMatcher.js
│   │
│   └── actions/
│       └── rejectHandler.js
│
├── cmps/
│   └── onetrust/
│       └── detector.js
│
└── popup/
    ├── popup.html
    └── popup.js
```

---

# Installation

## 1. Clone Repository

```bash
git clone <your-repository-url>
```

## 2. Install Dependencies

```bash
npm install
```

## 3. Build Extension

```bash
npm run build
```

## 4. Load Extension in Chrome

- Open `chrome://extensions`
- Enable Developer Mode
- Click `Load unpacked`
- Select the project folder containing `manifest.json`

---

# How It Works

1. The extension injects a content script into webpages.
2. The CMP detection engine scans the DOM.
3. The system identifies supported CMP frameworks.
4. Matching CMP rules are loaded dynamically.
5. Reject buttons are searched using selectors.
6. If selectors fail, fallback text detection activates.
7. The extension validates button visibility.
8. The reject button is automatically clicked.
9. Retry logic handles delayed popup rendering.

---

# Example Console Flow

```plaintext
Cookie Consent Extension Loaded
Initializing Cookie Consent Extension...
Scanning website for supported CMPs...
Running CMP detection engine...
OneTrust banner detected
Detected CMP: onetrust
Reject button found using selector
Reject button clicked
Cookie consent successfully rejected
```

---

# Current Limitations

- Currently supports only OneTrust CMP
- Limited selector coverage
- No iframe traversal yet
- No Shadow DOM handling yet
- No MutationObserver support yet
- No SPA route handling yet
- No advanced workflow automation yet

---

# Planned Future Improvements

## Phase 4

- MutationObserver support
- Dynamic DOM monitoring
- Delayed rendering handling
- SPA route change handling

## Future Planned Enhancements

- Multiple CMP support
- iframe traversal
- Shadow DOM handling
- Advanced rule engine
- Preference center automation
- Toggle-based workflows
- Better heuristics
- Analytics/debug panel

---

# Learning Goals of This Project

- Browser extension development
- Browser automation architecture
- DOM manipulation
- Modular JavaScript architecture
- Rule-driven automation systems
- Webpack bundling
- Manifest V3
- Real-world consent management systems
- Scalable frontend automation architecture

---

# Disclaimer

- This project is intended for educational and development purposes.
- Website implementations of cookie banners vary significantly and may change over time.
- Different CMP frameworks may require different automation strategies.
