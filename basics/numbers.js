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

new Number(42) !== 42;
const itsAnObj = new Number(42);
const weirdSum = itsAnObj + 42;
console.log(typeof itsAnObj, typeof 42);
console.log(new Number(42) + 42);
console.log(weirdSum);
const comp = "5" === 6;

console.log(comp * 3);
console.log(comp.valueOf());
// no need to create number with 'new' keyword, javascript will do that for us
console.log(score.toExponential());

// ****   TASKS  *****
console.log("**   tasks  **".padEnd(17, "*"));

let fiveZeroDigit = 1e5;
console.log(fiveZeroDigit);
console.log(typeof fiveZeroDigit);

let floatNum = 3.1415;
console.log(typeof floatNum);

// ***    NUMBER METHODS    *****

const PI = 3.141596254;

let numPI = PI.toFixed(3);
console.log(numPI);

numPI = PI.toPrecision(5);
console.log(numPI);
let notPImill = 1000000;
numPI = notPImill.toExponential();
console.log(numPI);

Number.isFinite(PI);
Number.isInteger(PI);
parseFloat("18,45");
parseInt("18,45");
console.log(Number.isSafeInteger(12e11));
console.log(Number.isSafeInteger(12e57));
// ***   TASKS for number nethods  **///
console.log("**   tasks  **".padEnd(17, "*"));

console.log(PI.toFixed(3));
console.log(PI.toPrecision(3));
let lightSpeed = 186000;
console.log(lightSpeed.toExponential());
