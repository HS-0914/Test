// https://classroom.google.com/c/NzQ5Nzk1MDE1MjA5/a/NzQ5Nzk1MDE1Mjcx/details
export {};

// const arr = [
//   2, 6, 13, 19, 21, 21, 23, 29, 35, 48, 62, 89, 90, 95, 99, 102, 109, 208, 629,
// ];

const arr = [2, 6, 13, 19, 21];

function solution(key: number, arr: number[]): void {
  const middle = Math.floor(arr.length / 2);
  if (arr.length == 0) {
    return console.log("아쉽지만, 불합격하셨습니다.");
  }
  if (key > arr[middle]) {
    solution(key, arr.slice(middle + 1, arr.length));
  } else if (key < arr[middle]) {
    solution(key, arr.slice(0, middle - 1));
  } else {
    return console.log("축하합니다. 합격하셨습니다.");
  }
}
solution(21, arr);
