for (var i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}
for (let i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  //setInterval(log, 3000);
  setTimeout(log, 200);
}

//printName(); error, can't access let myName before initialization
let myName = "mako";
function printName() {
  console.log(myName);
}
myName = "notmako";
printName();
myName = "otherName";
printName();

function outerFunction(outerVariable) {
  const giftForKid = "keep this gift in heap memory";
  return function innerFunction(innerVariable) {
    console.log("Outer variable: " + outerVariable);
    console.log("Inner variable: " + innerVariable);
    console.log(giftForKid);
  };
}

const newFunction = outerFunction("outside"); //newFunction არის ის ფუნქცია, რომელიც დააბრუნა outerFunction-მა, ანუ "შიგნითა" ფუნქცია, რომელსაც პარამეტრად პირველი console.log-ისთვის უკვე აქვს გადაცემული სიტყვა "outside"
newFunction("inside");
outerFunction("outside")("inside");

function makeFunc() {
  const name = "Mozilla";
  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();

function makeAdder(x) {
  return function (y) {
    return x + y;
  };
}
const add5 = makeAdder(5); // returns inner function with already  one paramater (x) from "parent" function or lexical enviroment or heap memory (რაც გინდა ის დაუძახე :დ)
const add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

console.log(makeAdder(8)(3));
//why we need functions to return functions tho

//private variables and functions are those which we cant access from outside
const counter = (function () {
  //lexical environment with
  //two private items:
  let privateCounter = 0; //private
  function changeBy(val) {
    /*private*/
    privateCounter += val;
  }

  return {
    increment() {
      changeBy(1);
    },

    decrement() {
      changeBy(-1);
    },

    value() {
      return privateCounter;
    },
  };
})();

console.log(counter.value()); // 0.

counter.increment();
counter.increment();
console.log(counter.value()); // 2.

counter.decrement();
console.log(counter.value()); // 1.

function interviewQuestion(job) {
  switch (job) {
    case "Teacher":
      return function (name) {
        console.log("What subject do you teach, " + name);
      };

    case "Designer":
      return function (name) {
        console.log(name + ", Explain what UX design is");
      };
    case "Lawyer":
      return function (name) {
        console.log(name + ", how long you have been practicing law?");
      };
    default:
      return function (name) {
        console.log(name + ", we dont have " + job + " job");
      };
  }
}

let teacherQuestion = interviewQuestion("Teacher");
teacherQuestion();
teacherQuestion("Dalailama");
interviewQuestion("Designer")("Leonardo");
interviewQuestion("Developer")("Brendan");

// global scope
const e = 10;
function sum(a) {
  return function (b) {
    return function (c) {
      // outer functions scope
      return function (d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}
//closures have acees to all outer scopes
console.log(sum(1)(2)(3)(4)); // 20

class MyObject {
  constructor(name, message) {
    this.name = name.toString();
    this.message = message.toString();
    this.getName = function () {
      return this.name;
    };

    this.getMessage = function () {
      return this.message;
    };
  }
}
const toString = new MyObject(1234, 5678);
console.log(toString.getName());

//lexical enviroment in closure
//  !IMPORTANT
x(); //();
function x() {
  let a = 5;
  function y() {
    console.log(a);
  }
  y();
  a = 40; //will log updated a, NOT 5
  y();
  return y;
}
x()();

let last;
console.log(last);

function withTimeOut() {
  //just use let instead of var, wtf
  for (var i = 1; i <= 5; i++) {
    function forClosure(i) {
      setTimeout(function () {
        console.log(i);
      }, 1000);
    }
    forClosure(i);
  }
}
withTimeOut();
let j = 1;
while (true) {
  console.log(j);
  j += 2;
  if (j > 10) break;
}
