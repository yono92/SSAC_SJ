// 반복문 : for, while

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 20; i += 2) {
  console.log(10 / i);
}

let sum = 0;
for (let i = 0; i < 10; i++) {
  console.log(sum);
}
//for문 안에 넣으면 누적합이 된다

console.log(sum);

//while 구문에 condition 결과가 true로 고정되면 무한반복
let a = 0;
while (true) {
  a++;
  if (a >= 10) {
    break;
  }
}

console.log(a);

// 로그인 간다나한 시나리오(while 구문을 사용하는 경우)
//로그인을 할ㄷ 대 서버에서는 계속 입력을 기다려야 함
// 사용자가 아이디,비번을 입력
// 입력된 아이디,비밀번호를 입력
// 입력된 아이디와 비밀번호가 잘못되었을 때 오류메세지를 생성
// 다시입력을 기다려야 함
//* 사용자가 올바른 아이디와 비밀번호를 입력할 때까지 반복적으로 오류메세지 발생과 입력 대기 실행

while (true) {}
//1.사용자 입력을 기다리는 실행구문
//2. 입력된 아이디/비밀번호를 비교 => true/false
//3-1. 비교 결과가 true => break를 사용해서 반복을 종료하고 다음 구문을 실행
//3-2. 비교 결과가 false => 다시 입력을 기다리는 구문 실행(반복실행)
