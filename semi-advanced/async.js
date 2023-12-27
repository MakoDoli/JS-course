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
  Promise.resolve().then(() => console.log("mikrotask from click 2-------"));
  console.log("stack task from click 2");
});
document.body.click(); // WHY ON EARTH

//********************************** */
// console.log("main stack synchronous");
// Promise.resolve().then(() => console.log("I was promised"));
// const longArr = Array.from({ length: 1000 }, () => "item"); //need many 0
// console.log("again main stack");

// const tick = Date.now();
// const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);
// const codeBlocker = () => {
//   // let i = 0;
//   // while (i < 1000000) {
//   //   i++;
//   // }
//   // return "Array done";
//   //   return new Promise((resolve, reject) => {
//   //     let i = 0;
//   //     while (i < 1000000) {
//   //       i++;
//   //     }
//   //     resolve("Array done");
//   //   });

//   return Promise.resolve().then((v) => {
//     let i = 0;
//     while (i < 1000000000) {
//       i++;
//     }
//     return "Array done";
//   });
// };

// log("Synchronous 1 1️⃣");
// codeBlocker().then(log);
// log("Synchronous 1 2️⃣");

// const getFruit = async (name) => {
//   const fruits = {
//     apple: "🍏",
//     grapes: "🍇",
//     cherry: "🍒",
//   };
//   return Promise.resolve(fruits[name]);
// };

// getFruit("cherry").then(console.log);

// const makeSmoothie = async () => {
//   const a = await getFruit("grapes");
//   const b = await getFruit("apple");
//   return [a, b];
// };
// const makeSmoothie2 = () => {
//   let a;
//   return getFruit("grapes").then((res) => {
//     res = a;
//     return getFruit("apple").then((res) => [res, a]);
//   });
// };
// //********************************* */

// //    PROMISES 🤞

// const GITHUB_API = "https://api.github.com/users/MakoDoli";

// const user = fetch(GITHUB_API);
// console.log(user);
// user.then((data) => console.log(data));

// // createOrder(cart, function (oderId) {
// //   proceedToPayment(orderid, function (paymentinfo) {
// //     showOrderSummary(paymentinfo, function (summary) {
// //       updateWalletBallance();
// //     });
// //   });
// // });

// // createorder(cart)
// //   .then((odredId) => proceedToPayment(orderId))
// //   .then((paymentInfo) => showOrderSummary(paymentInfo))
// //   .then(function (summary) {
// //     return updateWalletBallance(ummary);
// //   }); // RETURN!!! object from function or use arrow function to return

// //***************************** */
// // PROMISE object is IMMUTABLE

// // const fetchData = async () => {
// //   try {
// //     const response = await fetch("https://api.ninjaimages.com/data");
// //     const data = await response.json();
// //     console.log(data);
// //     return data; // Output: returns the fetched data
// //   } catch (error) {
// //     console.log(error); // Output: returns the error message
// //   }
// // };
// // fetchData();
// //****************************************** */

// // const posts = [
// //   { title: "Post one", body: "This is post one" },
// //   { title: "Post two", body: "This is post two" },
// // ];

// // function getPosts() {
// //   setTimeout(function () {
// //     let output = "";
// //     posts.forEach((post) => {
// //       output += `<li>${post.title}</li>`;
// //     });
// //     document.body.innerHTML = output;
// //   }, 1000);
// // }

// // function createPost(post, callback) {
// //   setTimeout(() => {
// //     posts.push(post);
// //     callback();
// //   }, 2000);
// // }
// // getPosts();

// // createPost({ title: "Post three", body: "This is post three" }, getPosts);

// const posts = [
//   { title: "Post one", body: "This is post one" },
//   { title: "Post two", body: "This is post two" },
// ];

// function getPosts() {
//   setTimeout(function () {
//     let output = "";
//     posts.forEach((post) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);
//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject(`Error: Something went wrong`);
//       }
//     }, 2000);
//   });
// }
// getPosts();
// init();

// // createPost({ title: "Post three", body: "This is post three" })
// //   .then(getPosts)
// //   .catch((err) => console.log(err));

// // async await

// async function init() {
//   await createPost({ title: "Post three", body: "This is post three" });
//   getPosts();
// }

// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = await res.json();
//   console.log(data);
// }
// fetchUsers();
// //************************************* */

// // const promise1 = Promise.resolve("Hello world");
// // const promise2 = 20;
// // const promise3 = new Promise((resolve, reject) =>
// //   setTimeout(resolve, 2000, "Goodbye")
// // );
// // const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
// //   (res) => res.json()
// // );

// // Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
// //   console.log(values)
// // );

// //***************************** */
// //  create Promises

// const cart2 = ["chocos", "coffee", "ice-cream"];
// const promiseAgain = createOrder(cart2);
// console.log(promiseAgain);

// promiseAgain
//   .then((orderId) => {
//     //   proceedToPayment(orderId);
//     console.log(orderId);
//     return orderId;
//   })
//   .then((orderId) => {
//     return proceedToPayment(orderId);
//   })
//   .then((paymentInfo) => console.log(paymentInfo))
//   .catch((err) => {
//     console.log(err.message);
//   }); // ERROR HANDLING

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     //get orderId dunno from where
//     const orderId = "34567";
//     if (orderId) {
//       resolve(orderId);
//     }
//   });
//   return pr;
// }

// function proceedToPayment(orderId) {
//   return new Promise((resolve, reject) => {
//     resolve(orderId + " Payment successful");
//   });
// }

// function validateCart(cart) {
//   return cart.length;
// }

//******************** */
//      fetch API

//-------------------------------

// const url = "https://jsonplaceholder.typicode.com/users";

// function getData() {
//   // fecth returns response!
//   fetch(url)
//     .then((res) => {
//       if (!res.ok) throw new Error("not a valid response");
//       return res.json(); // extracts json string and converts to object
//     })
//     .then((dataObj) => {
//       console.log(dataObj);
//     })
//     .catch((err) => {
//       console.log(err.message);
//     });
// }
//----------------------------
// const url = "https://jsonplaceholder.typicode.com/users";

// async function getData(url) {
//   try {
//     let response = await fetch(url);
//     if (!response.ok) throw new Error("not valid");
//     let dataObj = await response.json();
//     console.log(dataObj);
//   } catch (err) {
//     console.warn(err.message);
//   }
// }
// getData(url);

//---------------------------

// const str = "https://jsonplaceholder.typicode.com/users";

// function getData() {
//   const url = new URL(str);
//   console.log(url); // url is object

//   const request = new Request(url, {
//     headers: { "x-steve": "hello" },
//     method: "GET",
//     cache: "no-store",
//   });
//   // fetch will work with any of them: str,url, request
//   fetch(request)
//     .then((res) => {
//       if (!res.ok) throw new Error("smth wrong");
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.warn(err.message);
//     });
// }
// getData();

//------------------------------

const imgStr = "https://picsum.photos/seed/picsum/200/300";
const txtStr = "http://127.0.01:5500";

// HTTP Request --- HEAD, BODY
// HTTP Response ---HEAD, BODY
let obj = {
  id: crypto.randomUUID(),
  name: "The one who knocks on heaven door",
  favColor: "blue",
};

function getData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .then((dataArray) => {
      console.log(dataArray);
      const section = document.getElementsByTagName("section")[0];
      section.innerHTML = dataArray
        .splice(0, 5)
        .map(({ id, name }) => {
          return `<li data-uid=${id}></li>
            <p>${name}`;
        })
        .join();
    });

  fetch(txtStr)
    .then((txt) => {
      if (!txt.ok) throw new Error("no text");

      return txt.text();
    })
    .then((txt) => {
      console.log(txt);
    })
    .catch(console.warn);

  // get image from url
  fetch(imgStr)
    .then((res) => {
      if (!res.ok) throw new Error("no such img");
      return res.blob(); //binary large object-media
      //res.text(); //text, html
      //res.json(); //json files
      //res.blobl(); // images, video, audio, fonts
    })
    .then((blob) => {
      console.log(blob);
      let srcURL = URL.createObjectURL(blob);
      let img = document.getElementById("random-img");
      img.src = srcURL;
      console.log(srcURL);
    })
    .catch(console.warn);

  let jsonString = JSON.stringify(obj);
  console.log(jsonString);
  let file = new File([jsonString], "mydata.json", {
    type: "application/json",
  });

  let response = new Response(file, {
    status: 200,
    statusText: "Say smth",
    headers: {
      "content-type": "application/json",
      "content-length": file.size,
      "x-steve": "starts with x for custom header name",
    },
  });
  console.log(response);
  console.log(response.headers.get("x-steve"));
}
getData();
