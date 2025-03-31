export {};
function solution(numbers: string) {
  const numberArr = [...numbers];
  let count = 0;
  const test = [];
  for (let i = 1; i <= numberArr.length; i++) {
    test.push(...getJohap(numberArr, i));
  }
  console.log(test);
  var answer = 0;
  return answer;
}

function getJohap(arr: string[], selectNum: number) {
  const results: string[][] = [];
  if (selectNum === 1) {
    return arr.map((e) => [e]);
  }

  arr.forEach((fixed, i, origin) => {
    const rest = [...origin.slice(0, i), ...origin.slice(i + 1)];
    const nextjohap = getJohap(rest, selectNum - 1);
    const johap = nextjohap.map((e) => [fixed, ...e]);
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

solution("012");
