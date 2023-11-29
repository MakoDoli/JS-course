console.log(" Here SCOPES start ".padStart(35, "*").padEnd(50, "*"));
// GLOBAL SCOPE
// accessible from everywhere
// MODULAR SCOPE
// import { message } from "./strings.js";
// console.log(message);
sayHi();
console.log(globalVar); //imports from other modules global scope
// but if we redeclare - check
// const globalVar = "another global var";
// console.log(globalVar);
/****************** */
//if js file is imported in html as <script> tag, then global var is accessible in every other js file BELOW it which are also imported in same html

//if i want to import variable from other js file which is not imported in html as <script> tag, need to use "export" from exporter source js file and import in my importer js, and add type='module' BOTH in <script> tag of my importer js and <script>
/* -------------- *****----*/
/* -------------- *****----*/
const y = 3;
let x = 23;
if (y > 1) {
  console.log(y);
}

//   LOCAL   SCOPE :
// block scope
//we can declare let and const with same names as already declared ones, inside block. but this does not redeclare previous global let and const, these are new, block-scoped let & const

{
  const y = 5;
  let x = 90;
}

// function scope
function justFunction() {
  const y = 13;
  const funcy = "in function";
  if (true) {
    const blocky = "in block";
    const y = 14;
    console.log("same const: block inside function: " + y); // 14
    console.log(funcy);
    //const funcy = 25;
  }
  //console.log(blocky);
  console.log("same const: inside function: " + y); // 13
}
justFunction();
console.log("same const: global one: " + y); // 3

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}
// code here can NOT use carName
