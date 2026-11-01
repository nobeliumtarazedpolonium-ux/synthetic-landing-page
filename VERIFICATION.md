# Verification record

Verified on 31 October 2026.

## Build checks

- `npm install`: completed successfully with no reported vulnerabilities.
- `npm run build`: completed successfully using Vite 8.3.5.
- Browser console: no application errors during the tested journeys.

## Browser journeys

- Primary navigation moves to the corresponding page section.
- Mobile navigation opens and exposes the expected links.
- Invalid email input is rejected by browser validation.
- A valid email displays the early-access success state and submitted address.
- The first keyboard Tab focuses the home link and visible focus styling is present.

## Responsive inspection

The rendered page was captured and visually inspected at:

- 1440 × 900 desktop
- 768 × 1024 tablet
- 390 × 844 mobile
- 320 × 700 narrow mobile

No horizontal overflow, clipped primary headings, or inaccessible primary actions were observed at these sizes. Reduced-motion mode was included in the responsive run.

Screenshots are stored in `verification/` and excluded from the production build.
