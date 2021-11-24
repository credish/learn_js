const exampleSet = new Set([1,1,1,1,2,2,2,2]);

exampleSet.add(5);

// can chain them
exampleSet.add(5).add(17);

exampleSet.clear();

// can delete
console.log(exampleSet.delete(5));

console.log(exampleSet.has(5));

console.log(exampleSet);
console.log(exampleSet.size);

// set is iterable can use for each and for of


