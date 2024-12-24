function solution(data, col, row_begin, row_end) {
  var answer = 0;

  // sort를 여러 기준으로 하는거 기억하기!
  data.sort((a,b) => {
    if (a[col-1] === b[col-1]){
      return b[0] - a[0]
    } else {
      return a[col-1] - b[col-1]
    }
  })

  const S_i = data.map((element,index) => {
    let total = 0;
    for (const num of element) {
      total += num % (index+1)
    }
    return total
  })

  const arr = S_i.slice(row_begin-1,row_end);

  // JS에서 XOR ^ 임
  answer = arr.reduce((a,b) => a^b)

  return answer;
}