const path = new URL(window.location);
console.log(path);
const title = path.pathname.slice(-13).slice(0, -5);

document.getElementsByTagName("h1")[0].textContent = title;
const btn = document.getElementById("btn");
const input = document.getElementsByTagName("input")[0].value;
console.log(input);

function getInput() {
  const input = new URL(window.location).searchParams.get("title");
  const p = document.getElementById("inp");
  p.innerHTML = input;
}
getInput();

//<style>h1{color: red};</style><script>alert(2);</script>
//<iframe src="http://127.0.0.1:5500/"></iframe>

let section = document.getElementById("section");
let h1 = document.getElementById("h1");

let html = new URL(location).searchParams.get("html");
let js = new URL(location).searchParams.get("js");
let css = new URL(location).searchParams.get("css");

section.innerHTML = `<style>${css}</style>${html}`;
function add() {
  console.log("3");
}
eval(js);

//********************************* */
//   inspect element --> Application
//           LOCALSTORAGE

// key-value pair
localStorage.setItem("name", "chipo");
localStorage.setItem("name", "koko"); //overwrite
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
localStorage.clear();

sessionStorage.setItem("name", "rex");
console.log(sessionStorage.getItem("name"));

//      cookies 🍪
document.cookie = "name=edmundo; expires=" + new Date(2024, 0, 5).toUTCString();
document.cookie = "lastName=jgd; expires=" + new Date(2024, 0, 5).toUTCString();

console.log(document.cookie);

const fruits = { fruit: "peach" };

localStorage.setItem("fruits", JSON.stringify(fruits));
const getFruits = JSON.parse(localStorage.getItem("fruits"));
console.log(getFruits);

function store(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj));
}
function retrieve(name) {
  return JSON.parse(localStorage.getItem(name));
}

//************************************** */
//           GENERATORS    /          ///

// generators are created as window object methods,so it can be overwritten

function* generateSequence() {
  yield 3;
  yield 4;
  return 5;
}
let generator = generateSequence();
let generator2 = generateSequence();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());
// // new separate generator object
console.log(generator2.next());
console.log(generator2.next());
console.log(generator2.next());

// iterate

// for (let value of generator) {
//   alert(value);
// }
function* generateSequence() {
  yield 1;
  yield 2;
  return 3;
}

let generator1 = generateSequence();

// iterate
// for (let value of generator1) {
//   alert(value); // 1, then 2
// }
let sequence = [0, ...generateSequence()];
console.log(sequence);

function* simpleGenerator() {
  console.log("before 1");
  yield 1;
  console.log("after 1");
  console.log("before 2");
  yield 2;
  console.log("after 2");
  console.log("before 3");
  yield 3;
  console.log("after 3");
}
const generatorObject = simpleGenerator();
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());
console.log(generatorObject.next());

function* generateId() {
  let id = 1;
  while (true) {
    const increment = yield id;
    if (increment != null) {
      id += increment;
    } else {
      id++;
      console.log(generateId().next().value);
    }
  }
}

const idGenerator = generateId();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next(5).value);
console.log(generateId().next().value);
console.log(generateId().next().value);

function* iterateArr(array) {
  yield array;
}
const array3 = [6, 9, 10, 567];
const array = iterateArr([4, 8, 23, 8]);
for (let value of array) {
  console.log(value);
}
const object = iterateArr({ name: "logan", age: 76 });
for (let value in array.entries) {
  console.log(value);
}

console.log(object.next().value);

cardDeck = {
  suits: ["⚜", "🔶", "💗", "🐧"],
  court: ["J", "Q", "K", "A"],
  [Symbol.iterator]: function* () {
    for (let suit of this.suits) {
      for (let i = 2; i <= 10; i++) yield suit + i;
      for (let c of this.court) yield suit + c;
    }
  },
};
console.log([...cardDeck]);

// adding amount with yield
function* myBalance() {
  let balance = 0;
  while (true) {
    balance += yield balance;
  }
}

const myAcc = myBalance(0);
console.log(myAcc.next().value);
console.log(myAcc.next(30).value);
console.log(myAcc.next(50).value);
//console.log([...myAcc]);

///////////////////////////
// get almost random increasing/decreasing number (f.e.to use as color or position)
function* neverEnding() {
  while (true) {
    yield Date.now();
  }
}
let now = neverEnding();
/*setInterval(() => {
  let t = Math.sin(now.next().value / 1000) * 0.5 + 0.5;
  console.log(t);
}, 500);*/
console.log((Math.sin(Date.now()) * 0.5 + 0.5).toFixed(6) * 1e6);

// get yields with spread operator
function* moreGenerators(e) {
  yield e + 10;
  yield e + 25;
  yield e + 33;
}
let moreGenerate = moreGenerators(20);

console.log([...moreGenerate]);

// SPREAD OPERATOR RETURNS ARRAY OF ALL YIELDS

// generator yielding generator

function* mamaGenerator(x) {
  yield x + 15;
  yield* papaGenerator(4);
}
let mama = mamaGenerator(10);
function* papaGenerator(y) {
  yield y + y;
  yield y * y;
}

// console.log(mama.next());
// console.log(mama.next());
// console.log(mama.next());
// spread operator doesnt work if next() is already called
console.log([...mama]);

// GENERATORS for PAGINATION
const dataArray = Array.from({ length: 35 }, (_, index) => index + 1);
console.log(dataArray);
function* paginate(data, resultsSize) {
  let startIndex = 0;

  while (startIndex < data.length) {
    const endIndex = Math.min(startIndex + resultsSize, data.length);
    const page = data.slice(startIndex, endIndex);
    yield page;
    startIndex = endIndex;
  }
}

const pageGenerator = paginate(dataArray, 10);

function displayPage(page) {
  console.log(page);
}
displayPage(pageGenerator.next().value);

const pageBtn = document
  .getElementById("page")
  .addEventListener("click", () => {
    const nextPage = pageGenerator.next();
    if (!nextPage.done) {
      displayPage(nextPage.value);
    } else {
      console.log("Nomore results!");
    }
  });

//**************************** */
//      RECURSION

function callmeMaybe(n) {
  if (n === 0) return;
  console.log(`Doing ${n} `);
  callmeMaybe(n - 1);
}
callmeMaybe(3);

// find factorial
// with loop
function findFactorial(n) {
  let factorial = 1;
  for (let i = factorial; i <= n; i++) {
    factorial *= i;
  }
  console.log(factorial);
}
findFactorial(5);

// with recursion
function findFactorialR(n) {
  if (n === 0) return 1;
  let factorial = n * findFactorialR(n - 1);

  return factorial;
}
console.log(findFactorialR(5));

// more examples
function countDown(n) {
  for (let i = n; i > 0; i--) {
    console.log(i);
  }
  console.log("Hooray");
}
countDown(3);

function countDownRecursive(n) {
  if (n === 0) {
    console.log("hooray");
    return;
  }
  console.log(n);
  countDownRecursive(n - 1);
}
countDownRecursive(2);

function sumRangeR(n) {
  if (n === 0) return 0;
  let total = n + sumRangeR(n - 1);
  return total;
}
console.log(sumRangeR(3));

function sumRangeR2(n, total = 0) {
  if (n <= 0) return total;

  total = sumRangeR2(n - 1, total + n);
  return total;
}
console.log(sumRangeR2(3));

function printChildren(obj) {
  console.log(obj.name);
  obj.children.map((child) => printChildren(child));
}

const tree = {
  name: "John",
  children: [
    {
      name: "Jim",
      children: [],
    },
    {
      name: "Zoe",
      children: [
        {
          name: "Kyle",
          children: [],
        },
        {
          name: "Sophia",
          children: [],
        },
      ],
    },
  ],
};
printChildren(tree);

function chirp(n) {
  if (n === 1) {
    return "chirp";
  }
  return "chirp-" + chirp(n - 1);
}

console.log(chirp(5));

// setting HTTPOny flag on cookies

/*const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.get("/setcookie", (req, res) => {
  res.cookie("myCookie", "eampleValue", { httpOnly: true });
  res.send("Cookie set!");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});*/

console.log(typeof NaN); // number
console.log(Function instanceof Object); // true
console.log([[]] == 0); //true
console.log([[]] == [[]]); // false
console.log([""] == ""); // true
console.log([""] == 0); // true

//     !!!   DON"T trust parseInt()  !!

const arrayR = [1, 2, [3, 4], [[5, 6, 7]]];

const flatArray = (array) => {
  // let tempArray = [];
  console.log(array);
  array.map((item) => {
    Array.isArray(item) ? flatArray(item) : item;
  });
  return array.flat();
};

console.log(flatArray(arrayR));

function replicate(times, number) {
  let arr = [];
  if (times <= 0) return arr;
  arr.push(...replicate(times - 1, number), number);

  return arr;
}
