// const leadSinger = () => {
//     console.log("Chris Martin is the lead singer of Cold Play");
// }

// leadSinger();

// const leadSinger = (artist) => {
//     console.log(`${artist} is the lead singer of Cold Play`);
// }

// leadSinger('Christ Martin');


// What if you don't pass a value to leadsinger - use default parameters example 'someone'
const leadSinger = (artist='Someone') => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

// leadSinger('Chris Martin');
leadSinger();