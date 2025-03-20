function solution(edges) {
  var answer = [0,0,0,0];
  const dict = {};
  const graph = {};

  for (const edge of edges) {
    const start = edge[0];
    const end = edge[1];

    // 그래프 생성용
    if(graph[start]) {
      graph[start].push(end)
    } else {
      graph[start] = [end]
    }

    // 뻗어나가기, 들어오기 세기용
    if (dict[start]) {
      dict[start].output += 1;
    } else {
      dict[start] = {
        input : 0,
        output : 1,
      }
    }

    if (dict[end]) {
      dict[end].input += 1;
    } else {
      dict[end] = {
        input : 1,
        output : 0,
      }
    }
  }

  const mainPoint = {
    point : 0,
    count : 0,
  }

  for (const key of Object.keys(dict)) {
    const total = dict[key].output - dict[key].input;
    if (mainPoint.count < total) {
      mainPoint.count = total
      mainPoint.point = parseInt(key)
    }
  }

  answer[0] = mainPoint.point;

  for (const point of graph[mainPoint.point]) {
    dict[point].input -= 1;
    const points = [point]
    const visited = Array(1000001).fill(0);
    const queue = [point];
    visited[point] += 1;
    let isStick = false;
    let isEight = false;

    if (dict[point].input === 2) {
      isEight = true
    }

    while(queue.length > 0) {
      const nextPoint = queue.shift();

      if (!graph[nextPoint]) {
        answer[2] += 1;
        isStick = true;
        break;
      }

      for (const baby of graph[nextPoint]) {
        if (baby === point) {
          visited[baby] += 1;
        }
        if (visited[baby] === 0) {
          if (dict[baby].input === 2) {
            isEight = true
          }
          visited[baby] += 1;
          queue.push(baby);
          points.push(baby)
        }
      }
    }

    if (!isStick) {
      if (isEight) {
        answer[3] += 1
      } else {
        answer[1] += 1
      }
    }

  }

  return answer;
}