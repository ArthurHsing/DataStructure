const UNSIGNED = 0;
const sudokuGrid = [
  [5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

const usedInRow = (g, row, num) => {
  for (let i = 0; i < g.length; i++) {
    if (g[row][i] === num) {
      return true;
    }
  }
  return false;
}
const usedInCol = (g, col, num) => {
  for (let i = 0; i < g.length; i++) {
    if (g[i][col] === num) {
      return true;
    }
  }
  return false;
}
const usedInBox = (g, row, col, num) => {
  const boxRowStart = Math.floor(row / 3) * 3;
  const boxColStart = Math.floor(col / 3) * 3;
  for (let i = boxRowStart; i < boxRowStart + 3; i++) {
    for (let j = boxColStart; j < boxColStart + 3; j++) {
      if (g[i][j] === num) {
        return true;
      }
    }
  }
  return false;
}

const isSafe = (g, row, col, num) => {
  return (
    !usedInRow(g, row, num) &&
    !usedInCol(g, col, num) &&
    !usedInBox(g, row, col, num)
  )
}

const fill = (g) => {
  let row;
  let col;
  let checkSpace = false;
  for (row = 0; row < g.length; row++) {
    for (col = 0; col < g[row].length; col++) {
      if (g[row][col] === UNSIGNED) {
        checkSpace = true;
        break;
      }
    }
    if (checkSpace) {
      break;
    }
  }
  if (!checkSpace) {
    return true;
  }
  for (let num = 1; num <= 9; num++) {
    if (isSafe(g, row, col, num)) {
      g[row][col] = num;
      if (fill(g)) {
        return true;
      }
      g[row][col] = UNSIGNED;
    }
  }
  return false;
}

const sudoku = (g) => {
  if (fill(g)) {
    return g;
  }
  return 'NO SOLUTION!';
}
console.log(sudoku(sudokuGrid));