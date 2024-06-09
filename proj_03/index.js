

let myleads = ["jejueudud","liytaouy252423", "2kyuftaiytfyf"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myleads.push(inputEl.value);
    console.log(myleads);
    inputEl.value = "";  // Clear the input field after saving the value
});

for(let i = 0 ; i< myleads.length ; i++){
    ulEl.innerHTML += "<li>"+ myleads[i] +"</li>";
}
