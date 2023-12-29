const p1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(" P1 success"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve(" P2 success"), 4000);
});

const p3 = new Promise((resolve, reject) => {
  //setTimeout(() => resolve(" P3 success"), 2000);
  setTimeout(() => reject(" P3 failure"), 2000);
});

Promise.all([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.warn(err);
  });
// P2 Failure

Promise.allSettled([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.warn(err);
  });
[
  { status: "fulfilled", value: "P1 Success" },
  { status: "fulfilled", value: "P2 Success" },
  { status: "rejected", value: "P3 Failure" },
];

Promise.race([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.warn(err);
  });

Promise.any([p3]) // check with p3 only
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.warn(err);
    console.warn(err.errors);
  });

//async;
//async function ALWAYS RETURNS PROMISE

async function getPromise() {
  return "anything"; // still returns promise
}
console.log(getPromise());

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("3 Promise from ASYNC func!");
  }, 1000);
});

const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 Promise from ORDINARY func!");
  }, 1000);
});

setTimeout(() => {
  console.log("1 separate timeout here");
}, 1000);

async function handlePromise() {
  console.log("first line before async promise");
  const res = await p;
  console.log("3 console.log from async func");
  console.log(res);
}
noAsync();
handlePromise();

function noAsync() {
  pr.then((res) => {
    console.log(res);
  });
  console.log("2 console.log from ordinary func");
}
