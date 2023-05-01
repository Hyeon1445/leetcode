// Q934. Shortest Bridge

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function (grid) {
  const notIsland = 0;
  const firstIsland = 1;
  const secondIsland = 2;
  const direction = [
    // [x, y]
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const map = Array.from(Array(grid.length), () =>
    Array(grid.length).fill(notIsland)
  );
  let start;
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid.length; row++) {
      if (grid[col][row] === 1) {
        start = [row, col];
        map[col][row] = firstIsland;
        break;
      }
    }
    if (start) break;
  }
  const queue = [start];
  while (queue.length) {
    const [currentX, currentY] = queue.pop();
    for (let i = 0; i < direction.length; i++) {
      const [x, y] = direction[i];
      const nextX = currentX + x;
      const nextY = currentY + y;
      if (
        nextX >= 0 &&
        nextX < grid.length &&
        nextY >= 0 &&
        nextY < grid.length
      ) {
        if (grid[nextY][nextX] === 1 && map[nextY][nextX] === notIsland) {
          queue.unshift([nextX, nextY]);
          map[nextY][nextX] = firstIsland;
        }
      }
    }
  }
  start = null;
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid.length; row++) {
      if (grid[col][row] === 1 && map[col][row] === notIsland) {
        start = [row, col];
        map[col][row] = secondIsland;
        break;
      }
    }
    if (start) break;
  }
  queue.unshift(start);
  while (queue.length) {
    const [currentX, currentY] = queue.pop();
    for (let i = 0; i < direction.length; i++) {
      const [x, y] = direction[i];
      const nextX = currentX + x;
      const nextY = currentY + y;
      if (
        nextX >= 0 &&
        nextX < grid.length &&
        nextY >= 0 &&
        nextY < grid.length
      ) {
        if (grid[nextY][nextX] === 1 && map[nextY][nextX] === notIsland) {
          queue.unshift([nextX, nextY]);
          map[nextY][nextX] = secondIsland;
        }
      }
    }
  }
  let min = 0;
  const notVisited = -1;
  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid.length; row++) {
      if (map[col][row] === firstIsland) {
        const visited = Array.from(Array(grid.length), () =>
          Array(grid.length).fill(notVisited)
        );
        visited[col][row] = 0;
        const start = [row, col];
        const queue = [start];
        while (queue.length) {
          const [currentX, currentY] = queue.pop();
          for (let i = 0; i < direction.length; i++) {
            const [x, y] = direction[i];
            const nextX = currentX + x;
            const nextY = currentY + y;
            if (
              nextX >= 0 &&
              nextX < grid.length &&
              nextY >= 0 &&
              nextY < grid.length
            ) {
              if (
                map[nextY][nextX] === notIsland &&
                visited[nextY][nextX] === notVisited
              ) {
                visited[nextY][nextX] = visited[currentY][currentX] + 1;
                queue.unshift([nextX, nextY]);
              }
              if (
                map[nextY][nextX] === secondIsland &&
                visited[nextY][nextX] === notVisited
              ) {
                visited[nextY][nextX] = visited[currentY][currentX] + 1;
                if (!min || visited[nextY][nextX] < min) {
                  min = visited[nextY][nextX];
                }
              }
            }
          }
        }
      }
    }
  }
  return min - 1;
};

console.log(
  "answer: 1",
  shortestBridge([
    [0, 1],
    [1, 0],
  ])
);

console.log(
  "answer: 2",
  shortestBridge([
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
  ])
);

console.log(
  "answer: 1",
  shortestBridge([
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ])
);

console.log(
  "answer: 3",
  shortestBridge([
    [0, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0],
  ])
);
