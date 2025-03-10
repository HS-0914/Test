/*
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/
export {};

function solution(x: number): boolean {
    let t = 0;
    let n = x;
    while (n > 9) {
        t += n % 10;
        n = Math.trunc(n / 10);
    }
    t += n;
    console.log(t);
    return !(x % t);

    /*
    var t = 0;
    var n = x;
    do{
        t += n%10;
        n = Math.trunc(n / 10);
    } while(n>0);
    return !(x%t);
    */
}

console.log(solution(5));
// npx tsx
