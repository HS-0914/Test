export {};
function solution(people: number[], limit: number) {
  let answer = 0;
  const sortedPeople = people.sort((a, b) => a - b);
  while (sortedPeople.length != 0) {
    const min = sortedPeople[0];
    const max = sortedPeople.pop()!;
    // limit - max => 무거운 사람이 타고 남은 무게제한
    if (limit - max >= min) {
      sortedPeople.shift();
    }
    answer++;
  }
  return answer;
}

solution([70, 50, 80, 50], 100);
