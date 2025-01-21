function solution(wallpaper) {
  const points = [];
  var answer = [];

  for (let i = 0; i < wallpaper.length; i++) {
    for (let j = 0; j < wallpaper[i].length; j++) {
      if (wallpaper[i][j] === "#") {
        points.push([i,j]);
        points.push([i+1,j+1])
      }
    }
  }

  let minX = 999999;
  let minY = 999999;
  let maxX = 0;
  let maxY = 0;

  for (const point of points) {
    const y = point[0];
    const x = point[1];
    if (y < minY) {
      minY = y;
    }

    if (maxY < y) {
      maxY = y;
    }

    if (x < minX) {
      minX = x;
    }

    if (maxX < x ) {
      maxX = x;
    }
  }
  answer=[minY,minX,maxY,maxX]
  return answer;
}