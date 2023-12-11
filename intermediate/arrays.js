"use strict";

const myArray = [];
// Array elements can be of any type
myArray[0] = "Dave";
myArray[1] = 12;
myArray[2] = false;
console.log(myArray[0]);
//Arrays act like objects. If you assign same array to different variables, modifing one of them will change all of them
const yourArray = myArray;
yourArray[0] = 89;
console.log(myArray[0]);

myArray[7] = {};
console.log(myArray[6], myArray[100000000]); // 'non-existing' elements are assgiend as undefined
console.log(myArray[myArray.length]);

//   ******************************
//   ******************************
const pushedArr = myArray.push("ramen"); // addsas last elem, returns new array length!!!!!!!!

console.log(myArray.push("ramen"));
console.log(pushedArr);
myArray.pop(); // removes and returns last elem
myArray.unshift("23"); //adds first elem
myArray.shift(); // removes and returns first elem
console.log(myArray.unshift("23")); // return array length!!!!

const newArr = ["piggy", 3, true, 7, false, "Lui"];
//delete newArr[0];
//console.log(newArr); //[empty, 3, true]
//   ******************************

// SPLICE MUTATES ORIGINAL ARRAY

//removing element or group of elements
// starting index, how many to remove
newArr.splice(1, 2);
console.log(newArr);

// replace element or group of elemnts
newArr.splice(1, 2, "new here");
console.log(newArr);

//insert elem at specific position
newArr.splice(2, 0, [3, 8]);
console.log(newArr);
//   ******************************

// SLICE array returns NEW arrya
const alphabet = ["a", "b", "c", "d", "e", "f"];
const newAlphabet = alphabet.slice(3);
console.log(newAlphabet); //['d', 'e', 'f']

const slicedAlphabet = alphabet.slice(2, 4);
//last index not included- 'till' 4
console.log(slicedAlphabet); // ['c', 'd']
//   ******************************

//array reverse() does NOT return new array

console.log(alphabet.reverse()); //['f', 'e', 'd', 'c', 'b', 'a']
//   ******************************

//stringify, with commas between

const strFromArr = alphabet.join();
console.log(strFromArr); //f,e,d,c,b,a

//stringufy withOUT commas
const stringFromArr = alphabet.join("");
console.log(stringFromArr); //fedcba

const arrFromString = stringFromArr.split("");
console.log(arrFromString);
//   ******************************

//concattinate

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];
const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = [...arr3, ...arr1];
const arr5 = [arr1, arr2, arr3];
console.log(arr4);
console.log(arr5);
//   ******************************

//nested arrays

const pigs = ["pepa", "rabiko"];
const chicks = ["mamalo", "dedalo", "varika"];
const dogs = ["chipo", "philip"];
const cats = ["kira", "catto"];
const yard = [pigs, chicks, dogs, cats];
const rooms = ["bedroom", "kitchen"];
const outter = ["balcony", "attic", "cellar"];
const house = [rooms, outter];
const farm = [yard, house];

console.log(yard[1][0]); //mamalo
console.log(farm[0][0][0]); // pepa
//   ******************************

// NEW ARRAY METHODS

// with() -replaces and returns NEW array, unlike array.splice() which modifies original array
const people = ["me", "you", "she", "he"];
const noShe = people.with(2, "they");
console.log(people);
console.log(noShe);

//toSorted() - returns new array, unlike array.sort() which modifies original array

const names = ["mikasa", "eren", "levi"];
const alphNames = names.toSorted();
console.log(alphNames);

//toReversed() - returns NEW array, unlike array.reverse() which modifies original

const numbers = [1, 2, 3, 4, 5, 6, 7];
const descending = numbers.toReversed();
console.log(descending);

//toSPliced() - has three arguments and removes/replaces group of elements, same as splice but returns NEW array

const arrayAgain = ["q", "w", "e", "r", "t", "y"];
const letsSlice = arrayAgain.toSpliced(1, 3, 0);
console.log(letsSlice); //['q', 0, 't', 'y']

// ----------------------------------
//              ARRAY METHODS
// ----------------------------------

//array.forEach()
const food = ["apple", "pear", "cheese", "butter", "coffee", "cake", "pear"];

food.forEach((elem) => console.log(elem));
food.forEach((elem, index) => (food[index] = elem + "s"));
console.log(food);
//    WHYYYYYYYY we need index???!!!!!!!!!
//   ******************************

//array.map() - returns new array
const chocolates = food.map((elem) => "chocolate");
console.log(chocolates);
//   ******************************

//array.filter - returns new array of all matching elements

const fourKeys = food.filter((elem) => elem.length === 5);
console.log(fourKeys); // ['pears', 'cakes', 'pears']
//   ******************************

//array.find() - returns first matching element

const found = food.find((elem) => elem.length === 5);
console.log(found); // pears
//if nothing found, returns undefined
//   ******************************

//array.findIndex()- takes condition as arg, returns first element index

const ind = food.findIndex((elem) => elem === "pears");
console.log(ind); // 1
const noInd = food.findIndex((elem) => elem === "milk"); // if no such element => -1
console.log(noInd); //-1
//   ******************************

// array.indexOf() - takes one value as arg, returns first found elem

// it can have 2nd argument - index after* which it should search
const againInd = food.indexOf("coffees");
console.log(againInd); // 4
const noSuchInd = food.indexOf("apples", 3);
console.log(noSuchInd); //-1, because no apples after 3rd position
//   ******************************

//array.lastIndexOf() - takes one value/argument and returns index of last such el

const lastInd = food.lastIndexOf("pears");
console.log(lastInd); // 6
//   ******************************

// array.some() -returns true if at least one elem mathces condition, otherwise false

const exists = food.some((elem) => elem === "pears");
const doesNot = food.some((elem) => elem === "quince");
console.log(exists); //true
console.log(doesNot); // false
//   ******************************

//array.every() returns true if ALL elementsmatch the condition

const allStrings = food.every((elem) => typeof elem === "string");
console.log(allStrings); // true
//   ******************************

//array.inlcudes() - returns true if elem exists. takes 2nd arg to start checking from that position
//   ******************************

//array.toString() - returns string with commas
//   ******************************

//array.join() - returns string with coommas, but with ('') separator returns string withOUT commas

const foodStr = food.join("");
console.log(foodStr); //applespearscheesesbutterscoffeescakespears
//   ******************************

//array.fill() - changes original array. replaces all elemnts with fill(arg). 2nd arg is index from where fill will start
//array.fill()
//array.fill('new elem' , startInd)
//array.fill('new el', srartInd, endInd) last index not included
//   ******************************

// array.copyWithin(2) - copies all array from given index. does not exceed array.length.
//array.copyWithin(2, 4) - 2nd arg is from which position it takes array copy
food.copyWithin(1);
console.log(food);
food.copyWithin(3, 5);
console.log(food);
food.copyWithin(1, 5, 1);
console.log(food);
//   ******************************

// array.sort()- changes original array. sorts by alphabet or ascending numbers by first digit

const randomNums = [3, 11, 6, 2, 67, 4, 23];

randomNums.sort((a, b) => a - b);
console.log(randomNums); //[2, 3, 4, 6, 11, 23, 67]
//   ******************************

// ARRAY.from()
const someSTR = "12345";
// const numArray = Array.from(someSTR) - this array will contain numbers as strings

const numArray = Array.from(someSTR, (elem) => Number(elem));
console.log(numArray); // [1, 2, 3, 4, 5]
//   ******************************

// Array.isArray(arr) -returns true or false
//   ******************************

// Array.valueOf() - makes copy of array

const products = food.valueOf();
console.log(products); // ['apples', 'apples', 'pears', 'coffees', 'cakes', 'coffees', 'cakes']

// array.entries() - array.keys()

const foodEntries = Array.from(food.entries());
console.log(foodEntries);

for (let elem of food.entries()) {
  console.log(elem);
} // logs index-value pairs

const foodKeys = Array.from(food.keys());
console.log(foodKeys); // [0, 1, 2, 3, 4, 5, 6]
for (let key of food.keys()) {
  console.log(key);
}
console.log([...foodKeys]);

const foodValues = Array.from(food.values());
console.log(foodValues); // same as copy of array

for (let value of food) {
  console.log(value);
}
//   ******************************

//    REDUCE()

const againArr = [4, 67, 3, 54, 4];
const initialValue = 0;
const reducedSum = againArr.reduce(
  (prevValue, nextValue) => prevValue + nextValue,
  initialValue
);
console.log(reducedSum); // 132

function reducer(prevValue, nextValue) {
  return prevValue * nextValue;
}
const reducedProduct = againArr.reduce(reducer, 1);
console.log(reducedProduct); // 173664

function diff(prev, next) {
  return +(prev - next);
}
const reducedMinus = againArr.reduce(diff, 0);
console.log(reducedMinus); // -132
// if no initial value is defined, first elem of array will be defaulted init value
//   ******************************

// reduceRight() - starts from last elem
//   ******************************

// array.flat() - flattens nested array and returns NEW array
const nested = [2, 56, [23, 7, [12, 4]], { name: "pepa" }];
const flattened = nested.flat(3);
console.log(flattened); // [2, 56, 23, 7, 12, 4, {…}]
//   ******************************

//array.flatMap()
// if array is returned inside of array after map() call
const mappedFlat = nested.flatMap((item) => {});
console.log(mappedFlat); // [undefined, undefined, undefined, undefined]
const sentences = ["Hello world", "How are you?", "JavaScript is fun"];

const words = sentences.flatMap((sentence) => sentence.split(" "));

console.log(words); // ['Hello', 'world', 'How', 'are', 'you?', 'JavaScript', 'is', 'fun']
//   ******************************

const nestedCopy = [...nested];
console.log(nestedCopy[2][0]);
nestedCopy[2][0] = 9;
console.log(nestedCopy[2][0]);
console.log(nested[2][0]);
console.log(nested[3].name);
nestedCopy[3].name = "rabiko";
console.log(nested[3].name);

//      array deep copy   /////////
const deepCopy = structuredClone(nested);
console.log(deepCopy);
deepCopy[2][0] = "copied";
console.log(deepCopy[2][0]);
console.log(nestedCopy[2][0]);
console.log(nested[2][0]);
