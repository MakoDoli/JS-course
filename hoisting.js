const sumConst = (a, b) => a + b;

console.log(`sumFunc(1,2)=>${sumFunc(1, 2)}`);
console.log(`sumConst(1,2)=>${sumConst(1, 2)}`);

function sumFunc(a, b) {
  //log(); // error
  return a + b;
}

// console.log(varFunc(3, 5));
// var varFunc = (a, b) => a + b;

console.log(varNotFunc);
var varNotFunc = 2;
console.log(varNotFunc);

/* ------------------*/
const logValue = function () {
  let value = 1;
  log();
};

function log() {
  //let value = 1;
  if (true) {
    console.log(value);
  }
  //let value = 1;
}

let value = 1;
logValue();
//log();
//let value = 1;

console.log("DONE!");

let greet = "hello";
function test(a) {
  console.log(a);
}
test(greet);
//let greet = "hello";

if (true) var checked = "checked"; //can not declare let or const. let and const must be decalred inside the block {}
console.log(checked);
