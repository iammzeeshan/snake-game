const board = document.querySelector('.board');
const startpage = document.querySelector('.startpage');
const startgame = document.querySelector('.startGame');
const restart = document.querySelector('.restart');
const time = document.querySelector("#time");
const score = document.querySelector("#score");
const highscore = document.querySelector("#highscore");

let highScoreValue = Number(localStorage.getItem("highscore")) || 0;
highscore.textContent = highScoreValue;

let count = 0;

const blockHeight = 50;
const blockWidth = 50;

let cols = Math.floor(board.clientWidth / blockWidth);
let rows = Math.floor(board.clientHeight / blockHeight);

let intervalId = null;
let timer = null;

let seconds = 0;

const snake = [
    { x: 1, y: 3 }
];

function getRandomFood() {
    let pos;
    do {
        pos = {
            x: Math.floor(Math.random() * rows),
            y: Math.floor(Math.random() * cols)
        };
    } while (snake.some(s => s.x === pos.x && s.y === pos.y));
    return pos;
}

let food = getRandomFood();

const blocks = {};

let direction = "right";

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const block = document.createElement('div');

        block.classList.add("block");

        board.appendChild(block);

        blocks[`${row}-${col}`] = block;
    }
}

startgame.addEventListener('click', () => {
    startGame();
});

restart.addEventListener('click', () => {
    startGame();
});

function startGame() {

    clearInterval(intervalId);
    clearInterval(timer);

    startpage.style.display = "none";

    count = 0;
    score.textContent = count;

    seconds = 0;
    time.textContent = "00:00";

    snake.length = 0;
    snake.push({ x: 1, y: 3 });

    direction = "right";

    Object.values(blocks).forEach(block => {
        block.classList.remove("fill");
        block.classList.remove("food");
    });

    food = getRandomFood();

    blocks[`${food.x}-${food.y}`]
        ?.classList.add("food");

    intervalId = setInterval(() => {
        render();
    }, 400);

    timer = setInterval(() => {

        seconds++;

        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;

        time.textContent =
            `${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;

    }, 1000);
}

function render() {

    let head = null;

    if (direction === "right") {
        head = {
            x: snake[0].x,
            y: snake[0].y + 1
        };
    }

    else if (direction === "left") {
        head = {
            x: snake[0].x,
            y: snake[0].y - 1
        };
    }

    else if (direction === "up") {
        head = {
            x: snake[0].x - 1,
            y: snake[0].y
        };
    }

    else if (direction === "down") {
        head = {
            x: snake[0].x + 1,
            y: snake[0].y
        };
    }

    const hitSelf = snake.some(
        segment => segment.x === head.x && segment.y === head.y
    );

    if (
        head.x < 0 ||
        head.x >= rows ||
        head.y < 0 ||
        head.y >= cols ||
        hitSelf
    ) {

        alert("Game Over");

        clearInterval(intervalId);
        clearInterval(timer);

        if (highScoreValue < count) {
            highScoreValue = count;

            highscore.textContent = highScoreValue;

            localStorage.setItem("highscore", highScoreValue);
        }

        return;
    }

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`]
            ?.classList.remove('fill');
    });

    let ateFood = false;

    if (head.x === food.x && head.y === food.y) {

        ateFood = true;

        blocks[`${food.x}-${food.y}`]
            ?.classList.remove('food');

        count++;

        score.textContent = count;
    }

    snake.unshift(head);

    if (!ateFood) {
        snake.pop();
    }

    snake.forEach(segment => {
        blocks[`${segment.x}-${segment.y}`]
            ?.classList.add('fill');
    });

    if (ateFood) {
        food = getRandomFood();
    }

    blocks[`${food.x}-${food.y}`]
        ?.classList.add('food');
}

addEventListener("keydown", (evt) => {

    if (evt.key === "ArrowUp") {

        if (direction !== "down") {
            direction = "up";
        }

    }

    else if (evt.key === "ArrowDown") {

        if (direction !== "up") {
            direction = "down";
        }

    }

    else if (evt.key === "ArrowRight") {

        if (direction !== "left") {
            direction = "right";
        }

    }

    else if (evt.key === "ArrowLeft") {

        if (direction !== "right") {
            direction = "left";
        }

    }

});git add script.js


