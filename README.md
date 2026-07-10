# relay-computer-blog

This is the source of my [relay computer blog](https://relaycomputer.co.uk) generated using Hugo.

## Prerequisites

- **Hugo (extended)** — the site uses SCSS, so the *extended* build is required. CI pins `0.164.0`; install a matching version locally (e.g. `brew install hugo`).
- **Node** — see `.nvmrc` (Node 24). Run `npm install` to pull in the CSS/JS packages (Bulma, BulmaJS) and Dart Sass.
- **Dart Sass** — Hugo compiles `assets/sass/main.scss` with Dart Sass, which must be on your `PATH`. `npm install` installs `sass-embedded` into `node_modules/.bin`; either add that to your `PATH` or install it globally with `npm install -g sass-embedded`.

## Development server

Run `hugo server` for a live-reloading dev server on http://localhost:1313.

## Build

Run `HUGO_ENV=production hugo` for a production build (or `hugo` for a development build). The generated site is written to the `public/` directory.

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/gh-pages.yml`): every push to `main` builds the site with the pinned Hugo version and publishes it to GitHub Pages. Dependency updates (npm packages and GitHub Actions) are proposed automatically by Dependabot.
