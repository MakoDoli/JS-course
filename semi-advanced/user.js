import User, { printAge, printName as printUserName } from "./modules.js";

const user = new User("bob", 11);
console.log(user);
printAge(user);
printUserName(user);

// some console.log from module is logged also
