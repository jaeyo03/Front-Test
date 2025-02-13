function checkEmpty(temp,n,m) {
  const dx = [0,0,-1,1];
  const dy = [1,-1,0,0];

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (temp[y][x] === 'EMPTY') {
        for (let i = 0; i < 4; i++) {
          if (temp[y+dy[i]][x+dx[i]] === 'OUTSIDE') {
            temp[y][x] = 'OUTSIDE'
          }
        }
      }
    }
  }

  for (let y = n-1; y > -1; y--) {
    for (let x = m-1; x > -1; x--) {
      if (temp[y][x] === 'EMPTY') {
        for (let i = 0; i < 4; i++) {
          if (temp[y+dy[i]][x+dx[i]] === 'OUTSIDE') {
            temp[y][x] = 'OUTSIDE'
          }
        }
      }
    }
  }

  return temp;
}

function solution(storage, requests) {
  var answer = 0;
  let myStorage = storage;
  for (let i = 0; i < myStorage.length; i++) {
    myStorage[i] = myStorage[i].split('')
  }

  const n = myStorage.length;
  const m = myStorage[0].length;
  const dx = [0,0,-1,1];
  const dy = [1,-1,0,0];

  for (const request of requests) {
    const temp = [];

    for (let y = 0; y < n; y++) {
      const arr = []
      for (let x = 0; x < m; x++) {
        arr.push(myStorage[y][x])
      }
      temp.push(arr)
    }

    if (request.length === 1) {
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
          let isNextToOutside = false;

          if (y === n-1 || y === 0 || x === m-1 || x === 0) {
            if (myStorage[y][x] === request) {
              temp[y][x] = 'OUTSIDE'
            }
          } else {
            for (let i = 0; i < 4; i++) {
              if (myStorage[y+dy[i]][x+dx[i]] === 'OUTSIDE' && myStorage[y][x] === request) {
                isNextToOutside = true;
              }
            }
          }
          if (isNextToOutside) {
            temp[y][x] = 'OUTSIDE'
          }
        }
      }
    } else {
      for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
          let isNextToOutside = false;

          if (myStorage[y][x] === request[0]) {
            if (y === n-1 || y === 0 || x === m-1 || x === 0) {
              temp[y][x] = 'OUTSIDE';
            } else {
              temp[y][x] = 'EMPTY';
              for (let i = 0; i < 4; i++) {
                if (myStorage[y+dy[i]][x+dx[i]] === 'OUTSIDE') {
                  isNextToOutside = true;
                }
              }
            }
          }

          if (isNextToOutside) {
            temp[y][x] = 'OUTSIDE';
          }
        }
      }
    }
    myStorage = checkEmpty(temp,n,m);
  }

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (myStorage[y][x] !== 'EMPTY' && myStorage[y][x] !== 'OUTSIDE') {
        answer += 1;
      }
    }
  }

  return answer;
}