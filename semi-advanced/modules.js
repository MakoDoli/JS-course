class User {
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }
}
function printName(user) {
  console.log(`User's name is ${user.name}`);
}

function printAge(user) {
  console.log(`User's age is ${user.age}`);
}
function printJob(user) {
  console.log(`User works as ${user.job}`);
}

// function that is not exported but still logs in user.js
function printWord() {
  console.log("Just a word from module that nobody needs");
}
printWord();

// any function executed here will be executed in importer file too
console.log("I'm from module");

export default User;
export { printAge, printName, printJob as job };
