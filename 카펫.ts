/*
width * 2 + height * 2 - 4 = brown

(width - 2) * (height - 2) = yellow
*/
function solution(brown: number, yellow: number) {
    let width = 3;
    let height = 3;
    while (width * 2 + height * 2 - 4 <= 5000) {
        for (height; height <= width; height++) {
            const isBrown: boolean = width * 2 + height * 2 - 4 === brown;
            const isYellow: boolean = (width - 2) * (height - 2) === yellow;

            if (isBrown && isYellow) {
                return [width, height];
            }
        }
        height = 3;
        width++;
    }
}
