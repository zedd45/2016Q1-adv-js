'use strict';

class Animal {

    constructor (options) {
        this.name = options.name || 'Odie';
        this.calories = options.calories || 0;
    }

    eat (food) {

        this.calories = this.calories + food.calories;
        return this.calories;
    }
}

// Define a Dog that can bark, and has the same methods and properties of Animal

class Dog extends Animal {

    bark () {

        if (typeof Audio === 'function') {
            let noise = new Audio('http://www.freesfx.co.uk/rx2/mp3s/3/3580_1329340200.mp3');
            if (noise && typeof noise.play === 'function') {
                noise.play();
            }
        }
    }
}


const Jupe = new Dog({
    name: 'Jupiter',
    calories: 1000
});

Jupe.bark();
Jupe.eat({
    name: 'steak',
    calories: 300
});


exports.Animal = Animal;
exports.Dog = Dog;

