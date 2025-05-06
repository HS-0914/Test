export {};
function solution(n: number, lost: number[], reserve: number[]): number {
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  // 여벌 있으면서 잃어버린 사람 제거
  for (let student of reserve) {
    if (lostSet.has(student)) {
      lostSet.delete(student);
      reserveSet.delete(student);
    }
  }

  for (let student of reserveSet) {
    const prev = student - 1;
    const next = student + 1;

    if (lostSet.has(prev)) {
      lostSet.delete(prev);
    } else if (lostSet.has(next)) {
      lostSet.delete(next);
    }
  }

  return n - lostSet.size;
}

console.log(solution(5, [4, 2], [3, 5]));
console.log(solution(5, [2, 3], [3, 4]));
console.log(solution(5, [2, 3], [3, 5]));
