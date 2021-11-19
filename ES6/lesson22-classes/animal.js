export class Animal {
    constructor(type, legs) {
        this.type=type;
        this.legs=legs;
    }

    makeNoise(sound = 'Loud Noise') {
        console.log(sound);
    }

    // static allows us create a function in class where we don't have to create an instance - for using with a large library
    static return10() {
        return 10;
    }
};
