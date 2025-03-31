// https://school.programmers.co.kr/learn/courses/30/lessons/42578
export {};
/*
1: x y
2: xy

1: x y z
2: xy xz yz
3: xyz

total = (x+1)(y+1)(z+1)-1
*/
function solution(clothes: string[][]): number {
  let total: number = 1;
  const typeCount: Record<string, number> = {};
  for (const element of clothes) {
    if (!typeCount[element[1]]) {
      typeCount[element[1]] = 0;
    }
    typeCount[element[1]]++;
  }
  for (const key in typeCount) {
    total *= typeCount[key] + 1;
  }
  return --total;
}
