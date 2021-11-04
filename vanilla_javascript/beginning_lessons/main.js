// JS CONCATENATING
// Concatenating using plus symbols
    // console.log ('My name is ' + name + ' I am ' + AbstractRange + '.');
// Concatenating using template strings
    // console.log (`My name is ${name} and I am ${age}`);

// METHODS
// .length
// .toUpperCase
// .toLowerCase
// .substring(start, end) // .substring(0, 5)
// . substring(start, end).toUpperCase()
// .split('')

// ARRAYS
    // const numbers = new Array (1,2,3,4,6);
    // const fruits = ['apples', 'oranges', 'pears'];
    // console.log[1]

    // fruits[3] = 'grapes'
    // console.log(fruits);

    // fruits.push(‘mangoes’);
	// fruits.unshift(‘strawberries’);
	// fruits.pop();
	// console.log(Array.isArray(fruits));
	// console.log(fruits.indexOf(‘oranges’));

// OBJECT LITERALS
	// const person = {
	// 	firstName: 'John',
    //     lastName: 'Doe',
    //     age: 30,
    //     hobbies: ['music', 'movies', 'sports'],
    //     address: {
    //         street: '50 main st',
    //         city: 'Boston',
    //         state: 'MA'
    //     }
    // }

    // console.log(person);
    // console.log(person.firstName);
    // console.log(person.firstName, person.lastName);
    // console.log(person.hobbies[1]);
    // console.log(person.address.city);

    // const {firstName, lastName, address: { city }} = person;
    // console.log(city);

    // person.email = 'john@gmail.com';
    // console.log(person);

    // const todos = [
    //     {
    //         id:1,
    //         text: 'Take out trash',
    //         isCompleted: true
    //     },
    //     {
    //         id:2,
    //         text: 'Meeting w/ Boss',
    //         isCompleted: true
    //     },
    //     {
    //         id:3,
    //         text: 'Dentist appt',
    //         isCompleted: false
    //     }
    // ];

    // console.log (todos);
    // console.log(todos[1].text);

//JSON
// Json Formatter  https://jsonformatter.curiousconcept.com/
// No single quotes in JSON

// const todoJSON = JSON.stringify(todos);
// conole.log(todoJSON);


// const todos = [
//         {
//             id:1,
//             text: 'Take out trash',
//             isCompleted: true
//         },
//         {
//             id:2,
//             text: 'Meeting w/ Boss',
//             isCompleted: true
//         },
//         {
//             id:3,
//             text: 'Dentist appt',
//             isCompleted: false
//         }
//     ];

// FOR LOOPS
//  for (let i=0, n=todos.length; i < n; i++){
//      console.log(i);
//      console.log(`For Loop Number ${i}`);
//  }

// WHILE LOOPS
// let i=0;
// n=todos.length;
// while (i < n) {
//     console.log(`While Loop Number ${i}`);
//     i++;
// }

// FOR LOOPS
//  for (let i=0, n=todos.length; i < n; i++){
//      console.log(todos[i].text);
//  };

// FOR OF
// for (let todo of todos) {
//     console.log(todo.id);
//     console.log(todo.text);
//     console.log(todo.isCompleted);
// }

// HIGH ORDER ARRAY METHODS

// const todos = [
//     {
//         id:1,
//         text: 'Take out trash',
//         isCompleted: true
//     },
//     {
//         id:2,
//         text: 'Meeting w/ Boss',
//         isCompleted: true
//     },
//     {
//         id:3,
//         text: 'Dentist appt',
//         isCompleted: false
//     }
// ];

// FOREACH - loops through array - multiple ways to write
// todos.forEach(function(todo) {
//     console.log(todo.text);
// });

// todos.forEach(todo => {
//     console.log(todo.text);
// });


// MAP - create new array from array
// const toDoText = todos.map(function(todo) {
//     return todo.text;
// });

// console.log (toDoText);

// FILTER - create new array based on a condition
// const toDoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// });

// console.log (toDoCompleted);

// const toDoCompleted = todos.filter(function(todo) {
//     return todo.isCompleted === true;
// }).map(function(todo) {
//     return todo.text;
// });

// console.log (toDoCompleted);

// CONDITIONALS
    // const x = 10;
    // if(x === 10) {
    //     console.log('x is 10');
    // };

    // const x = 10;
    
    // if(x === 10) {
    //     console.log('x is 10');
    // }
    // else if (x > 10) {
    //     console.log('x is greater than 10');
    // }
    // else {
    //     console.log('x is less than 10');
    // };

    // const x = 10;
    // const y = 11;

    // one or the other has to be true
    
    // if(x > 5 || y > 10) {
    //     console.log('x is more than 5 or y is more than 10');
    // }

    // const x = 10;
    // const y = 11;

    // // both have to be true
    
    // if(x > 5 && y > 10) {
    //     console.log('x is more than 5 or y is more than 10');
    // }

    // TERNARY OPERATOR
    // const x = 11;

    // // If x is greater than 10, then (?=then) color is red, else (: = else) color is blue
    // const color =  x > 10 ? 'red' : 'blue';
    // console.log(color);

    // SWITCHES
    //  const x = 11;

    // If x is greater than 10, then (?=then) color is red, else (: = else) color is blue
    // const color =  x > 10 ? 'red' : 'blue';
    // switch(color) {
    //     case 'red':
    //         console.log('color is red');
    //         break;
    //     case 'blue':
    //         console.log('color is blue');
    //         break;
    //     default:
    //         console.log('color is not red or blue');
    // }

    // FUNCTIONS
    // Multiple ways to write functions
    // function addNums(num1, num2) {
    //     return num1 + num2
    // }

    // // addNums(5,4);
    // console.log(addNums(5,5));

    // ES6 Version
    // const addNums = (num1, num2) => {
    //     return num1 + num2;
    // } 

    // console.log(addNums(5,5));

    // const addNums = (num1, num2) => num1 + num2;
    
    // console.log(addNums(5,5));

    // todos.forEach((todo) => console.log(todo));

// OBJECT ORIENTED PROGRAMMING
// CONSTRUCTOR FUNCTIONS W/ PROTOTYPES & ES6 CLASSES
// PROTOTYPES
// Constructors should have capitalized letter 
// Pass in properties you want to set
// Set the properties of the object
// function Person(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     //this.dob = dob; - will show what you have added under dob 11-12-1983
//     this.dob = new Date(dob); // will show Fri Nov 06 1981 00:00:00 GMT-0500 (Eastern Standard Time)
// ;}

// // Instantiate the Object with constructor function
// const person1 = new Person('Celeste', 'Stamper', '12-11-1983');
// const person2 = new Person('Ramsez', 'Stamper', '11-06-1981');

// console.log(person1.dob);

// console.log(person2.dob.getFullYear());

// Can add methods to this.Person object
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    //this.dob = dob; - will show what you have added under dob 11-12-1983
    this.dob = new Date(dob); // will show Fri Nov 06 1981 00:00:00 GMT-0500 (Eastern Standard Time)
    this.getBirthYear = function() {
        return this.dob.getFullYear();
    }
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
;}
    
    // Instantiate the Object with constructor function
    const person1 = new Person('Celeste', 'Stamper', '12-11-1983');
    const person2 = new Person('Ramsez', 'Stamper', '11-06-1981');
    
    // console.log(person1.dob);
    // console.log(person2.dob.getFullYear());

    console.log(person1.getBirthYear());
    console.log(person1.getFullName());


















