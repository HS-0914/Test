/*
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 
다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다.
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 
"DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 
만드는 함수, solution을 완성해 보세요.
*/

/*
공백은 아무리 밀어도 공백입니다.
s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
s의 길이는 8000이하입니다.
n은 1 이상, 25이하인 자연수입니다.
65-90 대문자
97-122 소문자
*/
export {};
function solution(s: string, n: number): string {
    let caesar: string = "";
    for (let i = 0; i < s.length; i++) {
        let chr: number = 0;
        if (s[i] === " ") {
            caesar += s[i];
            continue;
        }
        // 대문자 + 넘어가는 값
        if (s[i] !== s[i].toLowerCase() && s.charCodeAt(i) + n > 90) {
            chr = 65 + (s.charCodeAt(i) + n - 91);
        } else if (s[i] !== s[i].toUpperCase() && s.charCodeAt(i) + n > 122) {
            chr = 97 + (s.charCodeAt(i) + n - 123);
        } else {
            chr = s.charCodeAt(i) + n;
        }

        /*
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            // 대문자
            if (s.charCodeAt(i) + n > 90) {
                chr = 65 + (s.charCodeAt(i) + n - 91);
            } else {
                chr = s.charCodeAt(i) + n;
        }
        } else {
            if (s.charCodeAt(i) + n > 122) {
                chr = 97 + (s.charCodeAt(i) + n - 123);
            } else {
                chr = s.charCodeAt(i) + n;
            }
        }
        */
        caesar += String.fromCharCode(chr);
    }
    return caesar;
}
