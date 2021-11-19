// OLD WAY OF PASSING IN MULTIPLE ARGUMENTS

// function add(nums) {
//     console.log(arguments);

// }

// add(4, 5, 7, 8, 12)

// NEW WAY OF PASSING IN ARGUMENTS (THE REST OPERATOR)
// USED WHEN GOING TO WRITE A FUNCTION AND DON'T KNOW HOW MANY VALUES ARE BEING PASSED IN AS ARGUMENTS - USE THIS

function add( ...nums ) {
    console.log(nums);

}

add(4, 5, 7, 8, 12)