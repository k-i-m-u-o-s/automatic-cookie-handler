export function normalizeText(text) {
  //handle empty values
  if (!text) {
    return "";
  }

  return text.toLowerCase().replace(/\s+/g, " ").trim();
}

export function matchesRejectText(text) {
  const normalizedText = normalizeText(text);

  const rejectKeywords = [
    "reject",
    "reject all",
    "reject non-essential",
    "decline",
    "necessary only",
  ];

  return rejectKeywords.some((keyword) => normalizedText.includes(keyword));
}
