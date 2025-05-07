export {};
function upDown(alpha: string) {
  const min = Math.min(
    alpha.charCodeAt(0) - "A".charCodeAt(0),
    26 - (alpha.charCodeAt(0) - "A".charCodeAt(0))
  );
  return min;
}

function solution(name: string) {
  let upDownmoves = 0;
  let minMoves = name.length - 1; // 최대값 : 처음부터 끝까지 가는거

  for (let i = 0; i < name.length; i++) {
    upDownmoves += upDown(name[i]);

    let next = i + 1;

    // A 연속 구간 건너뛰기
    while (next < name.length && name[next] === "A") {
      next++;
    }

    // 📌 양쪽 방향 중 짧은 쪽을 고려해서 총 이동 수 계산
    const move = i + name.length - next + Math.min(i, name.length - next);
    minMoves = Math.min(minMoves, move);
  }
  return upDownmoves + minMoves;
}

solution("JEROEN");
