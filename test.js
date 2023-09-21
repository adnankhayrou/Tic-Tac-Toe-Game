// get html elements
const gameBoard = document.getElementById('gameBoard');
const playerXScore = document.getElementById('playerXScore');
const playerOScore = document.getElementById('playerOScore');
let xWins = 0;
let oWins = 0;

// set initial variables
let tracking_game = Array(20).fill().map(() => Array(20).fill(''));
let currentPlayer = 'X';



init();

function handleClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    tracking_game[row][col] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add(currentPlayer);
    if( checkWin(row, col)){
        //console.warn("it is over. " + currentPlayer + "  Wins")
        announceWinner();
        // stop the game
        stopGame();
        // announce the winner
    }else{
        //i need a condition hna
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        event.target.removeEventListener('click', handleClick);
    }
}

function checkWin(row, col) {

    // Check for horizontal wins
    for (let j = 0; j < 16; j++) {
        if(tracking_game[row][j]=== currentPlayer &&
            tracking_game [row][j + 1] === currentPlayer &&
            tracking_game [row][j + 2] === currentPlayer &&
            tracking_game [row][j + 3] === currentPlayer &&
            tracking_game [row][j + 4] === currentPlayer
        ){
            return true;
        }
    }
    // Check for vertical
    for (let j = 0; j < 16; j++) {
            if(tracking_game[j][col]=== currentPlayer &&
                tracking_game [j+1][col] === currentPlayer &&
                tracking_game [j+2][col] === currentPlayer &&
                tracking_game [j+3][col] === currentPlayer &&
                tracking_game [j+4][col] === currentPlayer
            ){
                return true;
            }
    }

    // Check for diagonal wins (top-left to bottom-right)
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            if (
                tracking_game[i][j] === currentPlayer &&
                tracking_game[i + 1][j + 1] === currentPlayer &&
                tracking_game[i + 2][j + 2] === currentPlayer &&
                tracking_game[i + 3][j + 3] === currentPlayer &&
                tracking_game[i + 4][j + 4] === currentPlayer
            ) {
                return true;
            }
        }
    }

    // Check for diagonal wins (top-right to bottom-left)
    for (let i = 0; i < 16; i++) {
        for (let j = 4; j < 20; j++) {
            if (
                tracking_game[i][j] === currentPlayer &&
                tracking_game[i + 1][j - 1] === currentPlayer &&
                tracking_game[i + 2][j - 2] === currentPlayer &&
                tracking_game[i + 3][j - 3] === currentPlayer &&
                tracking_game[i + 4][j - 4] === currentPlayer
            ) {
                return true;
            }
        }
    }

    return false;
}

function stopGame() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.removeEventListener('click', handleClick);
    });
}

// initialize the game
function init() {
    gameBoard.innerHTML = '';
    // create the game board
    // create game board
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 20; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.dataset.row = i;
            square.dataset.col = j;
            square.addEventListener('click', handleClick);
            gameBoard.appendChild(square);
        }
    }
    currentPlayer = 'X';
    tracking_game = Array(20).fill().map(() => Array(20).fill(''));
}

function announceWinner() {
    if (currentPlayer === 'X') {
        xWins++;
        playerXScore.textContent = xWins;
        console.warn('Player X wins!');
    } else {
        oWins++;
        playerOScore.textContent = oWins;
        console.warn('Player O wins!');
    }
    init();
}

// reset the game
document.getElementById('reset').addEventListener('click', init);