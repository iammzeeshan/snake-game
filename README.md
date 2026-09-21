# Snake Game

A classic browser-based Snake Game built with vanilla HTML, CSS, and JavaScript. Eat the food, grow the snake, and survive as long as possible without hitting the board boundary.

## Features

- Start and restart game controls
- Arrow-key movement
- Live score counter
- Persistent high score using browser `localStorage`
- Elapsed-time tracker
- Random food placement
- Responsive grid-based board

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript

## How to Run

1. Download or clone this repository.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in any modern web browser.
4. Click **START GAME** and use the arrow keys to play.

No dependencies or installation are required.

## Controls

| Key | Action |
| --- | --- |
| `↑` | Move up |
| `↓` | Move down |
| `←` | Move left |
| `→` | Move right |

## How It Works

- The snake moves automatically every 400 ms.
- Eating green food increases the score and the snake's length.
- The current score resets when a new game starts.
- The highest score is saved in your browser, so it remains available after refreshing the page.
- The game ends when the snake reaches a board boundary.

## Project Structure

```text
snake-game/
├── index.html     # Game layout
├── style.css      # Game design and board styling
├── script.js      # Game logic, timer, scoring, and keyboard controls
└── README.md
```

## Future Improvements

- Add collision detection when the snake hits itself
- Add touch controls for mobile devices
- Increase game speed as the score grows
- Replace the browser alert with a game-over screen
- Add sound effects and a pause button

## Author

Created by Iammzeeshan.

---

If you found this project useful, consider giving it a star on GitHub.
