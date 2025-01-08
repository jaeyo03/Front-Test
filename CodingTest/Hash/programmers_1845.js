function solution(nums) {
  var answer = 0;
  const obj = {};
  for (const num of nums) {
    if (num in obj) {
      continue;
    } else {
      obj[num] = true;
    }
  }

  // if(Object.keys(obj).length >= nums.length / 2){
  //     answer = nums.length / 2;
  // } else {
  //     answer = Object.keys(obj).length;
  // }

  answer = Object.keys(obj).length >= nums.length / 2 ? nums.length / 2 : Object.keys(obj).length
  return answer;
}