const path = new URL(window.location);
console.log(path);
const title = path.pathname.slice(-13).slice(0, -5);

document.getElementsByTagName("h1")[0].textContent = title;
const btn = document.getElementById("btn");
const input = document.getElementsByTagName("input")[0].value;
console.log(input);

function getInput() {
  const input = new URL(window.location).searchParams.get("title");
  const p = document.getElementById("inp");
  p.innerHTML = input;
}
getInput();

//<style>h1{color: red};</style><script>alert(2);</script>
//<iframe src="http://127.0.0.1:5500/"></iframe>

let section = document.getElementById("section");
let h1 = document.getElementById("h1");

let html = new URL(location).searchParams.get("html");
let js = new URL(location).searchParams.get("js");
let css = new URL(location).searchParams.get("css");

section.innerHTML = `<style>${css}</style>${html}`;
function add() {
  console.log("3");
}
eval(js);

//********************************* */
//   inspect element --> Application
//           LOCALSTORAGE

// key-value pair
localStorage.setItem("name", "chipo");
localStorage.setItem("name", "koko"); //overwrite
console.log(localStorage.getItem("name"));
localStorage.removeItem("name");
localStorage.clear();

sessionStorage.setItem("name", "rex");
console.log(sessionStorage.getItem("name"));

//      cookies 🍪
document.cookie = "name=edmundo; expires=" + new Date(2024, 0, 5).toUTCString();
document.cookie = "lastName=jgd; expires=" + new Date(2024, 0, 5).toUTCString();

console.log(document.cookie);

const fruits = { fruit: "peach" };

localStorage.setItem("fruits", JSON.stringify(fruits));
const getFruits = JSON.parse(localStorage.getItem("fruits"));
console.log(getFruits);

function store(name, obj) {
  localStorage.setItem(name, JSON.stringify(obj));
}
function retrieve(name) {
  return JSON.parse(localStorage.getItem(name));
}
