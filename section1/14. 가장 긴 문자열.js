// N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

function solution(s) {
  let answer;

  for (let i = 1; i < s.length; i++) {
    answer = s[i - 1];
    if (s[i].length > s[i - 1].length) answer = s[i];
  }
  return answer;
}
let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));

// 강의 정답
// function solution(s) {
//   let answer,
//     max = Number.MIN_SAFE_INTEGER; // 가장 작은 숫자

//   for (let x of s) {
//     // x는 배열 안 각각의 단어
//     if (x.length > max) {
//       max = x.length;
//       answer = x;
//     }
//   }
//   return answer;
// }
