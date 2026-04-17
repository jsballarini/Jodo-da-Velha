const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cells = Array.from(document.querySelectorAll("[data-cell]"));
const statusText = document.querySelector("#status");
const restartButton = document.querySelector("#restart-button");
const scoreX = document.querySelector("#score-x");
const scoreO = document.querySelector("#score-o");
const scoreDraw = document.querySelector("#score-draw");

const scores = {
  X: 0,
  O: 0,
  draw: 0,
};

let boardState = Array(9).fill("");
let currentPlayer = "X";
let gameActive = true;

function updateStatus(message) {
  statusText.textContent = message;
}

function updateScores() {
  scoreX.textContent = String(scores.X);
  scoreO.textContent = String(scores.O);
  scoreDraw.textContent = String(scores.draw);
}

function getWinningCombination() {
  return WINNING_COMBINATIONS.find((combination) => {
    const [a, b, c] = combination;
    return (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    );
  });
}

function highlightWinner(combination) {
  combination.forEach((index) => {
    cells[index].classList.add("winner");
  });
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateStatus(`Vez do jogador ${currentPlayer}`);
}

function finishGame(message) {
  gameActive = false;
  cells.forEach((cell) => {
    cell.disabled = true;
  });
  updateStatus(message);
}

function handleCellClick(event) {
  const cell = event.currentTarget;
  const index = Number(cell.dataset.index);

  if (!gameActive || boardState[index]) {
    return;
  }

  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;
  cell.disabled = true;

  const winningCombination = getWinningCombination();

  if (winningCombination) {
    scores[currentPlayer] += 1;
    updateScores();
    highlightWinner(winningCombination);
    finishGame(`Jogador ${currentPlayer} venceu!`);
    return;
  }

  if (boardState.every(Boolean)) {
    scores.draw += 1;
    updateScores();
    finishGame("Empate! Nenhum jogador venceu esta rodada.");
    return;
  }

  switchPlayer();
}

function resetBoard() {
  boardState = Array(9).fill("");
  currentPlayer = "X";
  gameActive = true;

  cells.forEach((cell) => {
    cell.textContent = "";
    cell.disabled = false;
    cell.classList.remove("winner");
  });

  updateStatus("Vez do jogador X");
}

cells.forEach((cell, index) => {
  cell.dataset.index = String(index);
  cell.addEventListener("click", handleCellClick);
});

restartButton.addEventListener("click", resetBoard);

updateScores();
resetBoard();
