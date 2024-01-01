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
