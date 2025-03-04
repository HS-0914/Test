/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/68644
 * 정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서
 * 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.
 *
 * numbers의 길이는 2 이상 100 이하입니다.
 * numbers의 모든 수는 0 이상 100 이하입니다.
 */

export {};
function solution(numbers: number[]): number[] {
    // 경우의 수  n (n-1) / 2
    // const answer: number[] = []; => 배열에서 겹치는 수 제거 => Set
    const answer = new Set<number>();

    // for문 종료 후
    // 배열이라면 [ 2, 1, 3, 1 ] :::: [ 3, 5, 3, 4, 2, 4 ]지만
    // Set엔 같은값 중복이 없음 :::: [ 3, 5, 4, 2 ]
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            answer.add(numbers[i] + numbers[j]);
        }
    }
    return [...answer].sort((a, b) => a - b);
}
console.log(solution([2, 1, 3, 1]));
