function solution(schedules, timelogs, startday) {
  var answer = 0;
  for (let i = 0; i < schedules.length; i++) {
    const str = new String(schedules[i])
    const commute = str.length > 3 ? parseInt(str.slice(0,2))*60 + parseInt(str.slice(2,4)) : parseInt(str.slice(0,1))*60 + parseInt(str.slice(1,3))
    let isAnswer = true;
    for (let j = 0; j < 7; j++ ) {
      const str = new String(timelogs[i][j])
      const time = str.length > 3 ? parseInt(str.slice(0,2))*60 + parseInt(str.slice(2,4)) : parseInt(str.slice(0,1))*60 + parseInt(str.slice(1,3))
      let today = startday + j
      if (today > 7) {
        today -= 7
      }
      if (today === 6 || today === 7) {
        continue
      }
      if (commute + 10 < time) {
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