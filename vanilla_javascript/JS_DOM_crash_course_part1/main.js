// EXAMINE THE DOCUMENT OBJECT
// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);

// SELECTING METHODS TO QUERY DOM

// getELementById
// console.log(document.getELementById('header-title'));
// let headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello'; // More seure does not render as code 
// headerTitle.innerText = 'Goodbye'; // Not as secure - renders as code / style
// headerTitle.innerHTML // Not as secure - renders as code / style
// headerTitle.innerHTML = '<h3>Hello</h3>'; // Puts html into the header-title
// let headerTitle = document.getElementById('header-title');
// headerTitle.style.borderBottom = 'solid 3px black';

// getELementsByClassName

// let items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log([1]);
// // items[1].textContent='Hello 2';
// // items[1].style.fontWeight='bold';
// // items[1].style.backgroundColor='orange';

// let items = document.getElementsByClassName('list-group-item');
// for (let i=0, n=items.length; i < n; i++) {
//     items[i].style.backgroundColor = 'orange';
// };

// getElementsByTagName

// let li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent='Hello 2';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor='orange';


// let items = document.getElementsByTagName('list-group-item');
// for (let i=0, n=li.length; i < n; i++) {
//     li[i].style.backgroundColor = 'orange';
// }


// querySelector - used for one item - only grabs first one
// let header = document.querySelector('li'); // in jquery it's let header = $()
// let header = document.querySelector('.header');
// let header = document.querySelector('#main-header');
// header.style.borderBottom = '4px solid blue';

// let header = document.querySelector('#main-header');
// let input = document.querySelector('input');
// input.value = 'Hello World';

// let submit = document.querySelector('input[type="submit"]');
// submit.value="SEND";

// let item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

// querySelectorAll - used for multiple

let titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

let odd = document.querySelectorAll('li:nth-child(odd)');
let even = document.querySelectorAll('li:nth-child(even)');
for (let i=0, n=odd.length; i<n; i++){
    odd[i].style.backgroundColor = '#ccc';
    even[i].style.backgroundColor = 'purple';
};

