// MULTIPLE WAYS OF CALLING AND WRITING FUNCTIONS

// function buttonClick() {
//    console.log('button clicked'); 
// }


// let button = document.getElementById('button').addEventListener('click', function(){
//     console.log('123');
// });

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick() {
//   console.log('Button clicked'); 
//   document.getElementById('header-title').textContent = 'Changed';
//   document.querySelector('#main').style.backgroundColor = 'purple';
// };


// EVENTS

// let button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e) {
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);

//   let output = document.getElementById('output');
//   output.innerHTML = '<h3>' + e.target.id + '</h3>';

//   console.log(e.type);

// console.log(e.clientY); - from window
// console.log(e.clientY);
// console.log(e.offsetX); - from element
// console.log(e.offsetY);

// console.log(e.altKey);
// console.log(e.ctrlKey);
// console.log(e.shiftKey);
// };

// let button = document.getElementById('button');
// let box = document.getElementById('box');

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent); // entered the box
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent); // any elements within the box
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mousemove', runEvent);

// function runEvent(e) {
//     console.log('EVENT TYPE:' +e.type);
//     output.innerHTML = '<h3>MouseX: ' + e.offsetX + '</h3><h3>MouseY:' + e.offsetY + '</h3>';

//     box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
//     document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
// }


// let itemInput=document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// function runEvent(e) {
//   console.log('EVENT TYPE:' +e.type);
//   console.log(e.target.value);
//   document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>';
    
    
// }

// let itemInput=document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// itemInput.addEventListener('focus', runEvent); // click in
// itemInput.addEventListener('blur', runEvent); // click out blur
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('cut', runEvent); 
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// function runEvent(e) {
//     console.log('EVENT TYPE:' +e.type);    
// }

// let itemInput=document.querySelector('input[type="text"]');
// let form = document.querySelector('form');

// let select = document.querySelector('select');

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);

// function runEvent(e) {
//     console.log('EVENT TYPE:' +e.type);   
//     console.log(e.target.value); 
// }

let form = document.querySelector('form');
form.addEventListener('submit', runEvent);

function runEvent(e) {
    e.preventDefault();
    console.log('EVENT TYPE:' +e.type);   
}