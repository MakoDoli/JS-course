"use strict";

class Rectangle {
  constructor(_width, _height, _color) {
    console.log("The object is created");

    this.width = _width;
    this.height = _height;
    this.color = _color;
    this.numberOfRequestsForArea = 0;
  }

  getArea() {
    this.numberOfRequestsForArea++;
    return this.width * this.height;
  }

  printDescription() {
    console.log(
      `I'm a rectangle of ${this.width}x${this.height} and I'm ${this.color}`
    );
  }
  // getter
  get area() {
    return this.width * this.height;
  }
  // setter
  set area(num) {
    this.width = num / this.height;
    // will change this.width property
  }
  // STATIC methods are called only on CLASS itself, not on instance
  // In JavaScript, you can't directly call a static method on an instance because STATIC METHODS DON'T EXIST IN THE INSTANCE'S PROPTOYPE CHAIN. They belong to the class itself.
  static equals(a, b) {
    console.log(a.width, b.width);
    console.log(a.width * a.height);
    return a.width * a.height === b.width * b.height;
  }

  static isSquare() {
    return this.width === this.height;
  }
}

let myRectangle2 = new Rectangle(8, 8, "cyan");
let myRectangle1 = new Rectangle(4, 16, "pink");

console.log(myRectangle1);
console.log(myRectangle2);
console.log(myRectangle1.valueOf());
console.log(typeof myRectangle1);
console.log(typeof Rectangle);

console.log(myRectangle1.getArea()); // 2*9=18
myRectangle1.printDescription(); // I'm a rectangle of 2x9 and I'm pink
console.log(myRectangle1.area);
//myRectangle1.area = 54;
console.log(myRectangle1.width); // 6
console.log(Rectangle.equals(myRectangle1, myRectangle2));
console.log(Rectangle.isSquare(myRectangle2));

//******************************** */
//    Parent  and Child class
//  CLASS INHERITANCE - EXTENDS

class Person {
  constructor(_name, _age) {
    this.name = _name;
    this.age = _age;
  }
  describe() {
    console.log(`I am ${this.name} and I am ${this.age} years old`);
  }
}

class Programmer extends Person {
  constructor(_name, _age, _yearsOfExperience) {
    super(_name, _age); // calls parent class

    // Custom/extended behavior
    this.yearsOfExperience = _yearsOfExperience;
  }

  code() {
    console.log(`${this.name} is coding`);
  }
}

let person1 = new Person("Jeff", 45);
let programmer1 = new Programmer("Dom", 56);

console.log(person1);
console.log(programmer1);
programmer1.code();
programmer1.describe();

const developers = [
  new Programmer("kevin", 38, 7),
  new Programmer("bernard", 76, 30),
];

function developSoftware(programmers) {
  // DEVELOP software

  for (let programmer of programmers) {
    programmer.code();
  }
}

developSoftware(developers);

//***************************** */
//     POLYMORPHISM

class Animal {
  constructor(name) {
    this.name = name;
  }
  makeSound() {
    console.log(`Generic animal sound`);
  }
}

class dog extends Animal {
  constructor(name) {
    super(name);
  }

  makeSound() {
    super.makeSound();
    console.log("Woof! Woof!");
  }
}

const a1 = new Animal("Dom");
const a2 = new dog("Jeff");

a1.makeSound();
a2.makeSound();

//*********************** */
//   Creating classes for DOM elements

class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = [];
  }
  // Makes <li>text</li> tag
  static createListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    return li;
  }

  update() {
    // REmove all existing <li> elements

    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }

    //  Fill <ul> tag with <li> elements

    for (const text of this.textList) {
      this.listElement.appendChild(ListBinding.createListItem(text));
    }
  }

  add(text) {
    this.textList.push(text);
    this.update();
  }

  remove(index) {
    this.textList.splice(index, 1);
  }
}

//*********************** */
//   Let's make   PIZZA!

class Pizza {
  constructor(pizzaType) {
    this.type = pizzaType;
    this._size = "medium";
    this._crust = "original";
    this.toppings = [];
  }
  //getCrust()
  get pizzaCrust() {
    return this._crust;
  }

  //setCrust(param)
  set pizzaCrust(crustType) {
    this.crust = crustType;
  }

  getToppings() {
    return this.toppings;
  }

  setToppings(topping) {
    this.toppings.push(topping);
  }

  bake() {
    console.log(
      `Baking a ${this.size} ${this.crust} crust ${
        this.type
      } pizza with ${this.toppings.join("")}`
    );
  }
}

const myPizza = new Pizza("Margherita");
myPizza.bake();
myPizza.pizzaCrust = "thin";
//myPizza.setCrust('thin')
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.bake();

class SpecialtPizza extends Pizza {
  constructor(pizzaType) {
    super(pizzaType);
    this.type = "The works";
  }
  slice() {
    console.log(`OUr ${this.type} ${this.size} pizza has 8 slices`);
  }
}

const mySpecialty = new SpecialtPizza("medium");
mySpecialty.slice();

// Public and Private fields

class Pizza2 {
  crust = "Original"; // public
  #sauce = "traditional"; // #private
  #size;
  constructor(pizzaSize) {
    this.#size = pizzaSize;
  }

  getCrust() {
    return this.crust;
  }

  setCrust(pizzaCrust) {
    return (this.crust = pizzaCrust);
  }

  hereYouGo() {
    console.log(
      `Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza`
    );
  }
}

const pizzaWithSauce = new Pizza2("large");
pizzaWithSauce.hereYouGo();
console.log(pizzaWithSauce.crust); //Original
console.log(pizzaWithSauce.sauce); //Undefined

//*************************** */
//      This   keyword

// 'this' === current execution context

//-------------------------------------
// if function is part of object, "this" references to parent object
// method -> object
//if function is regular function, not part of object, it references to global object
// function - global (window, global)

// METHOD
const video = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(tag, this);
        // here 'this'reference to global (window) object because callback functions inside of method is not part of object. its inner function of method, so its regular function
      },
      this
      //{ firstName: "Mosh" } // now if we add object as 2nd argument in forEach(), 'this' inside of forEach method will reference to this object
    );
  },
  play() {
    console.log(this);
  },
};
video.length = 60;
console.log(video);
video.play();
video.showTags();

// REGULAR FUNCTION

function playVideo() {
  console.log(this);
}
playVideo(); // only without 'strict mode'

function Video(title) {
  this.title = title;
  console.log(this);
}

const v = new Video("aot");
//if you call constructor function with 'new' keyword, it will create and reference to empty object

function whodis() {
  console.log(this); // window
}

const jeff = {
  face: ":O",
  whodis,
};
jeff.whodis(); // 'this' is jeff object

const itsJeff = whodis.bind(jeff);
itsJeff(); // 'this' is jeff object

// 'this' in methods declared with 'function' keyword referenc to parent object.
// 'this in methods declared by arrow fucntion references to global obj enclosing the parent object (one step up environment)

// DO NOT use arrow functions in methods using 'this'

const joe = {
  face: ":O",

  whodis: function () {
    console.log(this); // joe object
  },

  whome: () => console.log(this), // arrow functions reference to global

  showFace,
};
console.log(joe.showFace());

//*********************** */

//       bind, call and apply

//when we can not put our FUNCTION IN OBJECT (no access to object), we can put OBJECT IN OUR FUNCTION

function showFace() {
  return this.face;
}

// 1) to "pass" object as parameter, so "this" refers to argument's object, we use .bind

const showJoesFace = showFace.bind(joe);
console.log(showJoesFace);

console.log(showJoesFace());

// or can use .call

//showFace.call(joe, arg1, arg2);

// 2) or can use .apply. args in array

showFace.call(joe, ["other", "arguments", "here"]);
// !!!!!!!!!!!!!!!!!!!!!!!!!
// .bind just modifies function, while .call executes function

// 'this' inside contructor functions

function Person2(n) {
  this.name = n;
  this.talk = function () {
    console.log(this);
  };

  this.wait = setTimeout(
    function () {
      console.log(this);
    }.bind(this),
    300
  );
  // wait() will be called because setTImout is called as soon as its created. 'this' inside function inside of parent function points to global, so we need to .bind inner function to parent object
}
const lelouch = new Person2("lelouch");
lelouch.talk();
