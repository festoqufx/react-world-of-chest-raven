# World of Chess

A React chess app with a clean black-and-white interface, light and dark themes, and a built-in opponent. Play as White and review every move.

## Features

- Play against a minimax chess bot with Easy, Medium, and Hard difficulty
- Light mode and dark mode, saved in the browser and respectful of system preference
- Move history with keyboard shortcuts (`←` / `→`)
- Sound toggle, board flip, captured pieces, and material score
- English, Armenian, and Russian translations
- Responsive layout for desktop, tablet, and mobile
- Accessible navigation, focus states, and skip-to-content link

## Getting started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The app reloads as you edit.

On Node 17+, the start script enables the OpenSSL legacy provider so Create React App 3 can compile.

### Other scripts

| Command | Description |
| --- | --- |
| `npm test` | Run tests in watch mode |
| `npm run build` | Create an optimized production build |

## Theme

Use the sun/moon control in the header to switch themes. The choice is stored as `chess-theme` in `localStorage`. Game sound and bot difficulty are stored as `chess-sound` and `chess-depth`.

## Project structure

```
src/
  App.js
  context/ThemeContext.js
  i18n/
  components/
    Header/
    HomePage/
    Game/
    PageNotFound/
```

The game engine lives in `src/components/Game/chess.js`. Theme tokens live in `src/index.css` as CSS custom properties.

## License

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
