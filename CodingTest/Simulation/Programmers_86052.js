function solution(grid) {
  var answer = [];
  const graph = [];
  let lastBlank = [];
  let totalLength = 0;
  for (const g of grid) {
    const gs = g.split('');
    totalLength = gs.length * 2 + 1;
    const blank = [];
    const rowWithG = [];
    let inx = 0;
    for (let i = 0; i < totalLength; i++) {
      blank.push(0);
      if (i % 2 !== 0) {
        rowWithG.push(gs[inx])
        inx += 1;
      } else {
        rowWithG.push(0)
      }
    }
    lastBlank = blank;
    graph.push(blank);
    graph.push(rowWithG);
  }
  graph.push(lastBlank)
  console.log(graph)

  const dx = [0,0,1,-1];
  const dy = [1,-1,0,0];
  // 위, 아래, 오른쪽, 왼쪽
  for (let y = 0; y < graph.length; y++) {
    for (let x = 0; x < totalLength; x++) {
      if (graph[y][x] === 0) {

      }
    }
  }

  return answer;
}