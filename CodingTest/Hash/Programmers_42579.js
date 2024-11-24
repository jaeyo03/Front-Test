function solution(genres, plays) {
  var answer = [];
  genresMap = new Map();
  for (let i = 0; i < genres.length; i++) {
    genre = genres[i];
    play = plays[i];
    if (genresMap.has(genre)){
      genresMap.get(genre).push([i,play]);
    } else {
      genresMap.set(genre,[[i,play]]);
    }
  }

  // 장르 총 재생수 담는 배열
  const totalPlays = [];

  // 각 장르에서 플레이 횟수 정렬
  genresMap.forEach((value,key) => {
    genresMap.get(key).sort((a, b) => {
      if (a[1] === b[1]){
        return a[0] - b[0];
      } else {
        return b[1] - a[1]
      }
    });

    let sum = 0;
    for (const arr of genresMap.get(key)){
      sum += arr[1]
    }
    totalPlays.push([key,sum])
  })

  // totalPlays 재생수 기준으로 정렬
  totalPlays.sort((a,b) => b[1] - a[1]);

  // 넣기
  for (const arr of totalPlays) {
    const genreArr = genresMap.get(arr[0])
    if (genreArr.length === 1){
      answer.push(genreArr[0][0])
    } else {
      answer.push(genreArr[0][0])
      answer.push(genreArr[1][0])
    }
  }

  return answer;
}