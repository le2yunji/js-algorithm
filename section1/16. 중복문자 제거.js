// 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
// 제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

// 🚨 못 푼 문제

function solution(s) {
  let answer = "";
  return answer;
}
console.log(solution("ksekkset"));

// 강의 정답
// function solution(s) {
//   let answer = "";

//   for (let i = 0; i < s.length; i++) {
//     // console.log(s[i], i, s.indexOf(s[i]));
//     if (s.indexOf(s[i]) === i) {
//       // 같을 때 = 첫 번째 발견할 때
//       answer += s[i];
//     }
//   }

//   return answer;
// }

// 번외 - 중복되는 문자 개수 찾기
// function solution(s) {
//   let answer = 0;
//   let pos = s.indexOf("k"); // 처음 찾은 인덱스값
//   while (pos !== -1) {
//     answer++;
//     pos = s.indexOf("k", pos + 1);
//   }
//   return answer;
// }
