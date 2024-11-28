function solution(want, number, discount) {
  var answer = 0;
  wantIndexes = new Map();

  for (let i = 0; i < want.length; i++){
    product = want[i];
    wantIndexes.set(product,i);
  }

  for (let i = 0; i < discount.length - 9; i++){
    const tenDays = discount.slice(i,i+10);
    const collected = Array(want.length).fill(0);
    for (const product of tenDays){
      if (wantIndexes.has(product)){
        const inx = wantIndexes.get(product);
        collected[inx] += 1;
      }
    }

    let allSame = true;

    for (let i = 0; i < number.length; i++){
      if (number[i] != collected[i]){
        allSame = false;
        break
      }
    }

    if (allSame){
      answer += 1;
    }
  }
  return answer;
}