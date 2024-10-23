function solution(food) {
    var answer = '';
    const arr = [];
    for (let i = 1; i < food.length; i++){
        const n = food[i];
        if (n === 1){
            continue;
        } else if (n % 2 === 0){
            const count = n/2;
            for (let k = 0; k < count; k++){
                arr.push(i);
            }
        } else {
            const count = (n-1)/2;
            for (let k = 0; k < count; k++){
                arr.push(i);
            }
        }
    }

    for (let a of arr){
        answer += String(a);
    }

    answer += '0';

    const reversed = arr.reverse();

    for (let b of reversed){
        answer += String(b);
    }

    return answer;
}