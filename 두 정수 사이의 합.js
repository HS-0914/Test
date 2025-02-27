/*
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다
*/

function solution(a, b) {
    var t = 0;
    if (a === b) {
        return a;
    }
    if (a > b) {
        for (a; a >= b; a--) {
            console.log(a);
            t += a;
        }
    } else {
        for (a; a <= b; a++) {
            console.log(a);
            t += a;
        }
    }
    return t;

    /*
    return (a+b) * (Math.abs(a-b)+1) / 2;
    */
}