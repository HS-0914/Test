export {};
function solution(genres: string[], plays: number[]): number[] {
  const albumMap: Map<string, number[]> = new Map();
  for (let i = 0; i < genres.length; i++) {
    const preVal: number[] = albumMap.get(genres[i]) || [];
    albumMap.set(genres[i], [...preVal, plays[i]]);
  }

  for (const [key, value] of albumMap) {
    const playSum = value.reduce((acc, curr) => acc + curr, 0);
    const playRank = [playSum, ...value].sort((a, b) => b - a);
    albumMap.set(key, playRank);
  }

  const albumRank = [...albumMap.entries()].sort((a, b) => b[1][0] - a[1][0]);
  var answer: number[] = [];
  for (const [genre, [, first, second]] of albumRank) {
    let firstIndex = -1;
    let secondIndex = -1;
    for (let i = 0; i < genres.length; i++) {
      if (genres[i] == genre && plays[i] == first && firstIndex == -1) {
        firstIndex = i;
        continue;
      }
      if (genres[i] == genre && plays[i] == second && secondIndex == -1) {
        secondIndex = i;
        continue;
      }
      if (firstIndex != -1 && secondIndex != -1) {
        break;
      }
    }
    answer.push(firstIndex);
    if (second) {
      answer.push(secondIndex);
    }
  }

  return answer;
}
