function solution(order) {
  var answer = 0;
  const boxes = [];
  const stack = [];
  for (let i = order.length; i > 0; i--){
    boxes.push(i);
  }

  let turn = 0;

  while (boxes.length > 0){
    if (stack.length > 0){
      if (stack[stack.length - 1] === order[turn]){
        stack.pop();
        answer += 1;
        turn += 1;
      }
    }

    const box = boxes.pop();
    if (box === order[turn]) {
      answer += 1;
      turn += 1;
    } else {
      stack.push(box);
    }
  }

  if (stack.length > 0){
    stack.reverse();
    let isSame = true;
    const newOrder = order.slice(turn);

    for (let i = 0; i < stack.length; i++){
      if (stack[i] !== newOrder[i]){
        isSame = false;
        break;
      }
    }

    if (isSame){
      answer += stack.length;
    }

  }
  return answer;
}