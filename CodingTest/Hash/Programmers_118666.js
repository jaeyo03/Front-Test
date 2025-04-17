function solution(survey, choices) {
  var answer = '';
  const points = {
    'R' : 0,
    'T' : 0,
    'C' : 0,
    'F' : 0,
    'J' : 0,
    'M' : 0,
    'A' : 0,
    'N' : 0,
  }

  for (let i = 0; i < survey.length; i++) {
    const disagree = survey[i][0]
    const agree = survey[i][1]
    const choice = choices[i]
    if (choice === 1) {
      points[disagree] += 3
    } else if (choice === 2) {
      points[disagree] += 2
    } else if (choice === 3) {
      points[disagree] += 1
    } else if (choice === 5) {
      points[agree] += 1
    } else if (choice === 6) {
      points[agree] += 2
    } else if (choice === 7) {
      points[agree] += 3
    }
  }

  if (points['R'] >= points['T']) {
    answer += 'R'
  } else {
    answer += 'T'
  }

  if (points['C'] >= points['F']) {
    answer += 'C'
  } else {
    answer += 'F'
  }

  if (points['J'] >= points['M']) {
    answer += 'J'
  } else {
    answer += 'M'
  }

  if (points['A'] >= points['N']) {
    answer += 'A'
  } else {
    answer += 'N'
  }

  return answer;
}