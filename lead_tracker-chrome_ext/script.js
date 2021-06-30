// Reminders:
// localStorage.setItem(key, value) localStorage.setItem("myLeads", "www.examplelead.com");
// localStorage.getItem(key) console.log(localStorage.getItem("myLeads"));
// localStorage.clear() localStorage.clear("myLeads");
// Both key and value need to be strings

// myLeads=JSON.parse(myLeads);
// myLeads.push("www.awesomelead2.com");
// myLeads=JSON.stringify(myLeads);
// // console.log(typeof myLeads);

// localStorage.setItem("myLeads", JSON.stringify(myLeads));
// var storeMyLeads = JSON.parse(localStorage.getItem("myLeads"));

let myLeads=[];
const inputEl = document.getElementById("input-el");
const tabBtn = document.getElementById("tab-btn");
const inputBtn = document.getElementById("input-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads") );

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

tabBtn.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads) );
        render(myLeads);
    });
});

function render (leads) {
    let listItems="";
    for (let i = 0, n = leads.length; i < n; i++){
        // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        //Template String
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>  
                    ${leads[i]}
                </a>
            </li>`;
        // This is an alternative way to do the previous line ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
        
    }

    ulEl.innerHTML = listItems;
}

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});








