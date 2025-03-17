// https://classroom.google.com/c/NzQ5Nzk1MDE1MjA5/a/NzQ5Nzk1MDE1Mjcx/details
export {};
const arr = [
  2, 6, 13, 19, 21, 21, 23, 29, 35, 48, 62, 89, 90, 95, 99, 102, 109, 208, 629,
];
function solution(key: number, lower: number, upper: number): void {
  if (lower > upper) {
    return console.log("아쉽지만, 불합격하셨습니다.");
  }
  const middle = Math.floor((lower + upper) / 2);
  /*
  if (middle == lower) {
    if (key == arr[lower] || key == arr[upper]) {
      return console.log("축하합니다. 합격하셨습니다.");
    } else {
      return console.log("아쉽지만, 불합격하셨습니다.");
    }
  }
  */

  if (key > arr[middle]) {
    lower = middle + 1;
    solution(key, lower, upper);
  } else if (key < arr[middle]) {
    upper = middle - 1;
    solution(key, lower, upper);
  } else {
    return console.log("축하합니다. 합격하셨습니다.");
  }
}
const test = Number(prompt("수험번호를 입력하세요: "));
solution(test, 0, arr.length - 1);
