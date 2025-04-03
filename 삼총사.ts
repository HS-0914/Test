export {};
/**
 *
 * @param trioSet 3개 조합됐을 때 넣을 Set
 * @param prevArr 하나씩 조합
 * @param originArr 하나 넣고 남은 나머지
 */
function findTrio(
  trioSet: Set<string>,
  prevArr: number[],
  originArr: number[]
) {
  if (prevArr.length > 3) return;
  if (prevArr.length == 3) {
    trioSet.add(prevArr.sort().toString());
    return;
  }
  for (let i = 0; i < originArr.length; i++) {
    const remainArr = [...originArr.slice(0, i), ...originArr.slice(i + 1)];
    findTrio(trioSet, [...prevArr, originArr[i]], remainArr);
  }
}

function isTrio(trioString: string, number: number[]): boolean {
  const trioArr: number[] = trioString.split(",").map(Number);
  const trio: number = trioArr.reduce((prev, curr) => prev + number[curr], 0);

  // 0이면 true 반환
  return !trio;
}

function solution(number: number[]) {
  const trioSet: Set<string> = new Set();
  findTrio(trioSet, [], [...number.keys()]);
  const trio: string[] = [...trioSet].filter((value) => isTrio(value, number));
  return trio.length;
}

solution([-2, -1, 0, 1, 2]);
