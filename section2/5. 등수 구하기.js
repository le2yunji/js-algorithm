// N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
// (같은 점수가 입력될 경우 높은 등수로 동일 처리한다.)

function solution(arr) {
  let answer = [];
  let score = [...arr]; // 깊은 복사로 원본 배열 보존하기
  score.sort((a, b) => b - a); // sort() 메서드는 배열의 요소를 정렬하여 '원본 배열을 직접 변경(mutate)'하고, 정렬된 배열을 반환     [100, 92, 89, 87, 76]
  for (let x of arr) {
    for (let i = 0; i < score.length; i++) {
      if (x === score[i]) answer.push(i + 1);
    }
  }
  return answer;
}

let arr = [87, 89, 92, 100, 76]; // [100, 92, 89, 87, 76]
console.log(solution(arr)); // 4, 3, 2, 1, 5

// 큰 순으로 배열
// 각 요소의 인덱스 번호 + 1
