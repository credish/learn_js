//function declaration
// function breakfastMenu() {
//     return "I'm going to scrambled eggs for breakfast";
// }

//function declaration using arrow function
const breakfastMenu = () => {
    return "I'm going to scrambled eggs for breakfast";
}

// //anonymous function
// const lunchMenu = function() {
//     return "I'm going to eat pizza for lunch";
// }

//anonymous function
const lunchMenu = () => {
    return "I'm going to eat pizza for lunch";
}

// const dinnerMenu = (food) => {
//     return `I'm going to eat a ${food} for dinner`;
// }

// Shorten function if only one parameter can delete the () and also delete the return  or other keyword & {}
const dinnerMenu = food => `I'm going to eat a ${food} for dinner`;

console.log(breakfastMenu());
console.log(lunchMenu());
console.log( dinnerMenu("chicken salad"));