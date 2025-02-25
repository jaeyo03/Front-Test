function solution(board) {
  var answer = Infinity;
  const map = [];
  let start = [];
  const n = board.length;
  const m = board[0].length;
  let end = [];
  const visited = [];
  const dy = [0,0,1,-1];
  const dx = [1,-1,0,0];

  for (let j = 0; j < board.length; j++) {
    const str = board[j];
    const arr = [];
    const temp = [];
    for (let i = 0; i < str.length; i++) {
      arr.push(str[i]);
      temp.push(false);
      if (str[i] === 'R') {
        start = [j,i]
      }

      if (str[i] === 'G') {
        end = [j,i]
      }
    }
    map.push(arr);
    visited.push(temp)
  }

  const queue = [[start[0],start[1],0]];
  visited[start[0]][start[1]] = true;

  while (queue.length > 0) {
    const current = queue.splice(0,1)[0]; // shift 쓰는게 나았을듯
    const y = current[0];
    const x = current[1];
    const count = current[2];

    if (map[y][x] === 'G') {
      if (count < answer) {
        answer = count;
      }
      continue;
    }

    for (let i = 0; i < 4; i++) {
      let _y = y;
      let _x = x;
      let a = true;
      while (a) {
        _y += dy[i];
        _x += dx[i];
        if (_y === -1 || _y === n || _x === -1 || _x === m) {
          _y -= dy[i];
          _x -= dx[i];
          if (!visited[_y][_x]) {
            visited[_y][_x] = true;
            queue.push([_y,_x,count+1]);
          }
          a = false;
        } else if (map[_y][_x] === 'D') {
          _y -= dy[i];
          _x -= dx[i];
          if (!visited[_y][_x]) {
            visited[_y][_x] = true;
            queue.push([_y,_x,count+1]);
          }
          a = false;
        }
      }
    }
  }

  if (answer === Infinity) {
    answer = -1;
  }
  return answer;
}