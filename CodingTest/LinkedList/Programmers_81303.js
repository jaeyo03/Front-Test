function solution(n, k, cmd) {
  const chart = Array(n).fill('O');

  const deletedStack = [];
  let currentIndex = k;

  function moving(inx, isPositive, move) {
    let count = 0;
    const num = isPositive ? 1 : -1 ;
    while (count < move) {
      inx += num;
      if (chart[inx] === 'O') {
        count += 1;
      }
    }
    return inx
  }

  for (const command of cmd) {
    const [direction, temp] = command.split(' ');
    let move = null;

    if (temp) {
      move = parseInt(temp);
    }

    if (direction === 'U') {
      currentIndex = moving(currentIndex, false, move);
    } else if (direction === 'D') {
      currentIndex = moving(currentIndex, true, move);
    } else if (direction === 'C') {
      chart[currentIndex] = 'X'
      deletedStack.push(currentIndex);
      move = 1;

      if (currentIndex === n - 1) {
        currentIndex = moving(currentIndex, false, move);
      } else {
        currentIndex = moving(currentIndex, true, move);
      }
    } else if (direction === 'Z') {
      const restore = deletedStack.pop();
      chart[restore] = 'O'
    }
  }
  return chart.join('');
}

// 아래가 맞는 풀이
function solutionAnswer(n, k, cmd) {
  const prev = Array(n), next = Array(n);
  for (let i = 0; i < n; i++) {
    prev[i] = i - 1;
    next[i] = i + 1;
  }
  next[n - 1] = -1;

  const deleted = [];
  const alive = Array(n).fill(true);
  let cur = k;

  for (const c of cmd) {
    const [op, x] = c.split(' ');
    if (op === 'U') {
      let cnt = parseInt(x);
      while (cnt--) cur = prev[cur];
    } else if (op === 'D') {
      let cnt = parseInt(x);
      while (cnt--) cur = next[cur];
    } else if (op === 'C') {
      deleted.push(cur);
      alive[cur] = false;

      const p = prev[cur], nx = next[cur];
      // 연결 끊기
      if (p !== -1) next[p] = nx;
      if (nx !== -1) prev[nx] = p;

      cur = (nx !== -1 ? nx : p);
    } else {
      const idx = deleted.pop();
      alive[idx] = true;

      const p = prev[idx], nx = next[idx];
      // 원래대로 복원
      if (p !== -1) next[p] = idx;
      if (nx !== -1) prev[nx] = idx;
    }
  }

  return alive.map(v => v ? 'O' : 'X').join('');
}