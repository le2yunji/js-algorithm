// 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
// 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
// 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다.
// 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
// 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

// 🚨 못 푼 문제

function solution(arr) {
  let answer;
  let sum = 0;
  arr.map((n) => (sum += n));
  return answer;
}

let arr = [22, 7, 21, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// 강의 정답
// 이중 for 문으로 모든 숫자 두 개의 쌍의 합이 전체 합에서 빠졌을 때 100이 되는지 판별하기
// function solution(arr) {
//   let answer = arr;
//   let sum = arr.reduce((a, b) => a + b, 0); // a에 b를 누적, a는 0으로 초기화한다.
//   let flag = 0;
//   for (let i = 0; i < 8; i++) {
//     for (let j = i + 1; j < 9; j++) {
//       if (sum - (arr[i] + arr[j]) === 100) {
//         arr.splice(j, 1);
//         arr.splice(i, 1);
//         flag = 1;  // 가능한 답의 경우가 2가지 이상일 경우 모두 빠지지 않도록 처음 쌍을 발견한 이후 for문을 벗어난다.
//         break;
//       }
//     }
//     if(flag === 1) break;
//   }
//   return answer;
// }
