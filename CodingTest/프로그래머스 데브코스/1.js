function solution(ineq, eq, n, m) {
    var answer = 0;
    let result;

    if (ineq === "<" && eq === "=") {
        result = (n <= m);
    } else if (ineq === ">" && eq ==="=") {
        result = (n >= m);
    } else if (ineq === ">" && eq ==="!"){
        result = (n > m);
    } else {
        result = (n < m);
    }

    if (result === true){
        answer = 1;
    } else{
        answer = 0;
    }

    return answer;
}