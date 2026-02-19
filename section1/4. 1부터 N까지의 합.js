// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
function solution(n) {
  let answer = 0;
  answer = ((1 + n) * n) / 2;
  return answer;
}

console.log(solution(20));

// 강의 정답
// 반복문을 통해 문제 해결
// let answer = 0;
// for (let i = 1; i <= n; i++) {
//   answer += i;
// }
// return answer;
