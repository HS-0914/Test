function solution(numbers: number[], target: number): number {
  const plus_minus = [1, -1];
  var answer = 0;
  const dfs = (index: number, sum: number) => {
    if (index == numbers.length) {
      if (sum == target) {
        answer++;
      }
      return;
    }

    for (const symbol of plus_minus) {
      const i = index + 1;
      dfs(i, sum + symbol * numbers[index]);
    }
  };

  dfs(0, 0);

  return answer;
}
