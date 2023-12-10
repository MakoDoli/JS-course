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

myArray.push("ramen"); // addsas last elem
myArray.pop(); // removes and returns last elem
myArray.unshift("23"); //adds first elem
myArray.shift(); // removes and returns first elem

const newArr = ["piggy", 3, true, 7, false, "Lui"];
//delete newArr[0];
//console.log(newArr); //[empty, 3, true]

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

// slice array returns NEW arrya
const alphabet = ["a", "b", "c", "d", "e", "f"];
const newAlphabet = alphabet.slice(3);
console.log(newAlphabet); //['d', 'e', 'f']

const slicedAlphabet = alphabet.slice(2, 4);
//last index not included- 'till' 4
console.log(slicedAlphabet); // ['c', 'd']

//array reverse() does NOT return new array

console.log(alphabet.reverse()); //['f', 'e', 'd', 'c', 'b', 'a']

//stringify, with commas between

const strFromArr = alphabet.join();
console.log(strFromArr); //f,e,d,c,b,a

//stringufy withOUT commas
const stringFromArr = alphabet.join("");
console.log(stringFromArr); //fedcba

const arrFromString = stringFromArr.split("");
console.log(arrFromString);

//concattinate

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];
const arr3 = arr1.concat(arr2);
console.log(arr3);

const arr4 = [...arr3, ...arr1];
const arr5 = [arr1, arr2, arr3];
console.log(arr4);
console.log(arr5);

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
