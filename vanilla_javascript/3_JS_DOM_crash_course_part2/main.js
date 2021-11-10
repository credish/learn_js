// TRAVERSING THE DOM

// let itemList = document.querySelector('#items');

// parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'purple';
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

// let itemList = document.querySelector('#items');

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'purple';
// console.log(itemList.parentElement.parentElement);
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes - these are not suggested
// let itemList = document.querySelector('#items');
// console.log(itemList.childNodes);

// children
// let itemList = document.querySelector('#items');
// console.log(itemList.children);
// console.log(itemList.children[1]);

// let itemList = document.querySelector('#items');
// itemList.children[1].style.backgroundColor='yellow';

// FIRSTCHILD
// console.log(itemList.firstChild);

// FIRSTELEMENTCHILD
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// LASTCHILD
// console.log(itemList.lastChild);

// LASTELEMENTCHILD
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';


// NEXTSIBLING
// let input = document.querySelector('input[type="text"]');
// console.log(input.nextSibling);

// NEXTELEMENTCHILD
// console.log(input.nextElementSibling);
// input.nextElementSibling.textContent = 'Hello 4';

// PREVIOUSSIBLING
// let itemList = document.querySelector('#items');
// console.log(itemList.previousSibling);

// PREVIOUSELEMENTCHILD
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'purple';

// Method - createElement

// Create a div
// let newDiv = document.createElement('div');
// adding a class name to the div via JS instead of in HTML
// newDiv.className = 'HELLO';

// adding an id
// newDiv.id = 'HELLO1';

// add attribute
// newDiv.setAttribute('title', 'Hello Div');

// Create text node
// let newDivText = document.createTextNode('Hello World');

// Add text to div
// newDiv.appendChild(newDivText);

// let headerContainer = document.querySelector('header .container');
// let h1 = document.querySelector('header h1');

// headerContainer.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '30px';

// console.log(newDiv); 
