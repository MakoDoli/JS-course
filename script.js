let num = 3;
let newNum = 3.16;

console.log(typeof num);
console.log(typeof newNum);

let mill = 1000000;
let million = 1e6;
// 1* (10**6) = 1000000
console.log(million);

let smallNum = 1e-6;
console.log(smallNum);

let score = new Number(100);
console.log(typeof score);
// no need to create number with 'new' keyword, javascript will do that for us
console.log(score.toExponential());

// ****   TASKS  *****

let fiveZeroDigit = 1e5;
console.log(fiveZeroDigit);
console.log(typeof fiveZeroDigit);

let floatNum = 3.1415;
console.log(typeof floatNum);
