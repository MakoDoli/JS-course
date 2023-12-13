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
