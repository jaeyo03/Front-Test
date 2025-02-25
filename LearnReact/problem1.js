// function Amount({value}) {
//   const [amountKR, setAmountKR] = useState(() => value.toLocaleString());
//   useEffect(() => {
//     if (value == null) {
//       setAmountKR(value);
//     } else {
//       setAmountKR(value.toLocaleString());
//     }
//   }, [value]);
//   return <span>{amountKR}</span>;
// }
//
// // 개선 코드
// function Amount({value}) {
//   const [amountKR, setAmountKR] = useState(value);
//   useEffect(() => {
//     if (value !== null) {
//       const temp = value;
//       temp.toLocaleString();
//       setAmountKR(temp);
//     }
//   }, [value]);
//   return <span>{amountKR}</span>;
// }
//
// 아래 JavaScript 코드에서 발생할 수 있는 문제점을 올바르게" 설명한 사람을 모두 고르세요.
//
// const init = async () => {
//   const getSomeData = async () =>{
//     const response = await fetch ("https://example.com/something.json");
//     const jsonData = await response.json();
//
//     return jsonData;
//   }
//
//   const data = getSomeData();
//   console. log(data);
// }
//
// init();
//
// 옥순: getSomeData의 비동기 처리가 완료되지 않은 채로 data에 할당이 이뤄지기 때문에 data에는 Promise 객체가 할당될 거야.
// 영자: getSomeData의 비동기 처리가 완료되지 않은 채로 data 변수에 값을 할당하려고 하면 런타임 에러가 발생할 거야.
// 영호: fetch와 responsejson을 실행할 때 발생할 수 있는 에러를 핸들링 하는 로직이 없어, 런타임 에러가 발생할 수 있어.
// 상철: 동기로 작동하는 response,json 함수에 awalt를 붙였으니 빌드에 실패할 거야.
// 영철: getSomeData가 리턴하는 값을 별도의 Promise 객체로 감싸지 않아 getSomeData가 비동기적으로 실행되지 않을거야


const init = async () => {
  const getSomeData = async () =>{
    const response = await fetch ("https://jsonplaceholder.typicode.com/todos/1");
    const jsonData = await response.json();

    return jsonData;
  }

  const data = getSomeData();
  console.log(data);
}

init();


