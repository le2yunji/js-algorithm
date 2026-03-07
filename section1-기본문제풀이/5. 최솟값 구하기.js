// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
function solution(arr) {
  let answer;
  arr.sort((a, b) => a - b);
  answer = arr[0];
  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));

//  강의 정답 1
// let answer,
//   min = Number.MAX_SAFE_INTEGER; // 큰 숫자로 미리 초기화해두기
// min = arr[0]; // 혹은 배열의 첫 번째 숫자 넣어놓기
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) min = arr[i]; // 큰 숫자를 넣어놨기 때문에 첫 번째 숫자는 무조건 들어가게 됨.
// }
// answer = min;
// return answer;

// // 강의 정답 2 - 내장 함수 이용하기
// let answer = Math.min(arr); // ❌ 괄호 안에 배열같은 객체가 넘어가면 안됨.
// let answer = Math.min(...arr); //전개 연산자(스프레드 연산자)로 넣어줘야 함.
// return answer;

// // 강의 정답 3
// let answer = Math.min.apply(null, arr); //전개 연산자(스프레드 연산자)로 넣어줘야 함.
// return answer;
