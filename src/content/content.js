console.log("Cookie Consent Extension Loaded");

function detectCookieButtons() {
  console.log("Scanning page for cookie buttons...");

  const buttons = document.querySelectorAll("button");

  const keywords = ["accept", "agree", "allow", "reject", "decline", "deny"];

  buttons.forEach((button) => {
    const buttonText = (button.innerText || "").trim().toLowerCase();

    // Skip empty buttons
    if (!buttonText) return;

    console.log("Button found:", buttonText);

    const isCookieConsentButton = keywords.some((keyword) =>
      buttonText.includes(keyword),
    );

    if (isCookieConsentButton) {
      console.log("Possible cookie consent button found:", button);
    }
  });
}

function init() {
  console.log("Initializing Cookie Consent Extension...");
  detectCookieButtons();
}

// Ensure DOM is ready before scanning
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
