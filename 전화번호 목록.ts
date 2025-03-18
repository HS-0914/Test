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

/*
function solution(phone_book: string[]): boolean {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}
*/

function solution(phone_book: string[]): boolean {
  const phone_set = new Set<string>([...phone_book]);
  for (const phone of phone_set) {
    let checkPhone = "";
    for (let i = 0; i < phone.length - 1; i++) {
      // 접두어 확인
      // 문자열에서 마지막 문자 전(같은 문자열은 없기 때문)까지
      // 빈 문자열에 하나씩 넣어가면서 비교
      checkPhone += phone[i];
      if (phone_set.has(checkPhone)) {
        return false;
      }
    }
  }
  return true;
}
