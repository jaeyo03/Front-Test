function solution(participant, completion) {
  var answer = '';
  const p = {};
  for (const name of participant) {
    if (p[name] !== undefined) {
      p[name] += 1;
    } else {
      p[name] = 1;
    }
  }

  for (const name of completion) {
    if (p[name] !== undefined) {
      p[name] -= 1;
    }
  }

  for (const key of Object.keys(p)) {
    if (p[key] > 0) {
      answer = key;
    }
  }

  return answer;
}