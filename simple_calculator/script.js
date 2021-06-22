let num1 = 8;
let num2 = 2;
let aButton= document.getElementById("addButton");
let sButton= document.getElementById("subtractButton");
let dButton= document.getElementById("divideButton");
let mButton= document.getElementById("multiplyButton");
let sumEl = document.getElementById("sum-el");

document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;

aButton.addEventListener("click", function(){
  let result=(num1 + num2);
	sumEl.textContent = "Sum: " + result;
});

sButton.addEventListener("click", function(){
	let result=(num1 - num2);
  sumEl.textContent = "Sum: " + result;
});

dButton.addEventListener("click", function(){
  let result=(num1 / num2);
	sumEl.textContent = "Sum: " + result;
});

mButton.addEventListener("click", function(){
  let result=(num1 * num2);
	sumEl.textContent = "Sum: " + result;
});




