import { detectOneTrust } from "../cmps/onetrust/detector";

export function detectCMP() {
  console.log("Running CMP detection engine...");

  // OneTrust Detection
  if (detectOneTrust()) {
    console.log("Detected CMP: OneTrust");

    return "onetrust";
  }

  // No CMP detected
  console.log("No supported CMP detected");

  return null;
}
