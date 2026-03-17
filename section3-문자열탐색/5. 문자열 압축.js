// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
// 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오.
// 단 반복횟수가 1인 경우 생략합니다.

function solution(s) {
  let answer = "";
  let x = s.split("");
  const N = s.length;
  let cnt = 1;
  answer += x[0];

  for (let i = 1; i < N; i++) {
    if (x[i] === x[i - 1]) cnt++;
    else {
      if (cnt !== 1) answer += cnt;
      answer += x[i];
      cnt = 1;
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.log(solution(str)); // K2HS7E

// 강의 정답
// function solution(s) {
//   let answer = "";
//   let cnt = 1;
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === s[i + 1]) cnt++;
//     else {
//       answer += s[i];
//       if (cnt > 1) answer += String(cnt);
//       cnt = 1;
//     }
//   }

//   return answer;
// }
