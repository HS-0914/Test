export {};
function solution(word: string) {
  const words = ["A", "E", "I", "O", "U"];
  const weights = [781, 156, 31, 6, 1]; // 각 자리의 가중치
  let answer = 0;

  for (let i = 0; i < word.length; i++) {
    const index = words.indexOf(word[i]); // 해당 알파벳의 인덱스
    answer += index * weights[i]; // 인덱스 * 자리 가중치
  }

  return answer + word.length; // 현재 단어의 길이만큼 더해줘야 정확한 순서
}
