
// console.log(window);
// window top level don't need window.alert(1);
// can just do alert(1);
// within the window is the document - DOM Document Object Model

// SELECTORS
// window
// document

// SINGLE ELEMENT SELECTORS
// assign an element
// const form = document.getElementById('my-form');
// console.log(form);

// console.log(document. getElementById('my-form'));
// console.log(document. querySelector('.container'));
// console.log(document. querySelector('h1'));

// MULTIPLE ELEMENT SELECTORS

// console.log(document. querySelectorAll('.item')); // Recommended to always use this 
// Using getElementsByClassName('item') & getElementsByTagName('li') not recommended for use

// const items = document. querySelectorAll('.item');
// items.forEach(item => {
//     console.log(item);
// });


const ul = document.querySelector('.items');

// can use a lot of methods
// remove
// ul.remove();
// remove the last element child
// ul.lastElementChild.remove();

// change the first element to Hello
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// // Change the Style
// const btn = document.querySelector('.btn');
// btn.style.background = 'red';

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log('click');
//     console.log(e.target);
//     console.log(e.target.className);
//     console.log(e.target.id);
// });

// const btn = document.querySelector('.btn');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     document.querySelector('#my-form').style.background = '#ccc';
//     document.querySelector('body').classList.add('bg-dark');
//     document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
// });

