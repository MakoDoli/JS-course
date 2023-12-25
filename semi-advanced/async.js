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
document.body.click(); // WHY ON EARTH WHY?!!!!

console.log("main stack synchronous");
Promise.resolve().then(() => console.log("I was promised"));
const longArr = Array.from({ length: 1000 }, () => "item"); //need many 0
console.log("again main stack");

const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);
const codeBlocker = () => {
  // let i = 0;
  // while (i < 1000000) {
  //   i++;
  // }
  // return "Array done";
  //   return new Promise((resolve, reject) => {
  //     let i = 0;
  //     while (i < 1000000) {
  //       i++;
  //     }
  //     resolve("Array done");
  //   });

  return Promise.resolve().then((v) => {
    let i = 0;
    while (i < 1000000000) {
      i++;
    }
    return "Array done";
  });
};

log("Synchronous 1 1️⃣");
codeBlocker().then(log);
log("Synchronous 1 2️⃣");

const getFruit = async (name) => {
  const fruits = {
    apple: "🍏",
    grapes: "🍇",
    cherry: "🍒",
  };
  return Promise.resolve(fruits[name]);
};

getFruit("cherry").then(console.log);

const makeSmoothie = async () => {
  const a = await getFruit("grapes");
  const b = await getFruit("apple");
  return [a, b];
};
const makeSmoothie2 = () => {
  let a;
  return getFruit("grapes").then((res) => {
    res = a;
    return getFruit("apple").then((res) => [res, a]);
  });
};
//********************************* */

//    PROMISES 🤞

const GITHUB_API = "https://api.github.com/users/MakoDoli";

const user = fetch(GITHUB_API);
console.log(user);
user.then((data) => console.log(data));

createOrder(cart, function (oderId) {
  proceedToPayment(orderid, function (paymentinfo) {
    showOrderSummary(paymentinfo, function (summary) {
      updateWalletBallance();
    });
  });
});

createorder(cart)
  .then((odredId) => proceedToPayment(orderId))
  .then((paymentInfo) => showOrderSummary(paymentInfo))
  .then(function (summary) {
    return updateWalletBallance(ummary);
  }); // RETURN!!! object from function or use arrow function to return
