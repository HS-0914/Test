export {};
function solution(number: string, k: number) {
  const arr = [...number].slice(0, number.length - k).map(Number);

  console.log(arr);
  const maxNum = Math.max(...arr);
  console.log(maxNum);
  console.log(arr.);

  var answer = "";
  return answer;
}

solution("1231234", 3);
