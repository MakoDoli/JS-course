//  String primitive
// delete keyword "export" for this file to work
export const message = "This is my first message ";
console.log("NO IDEA WHY THIS IS LOGGED!!!");
message[0]; // 'T'
message[2]; // 'i'
message.includes("my"); // true
message.includes("guitar"); // false
message.startsWith("This"); // true
message.startsWith("this"); // false
message.endsWith("e"); //  true
message.indexOf("my"); // 8 (shows first occurance)
message.lastIndexOf("i"); // 12 (shows last occurance)
message.replace("first", "new"); //returns new string, doesnt modify original string
message.trim(); // removes white spaces from start and end
message.trimEnd();
message.trimStart();
message.toUpperCase(); // all cap letters

// escape notion
const sameMessage = "This is my\n first message "; // starts from new line after \n

message.split(" "); // returns array
console.log(message.split("i"));
message.split(""); // returns arrya of each character
message.split(",");
message.slice(5, 9); // doesnt include 9th/last, returns sliced out part
console.log(message.slice(4));
console.log(message.slice(5, 9));
console.log(message.substring(3, 7));

const myVariable = "Mathematics";
// .length is property, not method
console.log(myVariable.length);
myVariable.charAt(3); // 's'

const aStr = "a";
const bStr = "b";
console.log(aStr < bStr);
//  String object

const newStr = new String("hi");

const strPrim = String(1);
console.log(strPrim);

const s1 = "2 + 2"; // creates a string primitive
const s2 = new String("2 + 2"); // creates a String object
const num23 = 23;
const strAsNum = new String(4);
const numAsnum = new Number(4);
console.log(eval(s1)); // returns the number 4
console.log(eval(s2)); // returns the string "2 + 2"
console.log(num23 + strAsNum); // 234
console.log(num23 + numAsnum);

console.log("🚗".split(""));
console.log("🚗".split("")[0], console.log("🚗".split("")[1]));
console.log("hello".codePointAt(1));
console.log("hello".concat("-world"));

// String.matchAll using regex
const text = "Hello 123 and 456, welcome to the world of 789.";

// Regular expression with capturing groups
const regex = /\d+/g;

// Using matchAll to find all matches
const matchesIterator = text.matchAll(regex);

// Converting the iterator to an array and logging the result
const matchesArray = Array.from(matchesIterator, (match) => match[0]);
console.log(matchesArray);
