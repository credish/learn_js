// import { Animal } from './animal.js';

// let cat = new Animal('Cat', 4);

// cat.legs = 3;
// cat.makeNoise();
// cat.makeNoise('Meow');

// console.log(cat);
// console.log(cat.type);
// console.log(cat.legs);

// console.log(Animal.return10());

import { Animal, Cat } from './animal.js';

let cat = new Cat('Cat', 4);

cat.makeNoise();

console.log(cat.metaData);