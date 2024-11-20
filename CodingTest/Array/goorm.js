items = [
  '1', '2', '3',
  '4', '5', '6',
  '4', '5', '3'
];
const answer = [];
let pocket = [];

items.reverse();
// 맨 마지막이 제일 먼저 들어온거

while (items.length > 0){
  const item = items.pop();
  if (pocket.length < 3){
    pocket.unshift(item);
  } else {
    if (pocket.includes(item)){
      const inx = pocket.findLastIndex(i => i === item);
      // findLastIndex 못 쓸 수도 있음
      // 그러면 reduceRight 이용
      pocket = pocket.filter((i,index) => index !== inx);
      pocket.unshift(item);
    } else {
      const trash = pocket.pop();
      pocket.unshift(item);
      answer.push(trash)
    }
  }
}

console.log(answer);