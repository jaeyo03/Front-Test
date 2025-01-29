function solution(elements) {
    var answer = 0;
    const totalSum = elements.reduce((accumulator,currentValue) =>{
        return accumulator + currentValue;
    },0)
    const totalSet = new Set();
    totalSet.add(totalSum)
    
    for (let len = 1; len < Math.floor(elements.length / 2) + 1; len++){
        for (let i = 0; i < elements.length; i++) {
            let total = 0;
            for (let j = i; j < i + len; j++){
                let newIndex = j; // use new variable to handle with j
                // directly handling j is improper
                if (elements.length <= j){
                    newIndex -= elements.length;
                }
                total += elements[newIndex];
            }
            totalSet.add(total);
            totalSet.add(totalSum-total);
        }
    }
    return totalSet.size;
}