import { c as create_ssr_component, e as escape, d as each, f as add_attribute, v as validate_component } from "../../chunks/ssr.js";
const BOARD_COLUMNS = 10;
const BOARD_ROWS = 20;
const TETROMINO_NAMES = ["I", "J", "L", "O", "S", "Z", "T"];
const TETROMINOES = {
  "I": [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ],
  "J": [
    [1, 0, 0],
    [1, 1, 1],
    [0, 0, 0]
  ],
  "L": [
    [0, 0, 1],
    [1, 1, 1],
    [0, 0, 0]
  ],
  "O": [
    [1, 1],
    [1, 1]
  ],
  "S": [
    [0, 1, 1],
    [1, 1, 0],
    [0, 0, 0]
  ],
  "Z": [
    [1, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ],
  "T": [
    [0, 1, 0],
    [1, 1, 1],
    [0, 0, 0]
  ]
};
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}
function rotateMatrixCenter(matrix) {
  const N = matrix.length;
  const rotatedMatrix = [];
  for (let i = 0; i < N; i++) {
    rotatedMatrix[i] = [];
    for (let j = 0; j < N; j++) {
      rotatedMatrix[i][j] = matrix[N - j - 1][i];
    }
  }
  return rotatedMatrix;
}
class Tetris {
  constructor() {
    this.playfield;
    this.tetromino;
    this.nextTetromino;
    this.score;
    this.score = 0;
    this.isGameOver;
    this.init();
  }
  init() {
    this.generateBoard();
    this.generateTetromino();
    this.generateNextTetromino();
    this.isGameOver = false;
    this.setScore(0);
  }
  setScore(score) {
    this.score = score;
  }
  getScore() {
    return this.score;
  }
  generateBoard() {
    this.playfield = new Array(BOARD_ROWS).fill().map(() => new Array(BOARD_COLUMNS).fill(0));
  }
  generateTetromino() {
    const name = getRandomElement(TETROMINO_NAMES);
    const matrix = TETROMINOES[name];
    const column = BOARD_COLUMNS / 2 - Math.floor(matrix.length / 2);
    const row = -2;
    this.tetromino = {
      name,
      matrix,
      row,
      column,
      ghostColumn: column,
      ghostRow: row
    };
    this.calculateGhostPosition();
  }
  generateNextTetromino() {
    const name = getRandomElement(TETROMINO_NAMES);
    const matrix = TETROMINOES[name];
    const column = BOARD_COLUMNS / 2 - Math.floor(matrix.length / 2);
    const row = -2;
    this.nextTetromino = {
      name,
      matrix,
      row,
      column,
      ghostColumn: column,
      ghostRow: row
    };
    return this.nextTetromino;
  }
  moveTetrominoDown() {
    this.tetromino.row += 1;
    if (!this.isValid()) {
      this.tetromino.row -= 1;
      this.placeTetromino();
    }
  }
  moveTetrominoLeft() {
    this.tetromino.column -= 1;
    if (!this.isValid()) {
      this.tetromino.column += 1;
    } else {
      this.calculateGhostPosition();
    }
  }
  moveTetrominoRight() {
    this.tetromino.column += 1;
    if (!this.isValid()) {
      this.tetromino.column -= 1;
    } else {
      this.calculateGhostPosition();
    }
  }
  rotateTetromino() {
    const oldMatrix = this.tetromino.matrix;
    const rotatedMatrix = rotateMatrixCenter(this.tetromino.matrix);
    this.tetromino.matrix = rotatedMatrix;
    if (!this.isValid()) {
      this.tetromino.matrix = oldMatrix;
    } else {
      this.calculateGhostPosition();
    }
  }
  dropTetrominoDown() {
    this.tetromino.row = this.tetromino.ghostRow;
    this.placeTetromino();
  }
  isValid() {
    const matrixSize = this.tetromino.matrix.length;
    for (let row = 0; row < matrixSize; row++) {
      for (let column = 0; column < matrixSize; column++) {
        if (!this.tetromino.matrix[row][column])
          continue;
        if (this.isOutsideOfGameBoard(row, column))
          return false;
        if (this.isCollides(row, column))
          return false;
      }
    }
    return true;
  }
  isOutsideOfGameBoard(row, column) {
    return this.tetromino.column + column < 0 || this.tetromino.column + column >= BOARD_COLUMNS || this.tetromino.row + row >= this.playfield.length;
  }
  isCollides(row, column) {
    return this.playfield[this.tetromino.row + row]?.[this.tetromino.column + column];
  }
  placeTetromino() {
    const matrixSize = this.tetromino.matrix.length;
    for (let row = 0; row < matrixSize; row++) {
      for (let column = 0; column < matrixSize; column++) {
        if (!this.tetromino.matrix[row][column])
          continue;
        if (this.isOutsideOfTopBoard(row)) {
          this.isGameOver = true;
          return;
        }
        this.playfield[this.tetromino.row + row][this.tetromino.column + column] = this.tetromino.name;
      }
    }
    this.processFilledRows();
    this.tetromino = this.nextTetromino;
    this.calculateGhostPosition();
    this.generateNextTetromino();
  }
  isOutsideOfTopBoard(row) {
    return this.tetromino.row + row < 0;
  }
  processFilledRows() {
    const filledLines = this.findFilledRows();
    if (filledLines.length !== 0) {
      this.score += filledLines.length * 10;
    }
    this.removeFilledRows(filledLines);
  }
  findFilledRows() {
    const filledRows = [];
    for (let row = 0; row < BOARD_ROWS; row++) {
      if (this.playfield[row].every((cell) => Boolean(cell))) {
        filledRows.push(row);
      }
    }
    return filledRows;
  }
  removeFilledRows(filledRows) {
    filledRows.forEach((row) => {
      this.dropRowsAbove(row);
    });
  }
  dropRowsAbove(rowToDelete) {
    for (let row = rowToDelete; row > 0; row--) {
      this.playfield[row] = this.playfield[row - 1];
    }
    this.playfield[0] = new Array(BOARD_COLUMNS).fill(0);
  }
  calculateGhostPosition() {
    const tetrominoRow = this.tetromino.row;
    this.tetromino.row++;
    while (this.isValid()) {
      this.tetromino.row++;
    }
    this.tetromino.ghostRow = this.tetromino.row - 1;
    this.tetromino.ghostColumn = this.tetromino.column;
    this.tetromino.row = tetrominoRow;
  }
  reset() {
    this.init();
  }
}
const main_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".content.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{display:flex;justify-content:center;align-items:flex-end;height:100%;width:100%;background:#15142A;background:radial-gradient(#37364C, #15142A);background-position:center center;background-repeat:no-repeat;background-size:cover}.wrapper.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{display:flex;justify-content:space-between;align-items:flex-start;height:82%;width:55%}.grid.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{position:relative;display:grid;grid-template-columns:repeat(10, auto);grid-template-rows:repeat(20, auto);padding:0.6vh;gap:0.3vh;border-radius:0.6vh;background:rgba(0, 0, 0, 0.20)}.grid.svelte-glw2fz>.cell.svelte-glw2fz.svelte-glw2fz{position:relative;--cell-size:min(3.5vh, 7.5vw);height:var(--cell-size);width:var(--cell-size);border-radius:0.3vh;background:rgba(0, 0, 0, 0.30)}.panel.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;height:100%;width:20%}.panel.svelte-glw2fz .title.svelte-glw2fz.svelte-glw2fz{font-size:5vh;font-weight:bold;color:#FFF3E2;margin-bottom:2vh}.panel.svelte-glw2fz .score.svelte-glw2fz.svelte-glw2fz{font-size:5vh;font-weight:bold;color:#FFF3E2;margin-bottom:2vh}.panel.svelte-glw2fz .next-tetromino.svelte-glw2fz.svelte-glw2fz{position:relative;display:grid;grid-template-columns:repeat(4, auto);grid-template-rows:repeat(3, auto);padding:0.6vh;gap:0.3vh;border-radius:0.6vh;background:rgba(0, 0, 0, 0.20)}.panel.svelte-glw2fz .next-tetromino.svelte-glw2fz>.cell.svelte-glw2fz{position:relative;--cell-size:min(3.5vh, 7.5vw);height:var(--cell-size);width:var(--cell-size);border-radius:0.3vh;background:rgba(0, 0, 0, 0.30)}.start.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{top:0;left:0;position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;width:100%;background:rgba(0, 0, 0, 0.60);z-index:1}.start.svelte-glw2fz h1.svelte-glw2fz.svelte-glw2fz{color:#FFF3E2;font-size:5rem;margin-bottom:0}.start.svelte-glw2fz p.svelte-glw2fz.svelte-glw2fz{color:#FFF3E2;font-size:2rem;margin-top:0}@keyframes svelte-glw2fz-hide{0%{transform:scale(0.8) rotate(30deg)}45%{transform:scale(0.8) rotate(-30deg)}90%{transform:scale(1) rotate(0)}}@media screen and (max-width: 428px){.content.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{align-items:center}.wrapper.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{flex-direction:column;align-items:center;height:90%;justify-content:flex-end}.grid.svelte-glw2fz>.cell.svelte-glw2fz.svelte-glw2fz{--cell-size:min(3vh, 5.5vw)}#panel-left.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{display:none}#panel-right.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{flex-direction:row;width:100%;justify-content:space-between}.panel.svelte-glw2fz .next-tetromino.svelte-glw2fz>.cell.svelte-glw2fz{--cell-size:min(3vh, 5.5vw)}.panel.svelte-glw2fz .score.svelte-glw2fz.svelte-glw2fz{padding-top:3vh}.start.svelte-glw2fz.svelte-glw2fz.svelte-glw2fz{width:100%;height:100%;justify-content:center;align-items:center}.start.svelte-glw2fz h1.svelte-glw2fz.svelte-glw2fz{font-size:3rem}.start.svelte-glw2fz p.svelte-glw2fz.svelte-glw2fz{font-size:1.5rem}}",
  map: null
};
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cells = [];
  let nextTetrominoCells = [];
  let score = 0;
  let startText = ["Játék", "Enter/Katt a starthoz"];
  new Tetris();
  $$result.css.add(css$1);
  return `<div class="content svelte-glw2fz" id="content-tetris"><div class="wrapper svelte-glw2fz">${`<div class="start svelte-glw2fz"><h1 class="svelte-glw2fz">${escape(startText[0])}</h1> <p class="svelte-glw2fz">${escape(startText[1])}</p></div>`} <div class="panel svelte-glw2fz" id="panel-right" style="justify-content: space-between; height: 38%"><div class="score svelte-glw2fz">${escape(score)}</div> <div class="next-tetromino svelte-glw2fz">${each(Array(12), (_, i) => {
    return `<div class="cell svelte-glw2fz"${add_attribute("this", nextTetrominoCells[i], 0)}></div>`;
  })}</div></div> <div class="grid svelte-glw2fz">${each(Array(BOARD_ROWS * BOARD_COLUMNS), (_, i) => {
    return `<div class="cell svelte-glw2fz"${add_attribute("this", cells[i], 0)}></div>`;
  })}</div> <div class="panel svelte-glw2fz" id="panel-left" style="align-items: flex-start" data-svelte-h="svelte-cn3r86"><div class="title svelte-glw2fz">TETRIS</div></div></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".content.svelte-1uum795{height:100vh;width:100%;display:flex;justify-content:center;align-items:center}@media(max-width: 600px){.content.svelte-1uum795{height:100svh}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="content svelte-1uum795">${validate_component(Main, "Main").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Page as default
};
