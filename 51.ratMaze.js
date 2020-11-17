const maze = [
  [1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 0, 1],
];

const isSafe = (maze, x, y) => {
  const n = maze.length;
  if (x < n && y < n && maze[x][y] !== 0) {
    return true;
  }
}

const findOut = (maze, x, y, solution) => {
  const n = maze.length;
  if (x === n - 1 && y === n - 1) {
    solution[x][y] = 1;
    return true;
  }
  if (isSafe(maze, x, y)) {
    if (findOut(maze, x + 1, y, solution)) {
      solution[x][y] = 1;
      return true;
    }
    if (findOut(maze, x, y + 1, solution)) {
      solution[x][y] = 1;
      return true;
    }
    return false;
  }
  return false;
}

const ratInAMaze = (maze) => {
  const solution = [];
  const n = maze.length;
  for (let i = 0; i < n; i++) {
    solution[i] = [];
    for (let j = 0; j < n; j++) {
      solution[i][j] = 0;
    }
  }
  if (findOut(maze, 0, 0, solution)) {
    return solution;
  } else {
    return 'NO SOLUTION!';
  }
}
console.log(ratInAMaze(maze));