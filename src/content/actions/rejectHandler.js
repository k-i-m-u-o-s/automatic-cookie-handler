export function findRejectButton() {
  const selectors = [
    "#onetrust-reject-all-handler",
    ".reject-all-handler",
    "button[aria-label='Reject All']",
    "button[aria-label='Reject Non-Essential']",
    ".ot-pc-refuse-all-handler",
  ];

  // Selector-based detection
  for (const selector of selectors) {
    const button = document.querySelector(selector);

    if (button) {
      console.log("Reject button found using:", selector);

      return button;
    }
  }

  // Text fallback
  const rejectTexts = [
    "Reject",
    "Reject All",
    "Reject Non-Essential",
    "Decline",
  ];

  const buttons = document.querySelectorAll("button");

  for (const button of buttons) {
    const text = button.innerText.trim();

    if (rejectTexts.includes(text)) {
      console.log("Reject button found using text:", text);

      return button;
    }
  }
  return null;
}

export function clickRejectButton(button) {
  if (!button) return false;

  // Prevent hidden element clicks
  if (button.offsetParent === null) {
    return false;
  }

  button.click();

  console.log("Reject button clicked");

  return true;
}
