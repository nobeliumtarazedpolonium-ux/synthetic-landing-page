# ReleasePilot Landing Page

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A responsive React landing page for a fictional release-management platform. It is intentionally lightweight so a new developer can clone, install, run, inspect, and build it during a short onboarding workflow.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal, normally `http://localhost:5173`.

## Production build

```bash
npm run build
```

The optimized output is written to `dist/`.

## Main checks

- Navigation links scroll to the corresponding page sections.
- The mobile menu opens, closes, and exposes all navigation links.
- The early-access form rejects invalid email addresses.
- A valid email displays a success message.
- The page reflows at desktop, tablet, and mobile widths.

## License

This public project is available under the [MIT License](LICENSE). It may be
used, copied, modified, and distributed subject to the terms of that license.
