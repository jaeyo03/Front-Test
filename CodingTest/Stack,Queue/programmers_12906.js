function solution(arr) {
  const stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const value = arr[i];
    if (stack[stack.length-1] === value) {
      continue
    } else {
      stack.push(value);
    }
  }
  return stack;
}