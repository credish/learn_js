// document.getElementById("count-el");
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count=0;


// document.getElementById("increment-btn").addEventListener("click", increment); 

// function increment() {
//     count++;
//     countEl.innerText=count;
// }

document.getElementById("increment-btn").addEventListener("click", function() {
    count+= 1;
    countEl.textContent=count;
}); 

document.getElementById("save-btn").addEventListener("click", function() {
    let entries = " " + count + " - ";
    saveEl.textContent += entries;
    countEl.textContent=0;
    count = 0;
}); 




