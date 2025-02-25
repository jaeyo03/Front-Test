function getRank(num) {
  const table = {6:1,5:2,4:3,3:4,2:5, 1:6, 0:6};
  return table[num]
}

function solution(lottos, win_nums) {
  var answer = [];
  let total = 0;
  let countZero = 0;
  for (const num of lottos) {
    if (num === 0) {
      countZero += 1;
    }

    if (win_nums.includes(num)) {
      total += 1;
    }
  }
  const high = total + countZero;
  answer.push(getRank(high));
  answer.push(getRank(total));
  return answer;
}