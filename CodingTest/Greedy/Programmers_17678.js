function hourToMinute(time) {
  const [h,m] = time.split(":")
  return parseInt(h) * 60 + parseInt(m)
}

function minuteToHour(time){
  let h = String(parseInt(time / 60));
  let m = String(time % 60);
  if (h.length < 2) {
    h = "0" + h;
  }
  if (m.length < 2) {
    m = "0" + m;
  }
  return h + ":" + m
}

function solution(n, t, m, timetable) {
  var answer = '';
  const busTimes = {};

  for (let i = 0; i < n; i++) {
    const departure = 540 + t * i;
    busTimes[departure] = [];
  }

  const newTimeTable = [];

  for (const item of timetable) {
    newTimeTable.push(hourToMinute(item))
  }

  newTimeTable.sort((a,b) => a - b)

  for (const crew of newTimeTable) {
    for (const key of Object.keys(busTimes)) {
      if (crew <= key && busTimes[key].length < m) {
        busTimes[key].push(crew)
        break
      }
    }
  }

  const lastBusTime = Math.max(...Object.keys(busTimes));

  if (busTimes[lastBusTime].length < m) {
    answer = lastBusTime
  } else {
    const lastTime = busTimes[lastBusTime][m - 1];
    answer = lastTime - 1;
  }

  return minuteToHour(answer);
}