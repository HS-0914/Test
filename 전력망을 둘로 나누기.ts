export {};
function solution(n: number, wires: number[][]) {
  // 그래프 인접 리스트 생성
  const graph: number[][] = Array.from({ length: n + 1 }, () => []);
  for (const [v1, v2] of wires) {
    graph[v1].push(v2);
    graph[v2].push(v1);
  }

  const subtreeSize: number[] = Array(n + 1).fill(0); // 각 노드의 서브트리 크기 저장
  const visited: boolean[] = Array(n + 1).fill(false); // 방문 체크

  // DFS를 통해 서브트리 크기 계산
  function dfs(node: number) {
    visited[node] = true;
    subtreeSize[node] = 1; // 자기 자신 포함

    for (const neighbor of graph[node]) {
      if (!visited[neighbor]) {
        subtreeSize[node] += dfs(neighbor); // 자식 서브트리 크기 더하기
      }
    }

    return subtreeSize[node];
  }

  dfs(1); // 루트는 아무 노드나 가능하므로 1번부터 시작

  // 모든 연결을 다시 살펴보며 네트워크 차이 최소값 계산
  let minDiff = 0;
  console.log(subtreeSize);
  for (const [v1, v2] of wires) {
    // 둘 중 어느 쪽이 자식일지는 모르지만, 작은 쪽이 서브트리임
    const part = Math.min(subtreeSize[v1], subtreeSize[v2]);
    const diff = Math.abs(n - 2 * part);
    minDiff = Math.min(minDiff, diff);
  }

  return minDiff;
}
