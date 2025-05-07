export {};

function solution(number: string, k: number) {
  const firstNumbers = [...number].slice(0, k + 1).map(Number); // 앞자리로 올 수 있는 숫자들
  const maxNum = Math.max(...firstNumbers); // 그것들 중에서 가장 큰 값과
  const maxIndex = firstNumbers.indexOf(maxNum); // 그 인덱스
  let count = k - maxIndex; // 남은 제거할 개수
  let arrLeft = [...number].slice(maxIndex + 1).map(Number); // 제거될 숫자들
  let i = 0;
  while (i != arrLeft.length - 1 && count) {
    if (arrLeft[i] < arrLeft[i + 1]) {
      arrLeft.splice(i, 1);
      i = 0;
      count--;
    } else {
      i++;
    }
  }
  while (count) {
    arrLeft.pop();
    count--;
  }
  arrLeft.unshift(maxNum);
  let answer = arrLeft.join("");
  return answer;
}

solution("1231234", 3);
console.log(solution("179252841", 6));
// 2
