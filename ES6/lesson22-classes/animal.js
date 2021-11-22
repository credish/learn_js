export class Animal {
    constructor(type, legs) {
        this.type=type;
        this.legs=legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`;
    }

    // static allows us create a function in class where we don't have to create an instance - for using with a large library
    static return10() {
        return 10;
    }
};

// export class Cat extends Animal {
//     constructor(type, legs, tail) {
        // calls functions from parent class
//         super(type, legs);
//         this.tail=tail;
//     }
// }

// Can override method - make noise
export class Cat extends Animal {
    makeNoise(sound = "meow") { 
        console.log(sound);
    }
}

