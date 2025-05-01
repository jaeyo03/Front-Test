function solution(board) {
  const N = board.length;
  const INF = Number.MAX_SAFE_INTEGER;

  const costs = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(4).fill(INF))
  );

  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  const deque = [];

  for (let d = 0; d < 4; d++) {
    costs[0][0][d] = 0;
    deque.push([0, 0, d, 0]);
  }

  while (deque.length) {
    const [r, c, dir, cost] = deque.shift();

    if (cost > costs[r][c][dir]) continue;

    for (let nd = 0; nd < 4; nd++) {
      const nr = r + dr[nd];
      const nc = c + dc[nd];
      if (nr < 0 || nc < 0 || nr >= N || nc >= N || board[nr][nc] === 1) continue;

      const ncost = cost + 100 + (dir === nd ? 0 : cost === 0 ? 0 : 500);

      if (ncost < costs[nr][nc][nd]) {
        costs[nr][nc][nd] = ncost;
        deque.push([nr, nc, nd, ncost]);
      }
    }
  }

  return Math.min(...costs[N - 1][N - 1]);
}