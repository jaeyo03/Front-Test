let x = 9;

function first() {
  let x = 1234;
  function second() {
    console.log(x);
  }
  second();
  // 실행 위치가 여기여서 1234가 나올 것 같지만, JS에서는 렉시컬(정적) 스코핑을 하기 때문에 선언된 위치가 중요
  // 때문에 second 가 읽는 x 는 9임
}

function second() {
  console.log(x);
}

first();
second();