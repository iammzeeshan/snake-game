# Snake Game

A classic browser-based Snake Game built from scratch using vanilla HTML, CSS, and JavaScript — no libraries or frameworks. Eat the food, grow the snake, and survive as long as possible without hitting the board boundary.

## Live Demo

[Play it here](#) <!-- replace with your GitHub Pages / Vercel / Netlify link -->

## Features

- Start and restart game controls
- Arrow-key movement
- Live score counter
- Persistent high score using browser `localStorage`
- Elapsed-time tracker
- Random food placement on a responsive grid-based board

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript (no dependencies)

## How to Run

1. Clone this repository:
   ```
   git clone https://github.com/iammzeeshan/snake-game.git
   ```
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in any modern web browser.
4. Click **START GAME** and use the arrow keys to play.

No installation or build step required.

## Controls

| Key | Action     |
| --- | ---------- |
| `↑` | Move up    |
| `↓` | Move down  |
| `←` | Move left  |
| `→` | Move right |

## How It Works

- The snake moves automatically every 400 ms via `setInterval`.
- Eating food increases the score and grows the snake by one segment.
- Food position is randomized within the grid bounds after each pickup.
- The current score resets when a new game starts; the high score persists across sessions via `localStorage`.
- The game currently ends when the snake reaches a board boundary.

## Known Limitations / Roadmap

- [ ] Self-collision detection (snake currently does not end the game when it hits itself)
- [ ] Touch controls for mobile devices
- [ ] Increasing speed as score grows
- [ ] Custom game-over modal instead of a default alert
- [ ] Sound effects and a pause button

## Project Structure

```
snake-game/
├── index.html     # Game layout
├── style.css      # Game design and board styling
├── script.js      # Game logic, timer, scoring, and keyboard controls
└── README.md
```

## Author

Built by iammzeeshan

---

If you found this project useful, consider giving it a star on GitHub.

