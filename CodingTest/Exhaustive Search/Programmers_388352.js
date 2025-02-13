const getCombination = (arr, n) => {
  // n이 1이 되는 경우는 현재값을 선택하는 것과 동일
  // 따라서 각각의 원소를 바로 배열 형태로 리턴
  // 재귀호출에서 n이 1이 되는 순간부터 배열 데이터 생성
  // 즉 1부터 역으로 다시 거슬러 올라가 n이 될때까지
  // 선택된 원소들로 배열(조합)을 구성
  if(n === 1) return arr.map(el => [el]);
  // 최종 결과를 담을 배열
  const result = [];

  // fixed : 고정할 원소, origin : 원본 배열
  arr.forEach((fixed, idx, origin) => {
    // 현재 고정한 원소 이후의 배열을 나머지로 선언
    const rest = origin.slice(idx+1);
    // 나머지와 n-1을 다시 전달하여 재귀호출
    const combis = getCombination(rest, n-1);
    // 재귀호출이 끝나고 돌아오는 시점은
    // 처음 고정한 fixed로 구성 가능한 모든 조합을 리턴받은 이후
    // 따라서 리턴받은 값과 fixed를 다시 합쳐주어 조합 구성
    const attached = combis.map(combi => [fixed, ...combi]);
    // 구성된 조합 배열을 결과에 푸시
    result.push(...attached);
  });

  // 위에서 모든 재귀호출이 종료되면 저장된 조합 경우의 수 리턴
  return result;
}

function solution(n, q, ans) {
  var answer = 0;
  const nums = [];
  for (let i = 1; i < n+1; i++) {
    nums.push(i);
  }

  for (const combination of getCombination(nums,5)) {
    let isAnswer = true;

    for (let i = 0; i < q.length; i++) {
      const guess = q[i];
      const total = ans[i];
      let count = 0;

      for (const num of guess) {
        if (combination.includes(num)) {
          count += 1;
        }
      }

      if(count !== total) {
        isAnswer = false;
        break;
      }
    }
    if (isAnswer) {
      answer += 1;
    }
  }
  return answer;
}