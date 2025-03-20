function solution(grid) {
  var answer = [];
  const graph = [];
  const startingPoints = [];
  let totalLength = 0;

  for (let i = 0; i < grid.length; i++) {
    const nodes = grid[i].split('');
    totalLength = nodes.length * 2 + 1;
    const blank = [];
    const rowWithG = [];
    let inx = 0;
    for (let j = 0; j < totalLength; j++) {
      blank.push(0);
      if (j % 2 !== 0) {
        rowWithG.push(nodes[inx])
        inx += 1;
      } else {
        rowWithG.push(0)
      }
    }

    graph.push(blank);
    graph.push(rowWithG);
    if (i === grid.length - 1) {
      graph.push(blank)
    }
  }
  console.log(graph)

  function move(graph,startInx,startY,startX) {
    const dx = [0,0,1,-1];
    const dy = [1,-1,0,0];
    // 아래, 위, 오른쪽, 왼쪽
    let path = [];
    const maxY = graph.length;
    const maxX = graph[0].length;
    let inx = startInx;
    path.push(startY);
    path.push(startX);
    let y = startY;
    let x = startX;
    while(true) {
      y += dy[inx];
      x += dx[inx];
      if (y === startY && x === startX) {
        console.log(path);
        path.sort((a,b) => a - b);
        return path.join('')
      }

      if (y < 0) {
        y = maxY - 1;
      }

      if (y === maxY) {
        y = 0;
      }

      if (x < 0) {
        x = maxX - 1;
      }

      if (x === maxX) {
        x = 0;
      }

      if (graph[y][x] === 'S') {
        continue
      }

      // 아래, 위, 오른쪽, 왼쪽
      if (graph[y][x] === 'L') {
        if (inx === 0) {
          inx = 2
        } else if (inx === 1) {
          inx = 3
        } else if (inx === 2) {
          inx = 1
        } else {
          inx = 0
        }
        continue
      }

      if (graph[y][x] === 'R') {
        if (inx === 0) {
          inx = 3
        } else if (inx === 1) {
          inx = 2
        } else if (inx === 2) {
          inx = 0
        } else {
          inx = 1
        }
        continue
      }

      path.push(y);
      path.push(x);
    }
  }

  const record = {}

  for (let y = 0; y < graph.length; y++) {
    for (let x = 0; x < totalLength; x++) {
      if (graph[y][x] === 0 && (y % 2 === 0 && x % 2 !== 0)) {
        // 위 or 아래
        move(graph,0,y,x)
        move(graph,1,y,x)

      }

      if (graph[y][x] === 0 && (y % 2 !== 0 && x % 2 === 0)) {
        // 오 or 왼
        move(graph,2,y,x)
        move(graph,3,y,x)
      }
    }
  }

  return answer;
}