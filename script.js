
const board = document.getElementById("board");
const status = document.getElementById("status");
const restartButton = document.getElementById("restart");
const playerXWinsElement = document.getElementById("playerXWins");
const playerOWinsElement = document.getElementById("playerOWins");

let boardState = Array(400).fill("");
let playerXWins = 0;
let playerOWins = 0;

// Create the game board
for (let i = 0; i < 400; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.dataset.index = i;
    board.appendChild(cell);
}

