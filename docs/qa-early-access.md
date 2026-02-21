# Early Access QA and Verification

## Environment

| Field | Value |
| --- | --- |
| Interest form URL | `https://interest-form-hazel.vercel.app/interest-form` |
| Thank-you URL | `https://interest-form-hazel.vercel.app/thanks` |
| GA4 Measurement ID | `G-ZX1N7C6KJ9` |
| Build SHA | `<fill at PR time>` |
| Test date | `<fill at QA time>` |
| Tester | `<fill at QA time>` |

## Required External HubSpot Setup

- Configure each hosted HubSpot form success behavior to redirect to `https://interest-form-hazel.vercel.app/thanks`.
- This codebase does not assume query-parameter redirect support (`redirect_url` is not used in code).
- If HubSpot supports preserving UTMs into the redirect URL, enable it.

## UTM Expectation

- Landing page: UTMs are always captured on load (best effort) and stored in `sessionStorage` (`ea_landing_utm`).
- Thank-you page (`/thanks`): event uses query UTMs first; if missing, it falls back to stored landing-page UTMs.
- This is intentionally best-effort because hosted form redirects may not always preserve UTMs.

## Browser Matrix (Minimum)

| Platform | Browser | Result | Notes |
| --- | --- | --- | --- |
| Desktop | Chrome (latest) | ☐ Pass / ☐ Fail | |
| Desktop | Safari (latest) | ☐ Pass / ☐ Fail | |
| Mobile | iOS Safari (latest) | ☐ Pass / ☐ Fail | |
| Mobile | Android Chrome (latest) | ☐ Pass / ☐ Fail | |

## Functional QA Checklist

| Check | Result | Notes |
| --- | --- | --- |
| Page loads without console errors | ☐ Pass / ☐ Fail | |
| CTA behavior works as expected | ☐ Pass / ☐ Fail | Hosted form opens |
| Submit success redirects to `/thanks` only after confirmed success | ☐ Pass / ☐ Fail | |
| GA event does not fire on click | ☐ Pass / ☐ Fail | |
| GA event fires once on `/thanks` | ☐ Pass / ☐ Fail | Guard key: `ea_submit_tracked` |
| `/thanks` refresh does not duplicate event | ☐ Pass / ☐ Fail | |
| Event params contain only allowlisted keys | ☐ Pass / ☐ Fail | `page_url`, optional `utm_*` |
| No PII appears in GA params | ☐ Pass / ☐ Fail | No email/name/phone/free text |

## HubSpot-Side Verification

| Check | Result | Notes |
| --- | --- | --- |
| Contact created/updated | ☐ Pass / ☐ Fail | |
| Contact added to "Reana – Early Access list" | ☐ Pass / ☐ Fail | |
| Confirmation workflow email triggered (if configured) | ☐ Pass / ☐ Fail | |

## GA Verification Steps (For PR Notes)

1. Open `https://interest-form-hazel.vercel.app/interest-form?utm_source=test&utm_medium=qa&utm_campaign=earlyaccess`.
2. Submit the hosted HubSpot form successfully.
3. Confirm you land on `https://interest-form-hazel.vercel.app/thanks` (with or without query UTMs).
4. In GA4 Realtime or DebugView, verify `early_access_form_submitted` appears once.
5. Open event parameters and confirm:
   - `page_url` is present.
   - `utm_*` keys are present only when available.
   - No PII values are present.

## Screenshot Checklist (Attach to PR)

- ☐ GA Realtime or DebugView showing `early_access_form_submitted`.
- ☐ GA event parameter panel showing only allowed parameters.
- ☐ Lighthouse Desktop report screenshot.
- ☐ Lighthouse Mobile report screenshot.

## Lighthouse Targets

- Performance: 80+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## Lighthouse Run Notes

- Run one Desktop and one Mobile report in Incognito.
- URL under test: `https://interest-form-hazel.vercel.app/interest-form`.
- If any score is below target, log issue and fix notes:

| Area | Score | Target | Action Taken |
| --- | --- | --- | --- |
| Performance (Desktop) |  | 80+ |  |
| Accessibility (Desktop) |  | 90+ |  |
| Best Practices (Desktop) |  | 90+ |  |
| SEO (Desktop) |  | 90+ |  |
| Performance (Mobile) |  | 80+ |  |
| Accessibility (Mobile) |  | 90+ |  |
| Best Practices (Mobile) |  | 90+ |  |
| SEO (Mobile) |  | 90+ |  |
