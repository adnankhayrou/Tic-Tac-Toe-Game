
const board = document.getElementById("board");
const message = document.getElementById("message");
const restartButton = document.getElementById("restart");
const playerXWinsElement = document.getElementById("playerXWins");
const playerOWinsElement = document.getElementById("playerOWins");

let boardState = Array(20).fill().map(() => Array(20).fill(''));
let currentPlayer = "X";
let gameOver = false;
let playerXWins = 0;
let playerOWins = 0;

// game board
GameBoard();

function handleClick(e) {
    const row = e.target.dataset.row;
    const col = e.target.dataset.col;
    if (boardState[row][col] == "" && gameOver == false) {
        boardState[row][col] = currentPlayer;
        e.target.textContent = currentPlayer;
    }
}



function GameBoard(){
    for (let i = 0; i < 20; i++) {
        for(let j = 0; j < 20; j++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.dataset.row = i;
        cell.dataset.col = j;
        board.appendChild(cell);
        cell.addEventListener("click", handleClick);
        }
    }
}