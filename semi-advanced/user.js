import User, { printAge, printName as printUserName, job } from "./modules.js";

const user = new User("bob", 11, "cook");
console.log(user);
printAge(user);
printUserName(user);
job(user);

// some console.log from module is logged also

//************************* */
//   OPERATORS

// delete - can deleteobject property. can delete arrau element but position and lenght is unchanged. element is replaced by "empty"  ad return undefined

// typeof returns string with type
const trees = ["redwood", "bay", "cedar", "oak", "maple"];
const cedar = "cedar" in trees;
console.log(cedar); //false
console.log(3 in trees); // true

console.log("name" in user); // true
// 'in' checks for indexes or keys

//  false && anything is short-circuit evaluated to false.
//  true || anything is short-circuit evaluated to true.
