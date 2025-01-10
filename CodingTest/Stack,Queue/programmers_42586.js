function solution(progresses, speeds) {
  var answer = [];
  const endDays = [];

  for (let i = 0; i < progresses.length; i++) {
    const left = 100 - progresses[i];
    let days = parseInt(left / speeds[i]);
    if (left % speeds[i] !== 0) {
      days += 1;
    }
    endDays.push(days)
  }

  let stack = [];

  for (let i = 0; i < endDays.length; i++) {
    const d = endDays[i];
    if (stack.length === 0) {
      stack.push(d);
    } else if (stack.at(0) < d) {
      answer.push(stack.length)
      stack = [d];
    } else if (stack.at(0) >= d) {
      stack.push(d);
    }
  }
  answer.push(stack.length)
  return answer;
}