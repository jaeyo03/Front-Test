// Run by Node.js
const readline = require('readline');

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let n = 0;
  const map = [];
  let count = 0;
  const arr = [];

  for await (const line of rl) {
    if (count === 0){
      n = Number(line);
    } else {
      map.push(line.split(' '))
    }
    count += 1;
  }

  dx = [0,0,-1,1]
  dy = [1,-1,0,0]

  visited = []
  starting = []
  for (let i = 0; i < n; i++){
    const temp = Array(n).fill(false);
    visited.push(temp);

    for (let j = 0; j < n; j++){
      if(map[i][j] === '1'){
        starting.push([i,j])
      }
    }
  }

  while (starting.length > 0){
    const s = starting.pop();
    const y = s[0];
    const x = s[1];
    let count = 0;
    const stack = [];
    if (visited[y][x]){
      continue
    } else {
      stack.push(s);
    }

    while (stack.length > 0){
      const point = stack.pop();
      const y_point = point[0];
      const x_point = point[1];
      if(!visited[y_point][x_point]){
        count += 1;
        visited[y_point][x_point] = true;
        for(let i = 0; i < 4; i++){
          const temp_y = y_point + dy[i];
          const temp_x = x_point + dx[i];
          if (
            temp_y >= 0 && temp_y < map.length &&
            temp_x >= 0 && temp_x < map[0].length &&
            map[temp_y][temp_x] === '1'
          ) {
            stack.push([temp_y,temp_x]);
          }
        }
      }
    }

    arr.push(count);
  }

  if(arr.length === 0){
    console.log(0)
  } else{
    console.log(arr.length)
    arr.sort((a, b) => a - b);
    console.log(arr.join(' '));
  }
  process.exit();
})();