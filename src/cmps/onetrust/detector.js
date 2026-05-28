export function detectOneTrust() {
  //   const banner = document.querySelector("#onetrust-banner-sdk");

  const selectors = [
    //main banner
    "#onetrust-banner-sdk",

    //consent SDK container
    "#onetrust-consent-sdk",

    //preference center
    ".onetrust-pc-dark-filter",

    // common OneTrust class
    ".ot-sdk-container",
  ];

  //   if (banner) {
  //     console.log("OneTrust banner detected");
  //     return true;
  //   }

  for (const selector of selectors) {
    const banner = document.querySelector(selector);

    if (banner) {
      console.log("OneTrust banner detected using:", selector);
      return true;
    }
  }

  return false;
}
