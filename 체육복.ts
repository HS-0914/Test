export {};
function solution(
  n: number,
  raw_lost: number[],
  raw_reserve: number[]
): number {
  // 학생들 기본 옷
  const students: number[] = Array(n).fill(1);
  const lost_set = new Set(raw_lost);
  const reserve_set = new Set(raw_reserve);

  // 여분이 있지만 도난 당해서 빌려주지 못하는 경우 제외
  const reserve = raw_reserve.filter((cloth) => !lost_set.has(cloth));
  const lost = raw_lost.filter((cloth) => !reserve_set.has(cloth));

  // 학생들 여분 옷
  reserve.forEach((clothIndex) => students[clothIndex - 1]++);

  // 5, [4, 2], [3, 5]의 [4, 2] 같이 큰 사이즈가 먼저 도난당한 경우인 반례를 해결
  lost.sort((a, b) => a - b);

  // 옷 훔치기
  lost.forEach((clothIndex) => {
    students[clothIndex - 1]--;
    // 옷없음 빌려야함
    if (!students[clothIndex - 1]) {
      // 앞사람한테 빌림
      if (students[clothIndex - 2] == 2) {
        students[clothIndex - 2]--;
        students[clothIndex - 1]++;
      } else if (students[clothIndex] == 2) {
        // 뒷사람한테 빌림
        students[clothIndex]--;
        students[clothIndex - 1]++;
      }
    }
  });
  return students.filter(Boolean).length;
}

console.log(solution(5, [4, 2], [3, 5]));
console.log(solution(5, [2, 3], [3, 4]));
console.log(solution(5, [2, 3], [3, 5]));
