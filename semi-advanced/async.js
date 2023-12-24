// console.log("1 stack");
// queueMicrotask(function () {
//   console.log("2 microtask");
// });
// requestAnimationFrame(function () {
//   console.log("3 rAF");
// });
// console.log("4 stack");
// setTimeout(function () {
//   console.log("5 task timeout");
// }, 0);
// console.log("6 stack");
// Promise.resolve()
//   .then(function () {
//     console.log("7 microtask promise");
//   })
//   .then(function () {
//     console.log("8 microtask after resolve");
//   });
// requestAnimationFrame(function () {
//   console.log("9 rAF");
// });
// console.log("10 stack");
// setTimeout(function () {
//   console.log("11 task timeout");
// });
// queueMicrotask(function () {
//   console.log("12 microtask");
// });
// console.log("13 stack");

document.body.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("mikrotask from click 1"));
  console.log("stack task from click 1");
});
document.body.addEventListener("click", () => {
  Promise.resolve().then(() => console.log("mikrotask from click 2"));
  console.log("stack task from click 2");
});
//document.body.click(); // WHY ON EARTH WHY?!!!!
