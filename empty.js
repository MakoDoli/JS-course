function iCantThinkOfAName(num, obj) {
  // This array variable, along with the 2 parameters passed in,
  // are 'captured' by the nested function 'doSomething'
  var array = [1, 2, 3];
  function doSomething(i) {
    num += i;
    array.push(num);
    console.log("num: " + num);
    console.log("array: " + array);
    console.log("obj.value: " + obj.value);
  }

  return doSomething;
}

var referenceObject = { value: 10 };
var foo = iCantThinkOfAName(2, referenceObject); // closure #1

foo(2); // num 4
foo(4); // num 8

//console.log(a);
//console.log(b);
function someFunc() {
  if (true) {
    a = 34;
  }
}
someFunc();
console.log(a);
a = 75;
const b = 75;

//console.log(c);
// let c = 7;
// console.log("😀".split("")[0] + "😂".split("")[1]);
// console.log("🍕".split("")[0] + "😂".split("")[1]);

if (3 === 3) {
  function printsmth() {
    console.log("no idea");
  }
}

printsmth();
