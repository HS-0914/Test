let answer: number = 0;
export {};
function solution(k: number, dungeons: number[][]): number {
  const visited: number[] = Array(dungeons.length).fill(0);
  intoDungeon(k, dungeons, visited, 0);
  return answer;
}

function intoDungeon(
  k: number,
  dungeons: number[][],
  visited: number[],
  count: number
) {
  for (let i = 0; i < dungeons.length; i++) {
    if (!visited[i] && k >= dungeons[i][0]) {
      answer = Math.max(answer, count + 1);
      const next_k = k - dungeons[i][1];
      visited[i] = 1;
      intoDungeon(next_k, dungeons, visited, count + 1);
      visited[i] = 0;
    }
  }
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);
