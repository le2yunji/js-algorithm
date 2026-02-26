// N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

function solution(arr) {
  let answer;
  const N = arr.length;
  let sum = 0;
  let sum2 = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      sum += arr[j][i];
      sum2 += arr[i][j];
    }
  }
  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr)); // 155
