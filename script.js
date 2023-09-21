
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
let movesMade = 0;

// game board
GameBoard();

function checkWinner(row, col) {

    // Check horizontal
    for (let j = 0; j < 16; j++) {
        if(boardState[row][j] === currentPlayer && boardState [row][j + 1] === currentPlayer && boardState [row][j + 2] === currentPlayer && 
            boardState [row][j + 3] === currentPlayer && boardState [row][j + 4] === currentPlayer
        ){
            return true;
        }
    }

    // Check vertical
    for (let j = 0; j < 16; j++) {
        if(boardState[j][col] === currentPlayer && boardState [j+1][col] === currentPlayer && boardState [j+2][col] === currentPlayer &&
            boardState [j+3][col] === currentPlayer && boardState [j+4][col] === currentPlayer
        ){
            return true;
        }
    }

    

    return false;
}

function handleClick(e) {
    const row = e.target.dataset.row;
    const col = e.target.dataset.col;

    if (boardState[row][col] == "" && gameOver == false) {
        boardState[row][col] = currentPlayer;
        e.target.textContent = currentPlayer;
        movesMade++;
        message.textContent = `Player ${currentPlayer} Wins!`;
        console.log(movesMade);

        if (checkWinner(row, col)) {
            alert(`Player ${currentPlayer} Wins!`);
            if (currentPlayer === "X") {
                playerXWins++;
                playerXWinsElement.textContent = playerXWins;
            } else {
                playerOWins++;
                playerOWinsElement.textContent = playerOWins;
            }
            gameOver = true;
        } else if (movesMade == 400) {
            message.textContent = "It's a Draw!";
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            message.textContent = `Player ${currentPlayer} Turn`;
        }

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