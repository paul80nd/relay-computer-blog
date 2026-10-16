# relay-computer-blog

This is the source of my [relay computer blog](https://www.relaycomputer.co.uk) generated using Hugo.

## Prerequisites

- **Hugo (extended)** — the site uses SCSS, so the *extended* build is required. CI pins `0.168.0`; install a matching version locally (e.g. `brew install hugo`). Dependabot can't see this pin, so check for new [Hugo releases](https://github.com/gohugoio/hugo/releases) occasionally and bump `hugo-version` in the workflow and your local Hugo together.
- **Node** — see `.nvmrc` (Node 24). Run `npm install` to pull in the CSS/JS packages (Bulma, BulmaJS) and Dart Sass.
- **Dart Sass** — Hugo compiles `assets/sass/main.scss` with Dart Sass, which must be on your `PATH`. `npm install` installs `sass-embedded`, whose native binary lives in `node_modules/sass-embedded-<platform>/dart-sass` (e.g. `sass-embedded-darwin-arm64` on Apple Silicon); add that directory to your `PATH`, or install Dart Sass separately (e.g. `brew install sass/sass/sass`). Don't use `node_modules/.bin`: its `sass` may be the pure-JS package, which Hugo can't use.

## Development server

Run `hugo server` for a live-reloading dev server on http://localhost:1313.

## Build

The generated site in `public/` is committed so that every change shows its exact effect on the published site in the diff. Regenerate it with:

```sh
HUGO_ENV=production hugo --cleanDestinationDir
```

- **Always set `HUGO_ENV=production`.** A development build (plain `hugo`) marks every page `noindex` and should never be committed.
- **Don't add `--minify`.** CI minifies when it deploys; minifying locally would rewrite every committed file.
- **Keep `--cleanDestinationDir`.** It removes files the build no longer produces, so stale files don't linger (CI deploys with it too).

## Deployment

Deployment is automated via GitHub Actions (`.github/workflows/gh-pages.yml`): every push to `main` builds the site with the pinned Hugo version and publishes it to GitHub Pages. Dependency updates (npm packages and GitHub Actions) are proposed automatically by Dependabot.
