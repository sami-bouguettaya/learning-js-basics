

let myleads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function() {
    myleads.push(inputEl.value);
    console.log(myleads);
    inputEl.value = "";  // Clear the input field after saving the value
});
