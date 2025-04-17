function isValid(array) {
  let answer = false;
  const stack = [];

  for (const word of array) {
    if (word === '(') {
      stack.push(word)
    } else if (word === ')') {
      if (stack.length === 0) {
        stack.push(word)
        break
      } else {
        if (stack[stack.length - 1] === '(') {
          stack.pop()
        } else {
          stack.push(word)
          break
        }
      }
    } else if (word === '{') {
      stack.push(word)
    } else if (word === '}') {
      if (stack.length === 0) {
        stack.push(word)
        break
      } else {
        if (stack[stack.length - 1] === '{') {
          stack.pop()
        } else {
          stack.push(word)
          break
        }
      }
    } else if (word === '[') {
      stack.push(word)
    } else if (word === ']') {
      if (stack.length === 0) {
        stack.push(word)
        break
      } else {
        if (stack[stack.length - 1] === '[') {
          stack.pop()
        } else {
          stack.push(word)
          break
        }
      }
    }
  }

  if (stack.length === 0) {
    answer = true;
  }

  return answer
}

function solution(s) {
  var answer = 0;
  const sArray = s.split('');

  for (let i = 0; i < s.length; i++) {
    if(isValid(sArray)) {
      answer += 1
    }
    const item = sArray.shift();
    sArray.push(item)
  }

  return answer;
}