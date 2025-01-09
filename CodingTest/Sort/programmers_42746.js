function solution(numbers) {
  var answer = '';
  numbers = numbers.map(item => {
      let strItem = String(item);
      strItem = strItem.repeat(4).slice(0,4);
      return [item,strItem]
    }
  )

  // 각 자리별로 비교해서 sort 하기
  numbers.sort((a,b) => {
    for (let i = 0; i < 4; i++) {
      if (b[1][i] !== a[1][i]) {
        return b[1][i] - a[1][i];
      }
    }
  })

  for (const value of numbers) {
    answer += String(value[0]);
  }

  if (answer[0] === "0") {
    answer = "0";
  }

  return answer;
}