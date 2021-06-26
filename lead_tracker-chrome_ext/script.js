let myLeads=[];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value);
    inputEl.value="";
    renderLeads();
});

function renderLeads () {
    let listItems="";
    for (let i = 0, n = myLeads.length; i < n; i++){
        // listItems += "<li><a target='_blank' href=' " + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        //Template String
         listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>  
                    ${myLeads[i]}
                </a>
            </li>`;
        // This is an alternative way to do the previous line ulEl.innerHTML += "<li>" + myLeads[i] + "</li>";
        // const li = document.createElement("li");
        // li.textContent = myLeads[i];
        // ulEl.append(li);
        
    }

    ulEl.innerHTML = listItems;
}




