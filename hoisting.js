const sumConst = (a, b) => a + b;

console.log(`sumFunc(1,2)=>${sumFunc(1, 2)}`);
console.log(`sumConst(1,2)=>${sumConst(1, 2)}`);

function sumFunc(a, b) {
  //log(); // error
  return a + b;
}

// console.log(varFunc(3, 5));
// var varFunc = (a, b) => a + b;

console.log(varNotFunc);
var varNotFunc = 2;
console.log(varNotFunc);

/* ------------------*/
const logValue = function () {
  let value = 1;
  log();
};

function log() {
  //let value = 1;
  if (true) {
    console.log(value);
  }
  //let value = 1;
}

let value = 1;
logValue();
//log();
//let value = 1;
// JS ფუნქციის შიგნით რა ხდება არ კითხულობს სანამ არ გამოვიძახებთ. ფუნქციის შიგნით უკვე თანმიმდევრობით მიყვება, წინასწარ არ კითხულობს მთელ ფუნქციას(unlike global execution). ფუნქციის შიგნით თავის ბლოკში თუ ვერ იპოვა, ამოდის ზემოთ ფუნქციის სკოუპში, იქაც თუ ვერ იპოვა, გამოდის გლობალ სკოუპში და იქაც თუ ვერ იპოვა ერორს აგდებს. (მანამდე სხვა ფუნქციაში რომც წაეკითხა, ამ ფუნქციიდან სხვაში ვერ წვდება, გლობალ სკოუპში ჩრდება)👏
console.log("DONE!");
