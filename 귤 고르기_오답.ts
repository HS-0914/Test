export {};
/*
담을 수 있는 조합을 구하고 (예: [[ 1, 3, 2, 5 ], [ 1, 3, 2, 5 ], [ 1, 3, 2, 4 ]])
조합 별로 Set에 넣고 그것들 중에서
size가 가장 작은 것이 서로 다른 종류의 수의 최솟값이라 생각했습니다.
*/

function* combinations(n: number, arr: number[]): Iterable<number[]> {
  if (n === 0) {
    yield [];
    return;
  }

  for (let i = 0; i <= arr.length - n; i++) {
    for (const comb of combinations(n - 1, arr.slice(i + 1))) {
      yield [arr[i], ...comb];
    }
  }
}

function solution(k: number, tangerine: number[]): number {
  let answer = 100000; // 1 ≤ k ≤ 100,000
  for (const comb of combinations(k, tangerine)) {
    const gyulCombi: Set<number> = new Set(comb);
    answer = Math.min(answer, gyulCombi.size); //  서로 다른 종류의 수의 최솟값
  }

  return answer;
}

solution(3, [1, 3, 2, 5]);
