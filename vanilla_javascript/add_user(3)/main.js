const myForm = document.querySelector('#my-form');
const msg = document.querySelector('.msg');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput); // This will display <intput type="text" id="name">
    // console.log(nameInput.value); // This will display what actually is inputted into box
    if (nameInput.value === '' || emailInput.value === ''){
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        userList.appendChild(li);

        // Clear the fields
        nameInput.value = '';
        emailInput.value = '';
    }
}
