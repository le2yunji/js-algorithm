// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수
// 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.
function solution(n) {
  let answer;
  answer = Math.floor(n / 12);
  if (n % 12 !== 0) answer += 1;
  return answer;
}

console.log(solution(120));

// Math.floor -> 내림
// Math.round -> 반올림
// Math.ceil -> 올림

// 내림 후 조건식으로 1을 더해주는 방식이 아니라 올림을 하면 한번에 해결 !!
// let answer = Math.ceil(n / 12);
// return answer;
