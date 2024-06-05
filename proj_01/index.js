// document.getElementById("count-el").innerText=5 ;

let count = 0;
let countEl = document.getElementById("count-el");

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0
  countEl.textContent=count
}
