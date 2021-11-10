
// object.property
// object.method()

// This shows as a string
// const s1 = 'Hello';
// console.log(typeof s1);

// This shows as an object
// const s2 = new String('Hello');
// console.log(typeof s2);

// console.log(window);
// alert(1);
// console.log(navigator.appVersion);

// object literals w/ properties (AKA Key: Value Pairs)
const book1 = {
    title: 'Book One', 
    author: 'John Doe',
    year: '2013',
    getSummary: function(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}
console.log(book1.title);
