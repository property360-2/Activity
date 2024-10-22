const gameBoard = document.getElementById("gameBoard");
const statusDisplay = document.getElementById("status");
const resetButton = document.getElementById("resetButton");

let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(clickedCell, clickedCellIndex) {
    if (board[clickedCellIndex] !== '' || !isGameActive) {
        return;
    }

    board[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    checkResult();
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] === '' || board[b] === '' || board[c] === '') {
            continue;
        }
        if (board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `${currentPlayer} has won!`;
        isGameActive = false;
        return;
    }

    if (!board.includes('')) {
        statusDisplay.textContent = "It's a draw!";
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `${currentPlayer}'s turn`;
}

function createBoard() {
    board.forEach((_, index) => {
        const cell = document.createElement("div");
        cell.classList.add("square");
        cell.setAttribute("data-cell-index", index);
        cell.addEventListener("click", () => handleCellClick(cell, index));
        gameBoard.appendChild(cell);
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    currentPlayer = 'X';
    statusDisplay.textContent = `${currentPlayer}'s turn`;
    document.querySelectorAll(".square").forEach(cell => {
        cell.textContent = '';
    });
}

createBoard();
resetButton.addEventListener("click", resetGame);
statusDisplay.textContent = `${currentPlayer}'s turn`;
