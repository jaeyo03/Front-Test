function solution(s) {
    var answer = '';
    s = s.split(" ");


    for (let j = 0; j < s.length; j++){
        const word = s[j];
        for (let i = 0; i < word.length; i++){
            if( i % 2 === 0){
                answer += word[i].toUpperCase();
            } else {
                answer += word[i].toLowerCase();
            }
        }

        if (j === s.length-1){
            continue;
        } else {
            answer += " ";
        }
    }


    return answer;
}