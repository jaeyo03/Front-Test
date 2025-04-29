function solution(user_id, banned_id) {
  var answer = 0;
  const idArray = []
  for (const ban_id of banned_id) {
    const allIds = []
    for (const id of user_id) {
      let isMatch = true;
      if (ban_id.length === id.length) {
        for (let i = 0; i < ban_id.length; i++) {
          if (ban_id[i] === '*') {
            continue
          }

          if (ban_id[i] !== id[i]) {
            isMatch = false;
            break
          }
        }
      } else {
        isMatch = false;
      }

      if (isMatch) {
        allIds.push(id);
      }
    }
    idArray.push(allIds);
  }

  const results = new Set();

  function dfs(depth, chosen) {
    if (depth === idArray.length) {
      const key = [...chosen].sort().join(',');
      results.add(key);
      return;
    }

    for (const candidate of idArray[depth]) {
      if (!chosen.includes(candidate)) {
        chosen.push(candidate);
        dfs(depth + 1, chosen);
        chosen.pop();
      }
    }
  }

  dfs(0, []);
  return results.size;
}