export {};
function solution(numbers: string): number {
  const numberArr: string[] = [...numbers];
  const combiArr: string[] = [];
  const countSet: Set<number> = new Set();
  for (let i = 1; i <= numberArr.length; i++) {
    combiArr.push(...getJohap(numberArr, i));
  }
  for (const e of combiArr) {
    const combiNum: number = Number(e);
    if (combiNum > 1 && isSosu(combiNum)) {
      countSet.add(combiNum);
    }
  }
  // console.log(countSet);
  return countSet.size;
}

function getJohap(arr: string[], selectNum: number): string[] {
  const results: string[] = [];
  if (selectNum === 1) {
    return arr;
  }

  arr.forEach((fixed, i, origin) => {
    const rest: string[] = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const nextjohap: string[] = getJohap(rest, selectNum - 1);
    const johap: string[] = nextjohap.map((e) => fixed + e);
    results.push(...johap);
  });

  return results;
}

function isSosu(num: number): boolean {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
}
// solution("112");
