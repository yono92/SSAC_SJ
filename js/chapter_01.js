let a = 1;
const b = 5;

a = 3;
// b = 3;

console.log(a);
console.log(b);

if (a >= 3) {
  console.log(">=true");
}

if (a < 3) {
  console.log("<true");
} else {
  console.log("<false");
}

if (a - 1) {
  console.log("-true");
} else {
  console.log("-false");
}

if (b >= 5 && b <= 10) {
  console.log("&&true");
} else {
  console.log("&&false");
}

if (b > 3) {
  console.log("!true");
} else {
  console.log("!false");
}

if (1 === "1") {
  console.lot("===true");
} else {
  console.log("===false");
}

let c = 3;
c = c + 1;
console.log(c);

let d = 3;
d += 1;
console.log(d);

let e = 3;
e++;
console.log(e);
