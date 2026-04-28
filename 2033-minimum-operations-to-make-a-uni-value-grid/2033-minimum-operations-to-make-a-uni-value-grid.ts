function median(grid: number[][], x: number): number {
  const numsList = [];
  const remainder = grid[0][0] % x;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] % x !== remainder) return -1;
      numsList.push(grid[i][j]);
    }
  }
  return numsList.sort((a, b) => a - b)[Math.floor(numsList.length / 2)];
}

function minOperations(grid: number[][], x: number): number {
  const medianNum = median(grid, x)
  if (medianNum === -1) return -1;
  let steps = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      steps += Math.abs(grid[i][j] - medianNum) / x;
    }
  }

  return steps;

};
