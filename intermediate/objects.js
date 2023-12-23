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
// CREATING OBJECT and its properties and methods

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

// creating CONSTRUCTOR functions

function Zombie(name) {
  this.name = name;
  this.reanimated = Date.now();
  this.eatBrain = function () {
    return `${this.name} wants some brains`;
  };
}

const cuteZombie = new Zombie("Greeney");

console.log(cuteZombie.eatBrain());

// another   CONSTRUCTOR FUNCTION

function SuperElement(type, content) {
  this.el = document.createElement(type);
  this.el.innerText = content;
  document.body.append(this.el);
  this.el.addEventListener("click", () => {
    console.log(this.el);
  });
}

const h1 = new SuperElement("h1", "hello again");

const elArray = ["a", "b", "c"];

const myElements = elArray.map((item) => new SuperElement("p", item));

// Object inharitance

const vehicle = {
  wheels: 4,
  engine: function () {
    return "vrooom";
  },
};

//  ***********************  //
//     INHERITANCE - PROTOTYPE

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
  // to exclude methods
  if (typeof job !== "function") console.log(job);
  console.log(band[job]);
  console.log(`${band[job]} is on ${job}`);
}

// Robert Plant
// Jimy Page
// John Paul Jones
// John Bonham

// check if object has property
if ("bass" in band) {
  console.log(`The band has bass`);
}

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

//  ***********************  //

//       OOP     OOP    OOP

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};
circle.draw(); // draw

// create object - FACTORY Function

function createObject(radius) {
  return {
    radius: radius,
    draw: function () {
      console.log("draw cirlce");
    },
  };
}
const circles = createObject(1);

function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    //returns object
    bake: () => {
      console.log(`Baking a ${size} ${crust} pizza`);
    },
  };
}

const pizza = pizzaFactory("small");
pizza.bake();
//********************************** */
// create Object - CONSTRUCTOR function

function Circle(radius) {
  console.log("this: ", this);

  this.radius = radius;

  //   this.computOptimumLocation = function () {
  //     console.log("Dont call me!");
  //   };
  let computOptimumLocation = function () {
    console.log("Cannot get me!");
  };
  this.draw = function () {
    computOptimumLocation();
    console.log("draw");
  };

  //this.defaultLocation = { x: 0, y: 0 };
  let defaultLocation = { x: 0, y: 0 };

  this.getDefaultLocation = function () {
    console.log(defaultLocation);
    return defaultLocation;
  };

  Object.defineProperty(this, "defaultLocation", {
    get: function () {
      console.log(defaultLocation);
      return defaultLocation;
    },
    set: function (value) {
      if (!value.x || !value.y) throw new Error("Invalid location");
      defaultLocation = value;
    },
  });
}
// getters are read-only

// to hide details, we declare them as variables, not as object properties

//const otherCircle = Circle(2); // this:  Window {window: Window, self: Window, document: document, name: '', location: Location, …}

const otherCircle = new Circle(2); // this:  Circle {}
// 1) new empty object is created
// 2) this -> points to this new object
// 3) properties are asigned to object

otherCircle.draw(); // Cannot get me!
otherCircle.getDefaultLocation();
otherCircle.defaultLocation;
//otherCircle.defaultLocation = 1; // error
Circle.prototype.color = "red";
console.log(otherCircle.color); // red
console.log("radius" in otherCircle); //true
console.log("color" in otherCircle); //true
console.log(otherCircle.hasOwnProperty("radius")); //true
console.log(otherCircle.hasOwnProperty("color")); //false

console.log(otherCircle.__proto__ === Circle.prototype); // TRUE!!!!
//******************************* */

// FACTORY -lowercase, returns object
// CONSTRUCTOR -Uppercase, 'this' and 'new' keywords

// circles.contructor -  ƒ Object() { [native code] }
//
//otherCircle.contructor - ƒ Circle(radius) {
//   console.log("this: ", this);
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

let x = {};
// let x = new Object()
//Every object has .contructor property, which references to function that was used to create this object

//************************************* */
//   Functions IS Object too !!!!

console.log(Circle.name); // "Circle"
console.log(Circle.length); // 1 (amount of parameters)

// function methods

Circle.call({}, 1); // {}- for 'this, 1 for parameter 'radius'

// Circle.constructor - ƒ Function() { [native code] } -  own Function constructor

// creating FUNCTIONS with constructor

const Circle1 = new Function(
  "radius",
  `
this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
`
);

const circleFromFunction = new Circle1(2);
console.log(circleFromFunction); // {radius: 2, draw: ƒ}

//  primitves vs objects as arguments
let number = 10;

function add(number) {
  number++;
}
add(number);
add(number);
console.log(number); // 10

let number2 = 10;
function add2() {
  number2++;
}
add2();
add2();
console.log(number2); // 12

let objNum = { value: 10 };
function add3(obj) {
  obj.value++;
}
add3(objNum);
console.log(objNum.value); // 11

// adding and accessing properties

const circle3 = new Circle(10);
circle.location = { x: 3 };

const propertyName = "center-location";
circle[propertyName] = { x: 50 };
console.log(circle["location"]);
console.log(circle[propertyName]);

//************************** */
// STOPWATCH  EXERCISE

function StopWatch() {
  let startTimer;
  this.duration = 0;

  this.start = function () {
    startTimer = setInterval(() => {
      this.duration++;
      console.log(this.duration);
    }, 1000);
  };

  this.clear = function () {
    clearInterval(startTimer);
  };
  this.stop = function () {
    console.log(`Timer duration was ${this.duration}`);
    this.clear();
  };
  this.reset = function () {
    this.clear();
    this.duration = 0;
    this.start();
  };
}

const sw = new StopWatch();
console.log(sw);
//sw.start();
//sw.stop();

//******************************* */
//   CHECK  FROM HERE !!!!!!!!!!!!!!!!

// this f***ing keyword

//when function is method in object: this -> object

var firstName = "Ilia"; // !!!!!!!!!!!!
const ilia = {
  firstName: "Ilia",
  year: 1837,

  // KEY:    VALUE,
  calcAge: function () {
    console.log(2024 - this.year);
  }, // FUNCTION IS JUST VALUE!!!!

  greet: () => console.log(`Don't shoot, I am ${this.firstName}`), // this -> window object

  withArrow: function () {
    const inner = () =>
      console.log(`${this.firstName} was born in ${this.year}`);
    // this -> one step up, grandParent function
    inner();
  },

  withFunction: function () {
    const self = this; // to access this
    const inner = function () {
      console.log(`${self.firstName} establisehd first bank`);
    };
    inner();
  },
};
ilia.greet();

ilia.calcAge(); // 187 - ilia's age

ilia.withArrow(); // Ilia was born in 1837
ilia.withFunction();

const akaki = {
  firstName: "Akaki",
  year: 1840,
};

// using object's function as simple function to assign to other object's method

akaki.calcAge = ilia.calcAge;
akaki.calcAge(); // 184 - akaki's age
akaki.withArrow = ilia.withArrow;
akaki.withArrow(); // Akaki was born in 1840

//using as regular, simple function
//    const justFunc = ilia.calcAge;
//    justFunc();

const lastObj = {
  a: 7,
  get b() {
    this.a = 8;
    return this.a;
  },

  set c(param) {
    this.a = this.a + param;
  },
};
console.log(lastObj.a);
console.log(lastObj.b);
console.log(lastObj.a);
lastObj.c = 5;
console.log(lastObj.a);

//////////////////////////////////
//        PRACTICE

const Moto = function (model, speed) {
  this.model = model;
  this.speed = speed;
  this.year = 2010;
};

Moto.prototype.accelerate = function () {
  this.speed += 20;
};
Moto.prototype.brake = function () {
  this.speed -= 20;
};
const harley = new Moto("Harley Davidson", 300);
harley.accelerate();
console.log(harley.speed);

//const davidson = new harley("bike", 200);
// harley is NOT CONTRUCTOR

const Bike = function (model, speed, color) {
  Moto.call(this, model, speed);
  this.color = color;
  this.year = 2015;
};
Bike.prototype.engine = function () {
  console.log(`${this.color} ${this.model} engine: bghn bghn`);
};

const kawasaki = new Bike("Kawasaki", 400, "green");
kawasaki.engine();
//kawasaki.accelerate(); error, kawasaki proto is Bike, not Moto
//harley.engine(); error, harley's proto is Moto
console.log(kawasaki.year);
console.log(kawasaki instanceof Bike); //true
Object.setPrototypeOf(Bike, Moto);
console.log(kawasaki instanceof Moto); // false
console.log(kawasaki.year);
//console.log(kawasaki.accelerate()); error
//Bike.prototype = Object.create(Moto.prototype);
console.log(kawasaki instanceof Moto);
//console.log(kawasaki.accelerate()); error
console.log(kawasaki.year);

const Polygon = function () {
  this.name = "Polygon";
};

const Rectangle = function () {
  this.name = "Rectangle";
};

const Square = function () {
  Polygon.call(this);
};

Object.setPrototypeOf(Square.prototype, Rectangle.prototype);

const newInstance = new Square();

console.log(newInstance.name); // Polygon

// __proto__ vs prototype

let cat = { breed: "munchkin", name: "gato" };

let myCat = { name: "fluffy" };

Object.setPrototypeOf(myCat, cat);
console.log(myCat.breed);
console.log(myCat.name);
console.log(myCat.__proto__); //{breed: 'munchkin', name: 'gato'} - cat
