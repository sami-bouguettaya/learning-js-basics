

let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads =leadsFromLocalStorage;
  renderLeads();

}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    
    localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    renderLeads();
});


function renderLeads(){
    let listeItems =""
   for(let i = 0 ; i< myLeads.length ; i++){
    // listeItems += "<li><a target='_blank'href='"+ myLeads[i]+"'>"+ myLeads[i]+" </a> </li>"
    listeItems +=   `<li>
                         <a target='_blank'href='${myLeads[i]}'>
                           ${myLeads[i]}
                         </a> 
                     </li> 
                     `
     }
       ulEl.innerHTML = listeItems ;
    
} 