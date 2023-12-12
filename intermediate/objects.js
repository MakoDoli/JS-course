"use strict";
const myObj = { name: "dave" };
console.log(myObj);
console.log(myObj.name);

const anotherObj = {
  alive: true,
  answer: 42,
  hobbies: ["eat", "sleep", "code"],
  beverage: {
    morning: "coffee",
    noon: "lemonade",
  },
  action: function () {
    console.log(`Its time for ${this.beverage.morning} `);
  },
};

console.log(anotherObj.alive); // true
console.log(anotherObj["alive"]); // true
console.log(anotherObj.hobbies[2]); //code
console.log(anotherObj["beverage"].morning); // coffee
anotherObj.action();
//  ***********************  //
// CREATING OBJECTS and its properties and methods

const obj = Object.create({});
Object.defineProperty(obj, "unicorn", {
  value: "🦄",
});
Object.defineProperty(obj, "doggo", {
  get: () => "🐶",
});
console.log(obj.unicorn);
console.log(obj.doggo);

const spider = "🕷";
const legs = 8;

// if value name is same as key name, we write only key

// generating random key name
const randomKey = () => Math.random().toString(36).slice(-5);
const bugs = {
  spider,
  legs,
  [randomKey()]: true,
  action: function () {
    console.log(this.spider);
    return this; //returning this for method chaining
  },
};
console.log(`${bugs.spider} has ${bugs.legs} legs`);
console.log(bugs.action().action());
// creating constructors
function Zombie(name) {
  this.name = name;
  this.reanimated = Date.now();
  this.eatBrain = function () {
    return `${this.name} wants some brains`;
  };
}

const cuteZombie = new Zombie("Greeney");

console.log(cuteZombie.eatBrain());
// Object inharitance

const vehicle = {
  wheels: 4,
  engine: function () {
    return "vrooom";
  },
};

//  ***********************  //
//     INHERITANCE

const truck = Object.create(vehicle);
truck.doors = 2;
console.log(truck); //{doors: 2}
console.log(truck.wheels); // 4 (inherited from 'vehicle')
console.log(truck.engine()); // vrooom

const car = Object.create(vehicle);
console.log(car.engine()); // vrooom

car.engine = function () {
  return "whooosh";
};
console.log(car.engine()); // whooosh

const tesla = Object.create(car);
console.log(tesla.wheels); // 4 (inherited from vehicle)
console.log(Object.getPrototypeOf(truck)); // {wheels: 4, engine: ƒ}
console.log(Object.getPrototypeOf(car)); // {wheels: 4, engine: ƒ}
console.log(Object.getPrototypeOf(tesla)); // {engine: ƒ}

const band = {
  vocals: "Robert Plant",
  guitar: "Jimy Page",
  bass: "John Paul Jones",
  drums: "John Bonham",
};

console.log(Object.keys(band)); // ['vocals', 'guitar', 'bass', 'drums']

console.log(Object.values(band)); // ['Robert Plant', 'Jimy Page', 'John Paul Jones', 'John Bonham']

delete band.drums;
console.log(band.hasOwnProperty("drums")); // false

//  ***********************  //
//    DESTRUCTURING

const { guitar: myVarName, bass: myBassName, vocals } = band;
console.log(myVarName); // Jimy Page
console.log(myBassName); //John Paul Jones
// variable can have same name as KEYS
console.log(vocals); // Robert Plant

for (let job in band) {
  console.log(job);
  console.log(band[job]);
  console.log(`${band[job]} is on ${job}`);
}
// Robert Plant
// Jimy Page
// John Paul Jones
// John Bonham

for (let job of Object.keys(band)) {
  console.log(job); // logs keys
}
for (let job of Object.values(band)) {
  console.log(job); // logs values
}
for (let [job, name] of Object.entries(band)) {
  // should be pairs but we destructured
  console.log(job); // keys
  console.log(name); // values
}

// destructuring parameter from argument object

function sings({ vocal }) {
  console.log(`${vocals} can sing!`);
}
sings(band);
