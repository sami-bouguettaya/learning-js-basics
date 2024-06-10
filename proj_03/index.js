

let myleads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function() {
    myleads.push(inputEl.value);
    inputEl.value = "";  
    renderLeads();
});


function renderLeads(){
    let listeItems =""
   for(let i = 0 ; i< myleads.length ; i++){
    // listeItems += "<li><a target='_blank'href='"+ myleads[i]+"'>"+ myleads[i]+" </a> </li>"
    listeItems +=   `<li>
                         <a target='_blank'href='${myleads[i]}'>
                           ${myleads[i]}
                         </a> 
                     </li> 
                     `
     }
       ulEl.innerHTML = listeItems ;
    
} 