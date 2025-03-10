export {};
// https://school.programmers.co.kr/learn/courses/30/lessons/81301
const strToNumber: Record<string, number> = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
};
function solution(s: string) {
    let str = s;
    for (const key in strToNumber) {
        if (str.includes(key)) {
            str = str.replaceAll(key, `${strToNumber[key]}`);
        }
    }
    return +str;
}

console.log(solution("one2three5zero"));
