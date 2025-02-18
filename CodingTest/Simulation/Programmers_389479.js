function solution(players, m, k) {
  var answer = 0;
  const record = Array(50).fill(0);

  for (let time = 0; time < players.length; time++) {
    if ((record[time] + 1)*m <= players[time]) {
      const num = parseInt(players[time] / m) - record[time]
      answer += num;
      for (let i = time; i < time + k; i++) {
        record[i] += num;
      }
    }
  }

  return answer;
}