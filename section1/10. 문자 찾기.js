// 한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개
// 존재하는지 알아내는 프로그램을 작성하세요.
// 문자열의 길이는 100을 넘지 않습니다.

function solution(s, t) {
  let cnt = 0;

  for (let x of s) {
    if (x === t) cnt++;
  }

  return cnt;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

// // 강의 정답 1
// function solution(s, t) {
//   let answer = 0;

//   for (let x of s) {
//     if (x === t) answer++;
//   }

//   return answer;
// }

// // 강의 정답 2 - 내장함수 사용하기
// // let answer = s.split(t) -> ["COMPUTE", "P", "OG", "AMMING"]
// function solution(s, t) {
//   let answer = s.split(t).length - 1; // t를 구분자로 구분하기
//   return answer;
// }
