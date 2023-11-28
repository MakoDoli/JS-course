//    VAR

var greeter = "global hello";

if (true) {
  greeter = "repeat hi";
  var greeter = "hello  from block";
  var neighborsKid = "Tomas";
  console.log(greeter);
}
console.log(greeter);
console.log(neighborsKid); //can access var inside block
var greeter = "another global hello";
console.log(greeter);

//var is hoisted
// var is function-scoped
// check this one in console with and without 'var' inside function
var color = "yellow";
function start() {
  for (var i = 0; i < 3; i++) {
    color = "red"; // write "var" in front
    console.log(color);
  }
  console.log(color);
  //   color = "red";
}
start();
console.log(color);
//var creates window.property
console.log("window's brand new property is " + window.color);
//    LET

let greeter2 = "well hello";
if (true) {
  //greeter2 = "hello or not";
  let greeter2 = "twice hello";
  console.log(greeter2);
}
console.log(greeter2);

let iAmNotUnique = 1;
iAmNotUnique = 3; // CAN reasign

//   CONST

const greeter3 = {
  message: "say hi",
};
console.log(greeter3.message);
greeter3.message = "constant hi"; // CAN modify content inside of object
console.log(greeter3.message);
greeter3.target = "to everyone";
console.log(greeter3.message, greeter3.target);

const iAmUnique = 1;
// iAmUnique = 5; CAN NOT reasign

const word = "word";
//word = "number"; CAN NOT reasign
