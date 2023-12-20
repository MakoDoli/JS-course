"use strict";
// functions statement aka declaration
function statement() {
  console.log(
    "i am function statement because i was created with function keyword"
  );
}

// function expression - just another variable

const expression = function () {
  console.log("i am expression because i was asigned to variable");
};

// Anonymous function - noName girl - used as VALUES
const someFN = function () {
  console.log("right side is anonymous");
};

const someObj = {
  print: function () {
    console.log(
      "right side in object method is value, so it can be anonymous function"
    );
  },
};

const someArr = [() => console.log("shhh...")];
someArr[0]();

// Named function expression

const nameHere = function nameThere() {
  console.log("how to even call this");
};
// nameThere(); can not call by function name which is assigned to variable
nameHere();

// Difference between parameter and argument
// parameter is a local variable in function scope

const paraArg = function (param1, param2) {
  function babyFn() {
    console.log(param1, param2);
  }
  return babyFn;
};
paraArg("I was argument1 which was asigned to param1", " same here")();

// First class functions
// Abilitty to pass and recieve functions as arguments and parameters as well as to return them
// First Class Functions are First Class Citizens

const businessClass = function (fnAsParam, name) {
  fnAsParam(name)();
};

function passangers(billionaire) {
  return function richies() {
    console.log(`${billionaire} is travelling business class`);
  };
}
businessClass(passangers, "Jozef Bezos");

// CALLBACK functions are functions passed to another function as arguments

setTimeout(function timer() {
  console.log("i'm callback");
}, 5000);

function x(y) {
  console.log("x");
  y();
}
x(function y() {
  console.log("y");
});

//          EVENTLISTENERS

const button = document.getElementById("clickMe");
const secondButton = document.getElementById("target");

//button.addEventListener("click", clickHandler);
function attachEventListeners() {
  let count = 0;
  this.addEventListener("click", function click() {
    count++;
    this.textContent = `Already clicked ${count} times`;
  });
}
attachEventListeners.call(button);
attachEventListeners.call(secondButton);
function clickHandler(e) {
  e.target.textContent = "already clicked";
}

//********************************* */

//        PRACTICE

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};
//    Higher-order function
//   create abstraction
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by function: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

const high5 = function (str) {
  console.log(`🖐 hi ${str.length ? str : "there"} `);
};
document.body.addEventListener("click", high5);

["levi", "mikasa", "armin"].forEach(high5);

// Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const letsGreet = greet("How are you");
letsGreet("Logan");

greet("Yo")("nigga!");

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("Heil")("Hitler!");

//    call and apply

const lufthansa = {
  airline: "Lufthansa",
  iatacode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iatacode} ${flightNum}`
    );
    this.bookings.push({
      flight: `${this.iatacode}${flightNum}`,
      name: `${name}`,
    });
  },
};

lufthansa.book(234, "Joohn Smith");
console.log(lufthansa.bookings);

const euroWings = {
  airline: "EuroWings",
  iatacode: "EW",
  bookings: [],
};

const book = lufthansa.book; // extracting function

book.call(euroWings, 654, "Logan Roy");
book.apply(euroWings, [444, "Shiv Roy"]);

const flightData = [367, "David Bagrationi"];
book.call(euroWings, ...flightData);
console.log(euroWings.bookings);

// bind
const bookEW = book.bind(euroWings);
bookEW(608, "Jessica Parker");

//partial application
const bookEW23 = book.bind(euroWings, 23); //
bookEW23("Martin Luther King");

const addTax = (rate, value) => value + value * rate * 0.01;

console.log(addTax(18, 200));
// null because object doesnt matter
const addVAT = addTax.bind(null, 23);
console.log(addVAT(200));

const addTaxFunc = function (rate) {
  return function (value) {
    return value + value * rate * 0.01;
  };
};

const addTaxArr = (rate) => (value) => value + value * rate * 0.01;

const addTax2 = addTaxFunc(18);
console.dir(addTax2);
console.log(addTax2(200));
const addTax3 = addTaxArr(18);
console.log(addTax3(200));

// closures again

let f = "not function";
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};
g();
f();

console.dir(g);
console.log(g.prototype.constructor);
