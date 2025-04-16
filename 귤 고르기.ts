export {};
/*
tangerine의 요소 별 중복 개수를 구하고 내림차순으로 정렬한다.
정렬 된 배열에서 순서대로 k - 중복 개수를 한다
빼고 나서 k가 0 >= k 라면 귤을 다 담은것 =>
순서대로 빼서 i+1이 최소값
*/

function solution(k: number, tangerine: number[]): number {
  const tangerineMap: Map<number, number> = new Map();
  let answer = 1;

  for (const size of tangerine) {
    let preVal: number = tangerineMap.get(size) ?? 0;
    tangerineMap.set(size, ++preVal);
  }

  const sorted = [...tangerineMap.entries()].sort((a, b) => b[1] - a[1]);

  for (const [_key, value] of sorted) {
    k -= value;
    if (k <= 0) break;
    answer++;
  }
  return answer;
}

solution(2, [1, 1, 1, 1, 2, 2, 2, 3]);
