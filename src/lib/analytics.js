const EARLY_ACCESS_EVENT = "early_access_form_submitted";
const ALLOWED_UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
];

function sanitizeString(value) {
  if (typeof value !== "string") return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

export function getUtmParamsFromSearch(search) {
  const safeSearch = typeof search === "string" ? search : "";
  const params = new URLSearchParams(safeSearch);
  const utm = {};

  ALLOWED_UTM_KEYS.forEach((key) => {
    const value = sanitizeString(params.get(key));
    if (value) utm[key] = value;
  });

  return utm;
}

export function trackEarlyAccessSubmitted(input) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  if (!input || typeof input !== "object") return;

  const pageUrl = sanitizeString(input.page_url);
  if (!pageUrl) return;

  const safeProps = { page_url: pageUrl };

  ALLOWED_UTM_KEYS.forEach((key) => {
    const value = sanitizeString(input[key]);
    if (value) safeProps[key] = value;
  });

  window.gtag("event", EARLY_ACCESS_EVENT, safeProps);
}

