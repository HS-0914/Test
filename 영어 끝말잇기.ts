// 영어 끝말잇기 - https://school.programmers.co.kr/learn/courses/30/lessons/12981?language=javascript
export {};
function solution(n: number, words: string[]): [number, number] {
  const speakWords = new Set<string>([words[0]]);
  let i: number = 1;
  let prevWord: string = words[0];
  for (; i < words.length; i++) {
    // 앞뒤 문자 비교
    const isSame = !prevWord.endsWith(words[i][0]);

    // 중복된 문자열 검사
    const isDupli = speakWords.has(words[i]);

    if (isSame || isDupli) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }
    prevWord = words[i];
    speakWords.add(words[i]);
  }

  return [0, 0];
}
