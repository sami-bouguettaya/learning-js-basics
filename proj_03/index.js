let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads =leadsFromLocalStorage 
     render(myLeads) ;
}


function render(leads){
  let listeItems =""
  for(let i = 0 ; i< leads.length ; i++){
  listeItems +=   `<li>
                       <a target='_blank'href='${leads[i]}'>
                         ${leads[i]}
                       </a> 
                   </li>`
  }
     ulEl.innerHTML = listeItems 
}


deleteBtn.addEventListener("click", function(){
  localStorage.clear()
  myLeads = []
  render(myLeads)
})


inputBtn.addEventListener("click", function() {
       myLeads.push(inputEl.value);
       inputEl.value = ""
    
        localStorage.setItem("myLeads" , JSON.stringify(myLeads))
      render(myLeads)
})

tabBtn.addEventListener("click" , function(){

  chrome.tabs.query({active : true ,currentWindow:true},function(tabs){    
     myLeads.push(tabs[0].url)
     localStorage.setItem("myLeads" , JSON.stringify(myLeads))
    render(myLeads)

   })

})

