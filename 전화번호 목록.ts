// https://school.programmers.co.kr/learn/courses/30/lessons/42577
export {};
/* 
function solution(phone_book: string[]): boolean {
  for (let i = 0; i < phone_book.length; i++) {
    const checkNumber = phone_book[i];
    const checkArr = phone_book.slice(0, i).concat(phone_book.slice(i + 1));
    
    for (let j = 0; j < checkArr.length; j++) {
      const check: boolean =
      checkNumber.length < checkArr[j].length &&
      checkArr[j].startsWith(checkNumber);
      if (check) {
        return !check;
      }
    }
  }
  return true;
}
*/

function solution(phone_book: string[]): boolean {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].indexOf(phone_book[i]) === 0) {
      return false;
    }
  }
  return true;
}
