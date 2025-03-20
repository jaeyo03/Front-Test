function solution(s) {
  var answer = 0;
  const sArray = s.split('');
  let x = sArray[0];
  let isX = 1;
  let isNotX = 0;
  for (let i = 1; i < sArray.length; i++) {
    if (i === sArray.length - 1) {
      answer += 1;
      continue
    }

    if (x !== sArray[i]) {
      isNotX += 1;
    } else {
      isX += 1;
    }

    if (isX === isNotX) {
      answer += 1;
      x = sArray[i + 1]
    }
  }

  if (sArray.length === 1){
    answer += 1
  }

  return answer;
}