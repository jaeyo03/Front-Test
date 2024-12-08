// 외부 json load하기
const list = require("./99_Practice.json");

// 실습문제1
function practice1(){
  const arr =[];

  for (const object of list) {
    if (object.address.includes('삼성')){
      arr.push([object.name,object.address]);
    }
  }

  console.log('인원수 :',arr.length);

  for (let i = 0; i < arr.length; i++) {
    console.log(`이름 : ${arr[i][0]}, 주소 : ${arr[i][1]}`);
  }

  // 지피티 코드 리뷰 결과 - 아래 처럼 하는게 좋을듯
  const arrGPT = list
    .filter(object => object.address.includes('삼성')) // 조건에 맞는 객체만 필터링
    .map(object => [object.name, object.address]); // 이름과 주소만 배열로 추출

  // console.log('인원수 :', arrGPT.length);
  arrGPT.forEach(([name, address]) => {
    // console.log(`이름 : ${name}, 주소 : ${address}`);
  });
}

practice1();
console.log('----------------------------------')

// 실습문제2
const userEmails = [];
const userPasswords = [];

for (const object of list) {
  userEmails.push(object.email);
  userPasswords.push(object.password);
}

function practice2(email,password){
  if (!email || !email.includes('@') || !userEmails.includes(email)) {
    console.log('이메일을 다시 입력하세요')
    return;
  }

  if(password.length < 4 || !Number(password) || !userPasswords.includes(password)){
    console.log('비밀번호를 다시 입력하세요');
    return;
  }

  console.log('로그인 성공')

}

practice2("user1@test.com", "373852"); // 로그인 성공
practice2("", "373852"); // 이메일을 다시 입력하세요.
practice2("test1", "373852"); // 이메일을 다시 입력하세요.
practice2("test@email.com", "123"); // 비밀번호를 다시 입력하세요. - 이메일이 없어서 이메일 없다는게 먼저 뜨네요!
practice2("user1@test.com", "123"); // 비밀번호를 다시 입력하세요.
console.log('----------------------------------')

// 실습문제3
function practice3(){
  const myObject = Object.create(list);
  myObject.sort((a,b) => b.salary - a.salary); // 숫자로 알아서 계산해서 sort
  for (let i = 0; i < 5; i++){
    const obj = myObject[i];
    const totalSalary = Math.ceil((Number(obj.salary) * 12) * (1 + Number(obj.bonus)))
    console.log(`이름 : ${obj.name}, 월급 : ${obj.salary}, 보너스: ${obj.bonus}, 연봉: ${totalSalary}`)
  }
}

practice3();
console.log('----------------------------------')

// 실습문제4
function practice4(){
  let sum = 0;
  list.forEach(item => {
    let totalMoney = '';
    const temp = Array.from(item.money);
    for (let i = 2; i < temp.length; i++) {
      if (temp[i] !== ','){
        totalMoney += temp[i]
      }
    }
    sum += Number(totalMoney);
  })
  console.log(`합계 : ${sum}원`);
}

practice4();
console.log('----------------------------------')

// 실습문제5
function practice5(){
  const developers = [];

  list.forEach(item => {
    if(item.job === '개발자' && item.gender === '남성'){
      developers.push(item.name);
    }
  })

  developers.sort();

  // 지피티의 코드 리뷰 결과
  // const developers = list
  //   .filter(item => item.job === '개발자' && item.gender === '남성')
  //   .map(item => item.name)
  //   .sort();

  console.log(`개발자 목록 (${developers.length})`)

  // const count = developers.length % 5 === 0 ? developers.length / 5 : 1 + (developers.length - (developers.length % 5)) / 5;
  // 위에 처럼 하지 말고 (가독성 안 좋음)
  const count = Math.ceil(developers.length / 5);

  for (let i = 0; i < count; i++){
    const temp = [];
    for(let j = 0; j < 5; j++){
      if (developers[i*5+j]){
        temp.push(developers[i*5+j]);
      }
    }
    console.log(temp.toString());
  }

  // 지피티의 코드 리뷰 결과 - slice 를 이용하는게 더 깔끔함
  // for (let i = 0; i < count; i++) {
  //   const temp = developers.slice(i * 5, i * 5 + 5); // 5개씩 자름
  //   console.log(temp.toString());
  // }
}

practice5();