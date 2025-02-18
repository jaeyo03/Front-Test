function solution(n, w, num) {
  var answer = 0;
  const stacks = [];

  let turn = parseInt(n / w);
  const leftover = n%w;

  if (leftover > 0) {
    turn += 1;
  }

  for (let i = 0; i < w; i++) {
    stacks.push([]);
  }

  let startLeft = true;
  for (let t = 0; t < turn; t++) {
    for (let j = w*t + 1; j < w*t + w + 1; j++) {
      if (j === n+1) {
        break;
      }

      let inx;
      if (startLeft) {
        inx = j - (w*t) - 1;
      } else {
        inx = w - 1 - (j - (w*t) - 1)
      }
      stacks[inx].push(j)
    }
    startLeft = !startLeft;
  }

  for (const stack of stacks) {
    if (stack.includes(num)) {
      answer = stack.length - stack.indexOf(num)
    }
  }
  return answer;
}