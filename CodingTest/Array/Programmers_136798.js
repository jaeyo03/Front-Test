function countDivisors(n) {
    let count = 0;
    let sqrt_n = Math.floor(Math.sqrt(n));
    for (let i = 1; i <= sqrt_n; i++) {
        if (n % i === 0) {
            // i와 n / i 둘 다 약수입니다.
            count += 2;
        }
    }
    // 만약 n이 완전제곱수라면 중복된 약수를 하나 제거합니다.
    if (sqrt_n * sqrt_n === n) {
        count--;
    }
    return count;
}

function solution(number, limit, power) {
    var answer = 0;
    const counts = [];

    for (let i = 1; i <= number; i++){
        let n = 0;
        //약수개수만 구하면 끝
        if (i === 1) {
            n = 1;
        } else {
            n = countDivisors(i);
        }
        counts.push(n);
    }

    for (let attack of counts){
        if (attack > limit){
            answer += power;
        } else{
            answer += attack;
        }
    }

    return answer;
}