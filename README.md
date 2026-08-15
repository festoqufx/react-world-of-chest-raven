# World of Chess

A React chess app with a clean black-and-white interface, light and dark themes, and a built-in opponent. Play as White, review every move, and switch themes from the header.

## Features

- Play against a minimax chess bot (Easy, Medium, Hard)
- Light mode and dark mode, saved in the browser and respectful of system preference
- Move history with keyboard shortcuts (`←` / `→`)
- Sound toggle, board flip, captured pieces, and material score
- Responsive layout for desktop, tablet, and mobile
- Accessible navigation, focus states, and skip-to-content link

## Pages

| Path | Page |
| --- | --- |
| `/` | Home |
| `/game` | Play against the bot |
| any other path | 404 |

## Getting started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The app reloads as you edit.

### Scripts

| Command | Description |
| --- | --- |
| `npm start` | Run the development server |
| `npm test` | Run tests in watch mode |
| `npm run build` | Create an optimized production build |

On Node 17+, the start and build scripts enable `--openssl-legacy-provider` so Create React App 3 can compile on modern Node (including Vercel).

## Theme and saved settings

Use the sun/moon control in the header to switch themes. Preferences are stored in `localStorage`:

| Key | Purpose |
| --- | --- |
| `chess-theme` | `light` or `dark` |
| `chess-sound` | Sound on or off |
| `chess-depth` | Bot difficulty (`1`, `2`, or `3`) |

## Deploy on Vercel

This repo includes a `vercel.json` that builds with `npm run build`, publishes the `build` folder, and rewrites client routes (such as `/game`) to `index.html`.

Push to `main` and Vercel will deploy. The OpenSSL legacy provider in the build script avoids `ERR_OSSL_EVP_UNSUPPORTED` on Node 17+.

## Project structure

```
src/
  App.js
  index.css
  context/ThemeContext.js
  i18n/
  components/
    Header/
    HomePage/
    Game/
    PageNotFound/
vercel.json
```

The game engine lives in `src/components/Game/chess.js`. Theme tokens live in `src/index.css` as CSS custom properties.

## License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
