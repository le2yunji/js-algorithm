// 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
// 을 작성하세요.

// 🚨 못 푼 문제

function solution(s) {
  let answer;

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));

// 강의 정답
// 문자열을 문자 단위로 분해한 후 문자를 toUpperCase로 대문자 변환했을 때 기존의 문자와 같은 지를 판별
// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     if (x === x.toUpperCase()) answer++;
//   }
//   return answer;
// }

// 강의 정답 2 - ASCII 코드
// ⭐️ 대문자는 ASCII 넘버 : 65 ~ 90 (26개)
// ⭐️ 소문자는 ASCII 넘버 : 97 ~ 122 (26개)

// function solution(s) {
//   let answer = 0;
//   for (let x of s) {
//     let num = x.charCodeAt();
//     if (num >= 65 && num <= 90) answer++;
//   }
//   return answer;
// }
