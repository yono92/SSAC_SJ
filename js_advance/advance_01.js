// html4 api
console.log(document.getElementById("text1"));
console.log(document.getElementsByClassName("text2"));
console.log(document.getElementsByTagName("div"));

// html5 api
console.log(document.querySelector("#text1"));
console.log(document.querySelector(".text2"));
console.log(document.querySelector("div"));

console.log(document.querySelectorAll(".text2"));
console.log(document.querySelectorAll("div"));

document.getElementById("text1").innerHTML = "Hello World";

const para = document.createElement("p");
const node = document.createTextNode("Hello");
para.appendChild(node);
document.querySelectorAll(".text2")[0].appendChild(para);

const para1 = document.createElement("p");
const node1 = document.createTextNode("Hello ");
para1.appendChild(node1);
document.querySelectorAll(".text2")[1].appendChild(para1);

for (let i = 0; i < 4; i++) {
  let p = document.createElement("p");
  let n = document.createTextNode("Hello HTML5");
  let el = p.appendChild(n);

  document.querySelectorAll(".text2")[3].appendChild(el);
}

// document.querySelector('.text2').appendChild('<p>Append Node</p>');

$(function () {
  $(".text2").append("<span>Append jquery node</span>");
});
