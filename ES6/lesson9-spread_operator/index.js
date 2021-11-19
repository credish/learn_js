// ARRAYS

// let contacts = ["Mary", "Joel", "Danny"];

// let personalFriends = [ "David", ...contacts, "Lily" ];
// contacts.push('John');
// console.log(contacts);
// console.log(personalFriends);


// OBJECTS

let person = {
    name: 'Adam',
    age: 25,
    city: 'Manchester'
};

let employee = { 
    ...person,
    salary: 50000,
    position: 'Software Developer'
 };

 console.log(employee);