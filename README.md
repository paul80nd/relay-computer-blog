# relay-computer-blog

This is the source of my [relay computer blog](https://relaycomputer.co.uk) generated using Hugo.

## Development server

Bulma CSS styles are brought in on npm packages so a `npm install` will sort those out. You can then run `hugo server` for a dev server.

## Build

Run `HUGO_ENV=production hugo` to production build the project (or `hugo` for development build). All the website artifacts will then be stored in the `public/` directory (which are then uploaded verbatim to my host).
