//  String primitive

const message = "This is my first message ";
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
console.log(message.slice(5, 9));
const myVariable = "Mathematics";
// .length is property, not method
console.log(myVariable.length);
myVariable.charAt(3); // 's'
//  String object

const newStr = new String("hi");
