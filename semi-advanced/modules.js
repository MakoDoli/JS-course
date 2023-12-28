class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
function printName(user) {
  console.log(`User's name is ${user.name}`);
}

function printAge(user) {
  console.log(`User's age is ${user.age}`);
}
console.log("I'm from module");
export default User;
export { printAge, printName };
