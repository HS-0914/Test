export {};
/*
console.log(Number("123")); // 123
console.log(Number("123") === 123); // true
console.log(Number("12.3")); // 12.3
console.log(Number("12.00")); // 12
console.log(Number("123e-1")); // 12.3
console.log(Number("")); // 0
console.log(Number(null)); // 0
console.log(Number("0x11")); // 17
console.log(Number("0b11")); // 3
console.log(Number("0o11")); // 9
console.log(Number("-Infinity")); // -Infinity
console.log(Number("foo")); // NaN
console.log(Number("100a")); // NaN

console.log(Number("123")); // 123
console.log(Number("12.34")); // 12.34
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number("abc")); // NaN (숫자로 변환 불가)

console.log(parseInt("123px")); // 123 (문자 포함 가능)
console.log(parseFloat("12.34px")); // 12.34 (소수점 포함)

console.log(+"123"); // 123 (단항 + 연산자)
console.log(+"12.34"); // 12.34
console.log(+true); // 1
console.log(+false); // 0
console.log(+"abc"); // NaN
*/
/*
console.log(String(123)); // "123"
console.log(String(true)); // "true"
console.log((123).toString()); // "123"
console.log(true.toString()); // "true"
console.log(123 + ""); // "123" (암시적 형변환)

console.log(typeof String(123)); // "string"
console.log(typeof String(true)); // "string"
console.log(typeof (123).toString()); // "string"
console.log(typeof true.toString()); // "string"
console.log(typeof (123 + "")); // "string" (암시적 형변환)
*/

/*
console.log(Boolean(1)); // true
console.log(Boolean(0)); // false
console.log(Boolean("")); // false (빈 문자열은 false)
console.log(Boolean("hello")); // true (빈 문자열이 아니면 true)
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false

console.log(!!1); // true
console.log(!!0); // false
console.log(!!"hello"); // true
console.log(!!""); // false
*/

/*
console.log([] + []); // "" (빈 문자열)
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]"
console.log(true + true); // 2 (true는 1로 변환됨)
console.log("5" - 1); // 4 (문자열이 숫자로 변환됨)
console.log("5" + 1); // "51" (문자열 결합)
*/

/*
function* combinations(arr: number[], n: number): Iterable<number[]> {
  if (n === 0) {
    yield [];
    return;
  }
  
  for (let i = 0; i <= arr.length - n; i++) {
    for (const comb of combinations(arr.slice(i + 1), n - 1)) {
      console.log(`[arr[i], ...comb] = ${[arr[i], ...comb]}`);
      yield [arr[i], ...comb];
    }
  }
}

function solution2(number: number[]): number {
  let answer = 0;
  
  for (const comb of combinations(number, 3)) {
    console.log(`comb = ${comb}`);
    const test = comb.reduce((pre, curr) => pre + curr, 0);
    if (test === 0) answer++;
  }
  
  return answer;
}

console.log(solution2([-2, -1, 0, 1, 2]));
*/

// const test = ["", [1], [2]];
// for (const iterator of test) {
//   console.log(iterator);
// }

// const a = "aaaab";
// const b = "aaab";
// console.log(a < b);

// const test = {};
// if (test) {
//   console.log("test");
// }

console.log([1, 11, 10, 2, 3, 4, 54, 4, 4, 2].sort());
