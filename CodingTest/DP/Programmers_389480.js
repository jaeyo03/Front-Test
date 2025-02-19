function solution(info, n, m) {
  var answer = 9999;
  let cases = new Map();
  cases.set(0 + '-' + 0, [0,0]);

  for (const item of info) {
    const temp = new Map();
    for (const [key,value] of cases) {
      const a = value[0]; // 현재 A 흔적 개수
      const b = value[1]; // 현재 B 흔적 개수
      if (a + item[0] < n) {
        const newKey = (a + item[0]) + '-' + b;
        if (!temp.has(newKey)) {
          temp.set(newKey,[a + item[0],b])
        }
      }
      if (b + item[1] < m) {
        const newKey = a + '-' + (b + item[1]);
        if (!temp.has(newKey)) {
          temp.set(newKey,[a,b + item[1]])
        }
      }
    }
    if (temp.size < 1) {
      return -1
    }
    cases = temp;
  }

  for (const [key,value] of cases) {
    if (value[0] < answer) {
      answer = value[0];
    }
  }

  return answer;
}

// JSON.stringfy 보다 a + '-' + b 이런식으로 하는게 더 빠르다
// 문자열 결합 : 숫자를 문자열로 변환하고 그 문자열들을 바로 결합하는 단순한 연산이라서, 내부적으로 최적화되어 빠르게 수행됩니다.
// JSON.stringify는 배열이나 객체의 모든 요소와 구조를 순회하며 직렬화하는 과정을 거치므로, 불필요한 오버헤드가 발생해 상대적으로 느림.

// function solution(info, n, m) {
//     var answer = 9999;
//     let cases = new Map();
//     cases.set(JSON.stringify([0,0]), [0,0]);

//     for (const item of info) {
//         const temp = new Map();
//         for (const [key,value] of cases) {
//             const a = value[0]; // 현재 A 흔적 개수
//             const b = value[1]; // 현재 B 흔적 개수
//             if (a + item[0] < n) {
//                 const newKey = JSON.stringify([a + item[0],b]);
//                 if (!temp.has(newKey)) {
//                     temp.set(newKey,[a + item[0],b])
//                 }
//             }
//             if (b + item[1] < m) {
//                 const newKey = JSON.stringify([a,b + item[1]]);
//                 if (!temp.has(newKey)) {
//                     temp.set(newKey,[a,b + item[1]])
//                 }
//             }
//         }
//         if (temp.size < 1) {
//             return -1
//         }
//         cases = temp;
//     }

//     for (const [key,value] of cases) {
//         if (value[0] < answer) {
//             answer = value[0];
//         }
//     }

//     return answer;
// }