export {};
function solution(number: string, k: number): string {
  let answer: string[] = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && answer[answer.length - 1] < number[i]) {
      answer.pop();
      k--;
    }
    answer.push(number[i]);
  }

  return answer.slice(0, number.length - k).join("");
}

console.log(solution("179252841", 6));
// 2
