// 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는
// 프로그램을 작성하세요.

function solution(s) {
  let answer;
  s.map((alphabet) => {
    if (alphabet === "A") alphabet = "#";
  });
  answer = s;
  return answer;
}

let str = "BANANA";
console.log(solution(str));

// // 강의 정답 1
// function solution(s) {
//   let answer = "";
//   for (let x of s) {
//     if (x === "A") answer += "#";
//     else answer += x;
//   }
//   return answer;
// }

// // 강의 정답 2
// function solution(s) {
//   let answer = s; // 얕은 복사
//   answer = answer.replace(/A/g, "#"); // g를 붙여주면 글로벌(전역)으로 바꾸라는 뜻.  s = s.replace(/A/, "#"); 는 처음 만난 A 하나만 바뀜.
//   return answer;
// }
