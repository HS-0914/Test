// https://school.programmers.co.kr/learn/courses/30/lessons/42577
export {};
function solution(phone_book: string[]): boolean {
  for (let i = 0; i < phone_book.length; i++) {
    const [check_str, check_arr]: [string, string[]] = [
      phone_book[i],
      ...phone_book,
    ];
    console.log(check_str);
    console.log(check_arr);
    for (let j = 0; j < check_arr.length; j++) {
      const check: boolean =
        check_str.length <= check_arr[j].length &&
        check_arr[j].startsWith(check_str);
      if (check) {
        return !check;
      }
    }
  }
  return true;
}
