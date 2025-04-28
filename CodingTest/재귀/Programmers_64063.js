function solution(k, room_number) {
  const parent = new Map();
  function find(x) {

    if (!parent.has(x)) {
      // x번 방이 아직 배정되지 않았으면 그대로 배정하고
      // 다음 탐색은 x+1에서 시작하도록 설정
      parent.set(x, x + 1);
      return x;
    }

    // 이미 배정된 방이라면, parent.get(x)부터 다음 빈 방을 찾아
    // 경로 압축 해 주기
    const next = find(parent.get(x));
    parent.set(x, next + 1);
    return next;
  }

  const answer = [];
  for (const wish of room_number) {
    answer.push(find(wish));
  }
  return answer;
}