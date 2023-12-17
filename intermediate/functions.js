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

//button.addEventListener("click", clickHandler);
function attachEventListeners() {
  let count = 0;
  button.addEventListener("click", function click() {
    count++;
    button.textContent = `Already clicked ${count} times`;
  });
}
attachEventListeners();

function clickHandler(e) {
  e.target.textContent = "already clicked";
}
