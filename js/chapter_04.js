// 함수

// 함수 선언 => 정의

function compareOne() {
  if (1 === "1") {
    console.log("==true");
  } else {
    console.log("==false");
  }
}

// 함수 사용 => 호출(call)
compareOne();

function compareNumber(number) {
  if (number === "1") {
    console.log("==true");
  } else {
    console.log("==false");
  }
}

compareNumber(1); // 1 === '1'
compareNumber(2); // 2 --- '2'
compareNumber(3); // 3 --- '3'

function sum(number1, number2) {
  console.log(number1 + number2);
}

sum(1, 2);
sum(3, 6);
sum(4, 10);

// 함수를 호출한 위치에 값을 돌려 주는 것 : return
// return을 사용하게 되면 함수 내부의 결과값을 함수 외부에서 사용 가능

function sumReturn(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

console.log(sumReturn(1, 2));

console.log(sumReturn(3, 4) + 10);

function hello1() {
  console.log("hello fucntion1");
}

let hello2 = function () {
  console.log("hello fucntion2");
};

let hello3 = () => {
  console.log("hello function 3");
};

let hello4 = () => console.log("hello fucntion4");

hello1();
hello2();
hello3();
hello4();

let hello5 = (number) => {
  console.log(number);
};

let hello6 = (number) => console.log(number);

let hello7 = (number) => console.log(number);

hello5(1);
hello6(2);
hello7(3);
