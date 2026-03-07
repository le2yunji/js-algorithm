// N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.
// (첫 번째 수는 무조건 출력한다)

function solution(arr) {
  let answer = [];
  const N = arr.length;
  for (let x of arr) {
    if (x >= N) {
      answer.push(x);
    }
  }
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr)); // 7 9 6 12

// 강의 정답
// function solution(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) answer.push(arr[i]);
//   }
//   return answer;
// }
