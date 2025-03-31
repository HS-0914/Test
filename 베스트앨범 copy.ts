export {};
function solution(genres: string[], plays: number[]): number[] {
  const albumMap: Map<string, number[]> = new Map();
  const songArr: (string | number)[][] = [];
  let answer: number[] = [];

  for (let i = 0; i < genres.length; i++) {
    const preVal: number[] = albumMap.get(genres[i]) || [];
    albumMap.set(genres[i], [...preVal, plays[i]]);
    songArr.push([genres[i], plays[i]]);
  }

  for (const [key, value] of albumMap) {
    const playSum = value.reduce((acc, curr) => acc + curr, 0);
    const playRank = [playSum, ...value].sort((a, b) => b - a);
    albumMap.set(key, playRank);
  }

  const albumRank = [...albumMap.entries()].sort((a, b) => b[1][0] - a[1][0]);
  for (const [genre, [, first, second]] of albumRank) {
    const firstIndex = songArr.findIndex(
      (item) => item[0] === genre && item[1] === first
    );
    const secondIndex = songArr.findIndex(
      (item, i) => item[0] === genre && item[1] === second && i !== firstIndex
    );
    answer.push(firstIndex);
    if (secondIndex !== -1) {
      answer.push(secondIndex);
    }
  }

  return answer;
}
