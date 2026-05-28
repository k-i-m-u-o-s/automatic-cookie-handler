import { detectCMP } from "../core/cmpDetector";
// import { detectOneTrust } from "./detectors/onetrustDetector";
import { RULE_REGISTRY } from "../core/ruleRegistry";
import {
  findRejectButton,
  clickRejectButton,
} from "../core/actions/rejectHandler";

console.log("Cookie Consent Extension Loaded");

// function detectCookieButtons() {
//   console.log("Scanning page for cookie buttons...");

//   const buttons = document.querySelectorAll("button");

//   const keywords = ["accept", "agree", "allow", "reject", "decline", "deny"];

//   buttons.forEach((button) => {
//     const buttonText = (button.innerText || "").trim().toLowerCase();

//     // Skip empty buttons
//     if (!buttonText) return;

//     console.log("Button found:", buttonText);

//     const isCookieConsentButton = keywords.some((keyword) =>
//       buttonText.includes(keyword),
//     );

//     if (isCookieConsentButton) {
//       console.log("Possible cookie consent button found:", button);
//     }
//   });
// }

// prevent repeated automation
let consentHandled = false;

function runConsentAutomation() {
  //stop if already handled
  if (consentHandled) {
    return;
  }

  console.log("Scanning website for supported CMPs...");

  // Step 1: Detect CMP
  const detectedCMP = detectCMP();
  //no CMP found
  if (!detectedCMP) {
    console.log("No supported CMP detected");

    return;
  }

  console.log(`Detected CMP: ${detectedCMP}`);

  // Step 2: Load CMP rules
  const cmpRules = RULE_REGISTRY[detectedCMP];

  //No rules found
  if (!cmpRules) {
    console.log("No rules found for detected CMP");

    return;
  }
  // Step 3: Extract reject selectors
  const rejectSelectors = cmpRules.rejectSelectors;

  // Step 4: Find reject button
  const rejectButton = findRejectButton(rejectSelectors);

  if (!rejectButton) {
    console.log("Reject button not found");

    return;
  }

  console.log("Reject button located");

  // Step 5: Click reject button
  const clickSuccess = clickRejectButton(rejectButton);

  if (clickSuccess) {
    consentHandled = true;

    console.log("Cookie consent successfully rejected");
  } else {
    console.log("Reject button click failed");
  }
}

// Initial execution
// runConsentAutomation();

// Retry system for delayed popups
function startRetries() {
  let attempts = 0;

  const maxAttempts = 10;

  const retryInterval = setInterval(() => {
    // Stop retries if consent already handled
    if (consentHandled) {
      clearInterval(retryInterval);
      return;
    }

    attempts++;

    console.log(`Retry attempt: ${attempts}`);

    runConsentAutomation();

    // Stop after max retries
    if (attempts >= maxAttempts) {
      console.log("Max retry attempts reached");
      clearInterval(retryInterval);
    }
  }, 2000);
}

// function init() {
//   console.log("Initializing Cookie Consent Extension...");
//   detectCookieButtons();
// }
function init() {
  console.log("Initializing Cookie Consent Extension...");
  runConsentAutomation();
  startRetries();
}

// Ensure DOM is ready before scanning
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
