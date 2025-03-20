function solution(x) {
  var answer = true;
  const nums = x.toString().split('');
  let total = 0;
  for (const num of nums) {
    total += parseInt(num);
  }

  if (x % total !== 0) {
    answer = false;
  }
  return answer;
}