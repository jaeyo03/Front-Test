function solution(lines) {
  let answer = 0;
  const logs = lines.map(line => {
    const [date, time, tStr] = line.split(' ');
    const [hh, mm, ssS] = time.split(':');
    const [ss, sss] = ssS.split('.');
    const endTime =
      parseInt(hh) * 3600 * 1000 +
      parseInt(mm) * 60 * 1000 +
      parseInt(ss) * 1000 +
      parseInt(sss);
    const procTime = parseFloat(tStr.slice(0, -1)) * 1000;
    const startTime = endTime - Math.round(procTime) + 1;
    return { startTime, endTime };
  });

  for (const { endTime } of logs) {
    const windowStart = endTime;
    const windowEnd = windowStart + 999;
    let count = 0;

    for (const { startTime, endTime: eTime } of logs) {
      if (startTime <= windowEnd && eTime >= windowStart) {
        count++;
      }
    }

    answer = Math.max(answer, count);
  }

  return answer;
}