// N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
// 출력하는 문자열은 원래의 입력순서를 유지합니다.

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer.push(s[i]);
  }
  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

// 강의 정답
// function solution(s) {
//   let answer;
//   answer = s.filter(function (v, i) {
//     if (s.indexOf(v) === i) return s.indexOf(v) === i;
//   });
//   return answer;
// }
