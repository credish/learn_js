const player = {
    name: 'Lebron James',
    club: 'LA Lakers',
    address: {
        city: 'Los Angeles'
    }
};

// Instead of using the .syntax
// console.log( player.address.city );

// The following ways output the same results, the second one is the newer better way
// player.name
// name
// player.club
// club
const { name, club, address: { city } } = player;

// console.log(`${name} plays for ${club}`);

console.log (`${name} lives in ${city}`);