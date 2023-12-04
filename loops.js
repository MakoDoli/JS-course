// LOOPS need:
// START, DO on each, STOP
// initialization, condition, finalExpression

// arrays, maps and strings are itterable

const piglets = ["nif-nif", "naf-naf", "nuf-nuf"];
//classic (exact amount)
for (let i = 0; i < piglets.length; i++) {
  console.log(piglets[i]);
}
//simple (all of it to the end)
for (let e of piglets) {
  console.log(e);
}

//for each

piglets.forEach((piggy) => console.log(piggy));

const mil = 1000000;
const arr = Array(mil);

console.time("🔊");
// for (let i = 0; i < arr.length; i++) {} // 3.3

// for (let v of arr) {
//   //  20ms
// }
// arr.forEach((v) => null); // ~3.3 ms
// arr.map((v) => v).forEach((v) => null); //13 (10+3)

// forEach and classic are fastest
console.timeEnd("🔊");
// loops for OBJECTS

const sweets = { morning: "coffee", lunch: "cheesecake", evening: "chocolate" };

//loop over keys and values of object
// "for property in object"
for (let key in sweets) {
  console.log(key);
  console.log(sweets[key]);
}
//loop over values of object
for (let key of Object.values(sweets)) {
  console.log(key);
}
//loop over key: value pairs
for (let key of Object.entries(sweets)) {
  console.log(key);
}

const nifnif = piglets.filter((piggy) => piggy === "nif-nif");
console.log(nifnif); // ['nif-nif']
const farm = piglets.map((piggy) => "chicken");
console.log(farm); // array of 'chicken'-s
console.log(piglets); //original arrya
// map() does NOT modify original array
//map() returns new arry
const pepas = piglets.map((piggy) => "Pepa");
console.log(pepas); //['Pepa', 'Pepa', 'Pepa']

piglets.forEach((piggy) => {
  piggy = "Pepa";
});
console.log(piglets); //['nif-nif', 'naf-naf', 'nuf-nuf']

const autumn = piglets.reduce(
  (acc, piggy) =>
    acc +
    (piggy === "nif-nif" || piggy === "naf-naf" || piggy === "nuf-nuf" ? 1 : 0),
  0
);
console.log(autumn);

piglets.splice(2);
console.log(piglets);

const duplicates = [1, 1, 2, 2, 3];
console.log(new Set(duplicates));

// some() returns true if at least one item meets condition, ro false if none
// every() returns true if all elements meet the condition
// filter() returns all elements which meet condition
// forEach() does NOT return new array and it modifies original array
// reduce (acc, item) returns result of calculation

// -----------------------//
//     while  loop,   do...while  loop

let i = 3;

while (i > 0) {
  console.log(i);
  i--;
}
i = 3;
do {
  console.log(i);
  i--;
  console.log(i);
} while (i > 3); // loop will execute at least once, because first it DOES,and then checks condition after

for (let i = 0; i < 2; i++) {
  for (let i = 0; i < 3; i++) {
    let j = 3;
    do {
      console.log(j);
      j--;
      console.log(j);
    } while (j > 3);
  }
}
