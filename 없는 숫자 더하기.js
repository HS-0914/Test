/*
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 
return 하도록 solution 함수를 완성해주세요.
*/

function solution(numbers) {
    var answer = 0;
    for (let index = 0; index < 10; index++) {
        if (!numbers.includes(index)) {
            answer += index;
        }
    }
    return answer;
}
/* 
function solution(numbers) {
    return (9 * (9 + 1)) / 2 - numbers.reduce((acc, cur) => acc + cur, 0);
}

const solution = (numbers) =>
    (9 * (9 + 1)) / 2 - numbers.reduce((acc, cur) => acc + cur, 0);
*/
