'use strict';

// Hungarian notation! Just for kicks.
// https://en.wikipedia.org/wiki/Hungarian_notation

const DEFAULT_CAL = 0;
let Jupiter = null;

(function (Jupe, startingCalories) {

    'use strict';

    // we use Capital letters to denote (ES5) 'Classes' by convention
    const Animal = function (name) {

        // the lines below define instance properties;
        // these will be set when a new Animal is created

        this.firstName = name;  // name is reserved for functions, which `this` is pointing to one such
        this.calories = startingCalories;

        this.eat = function (food) {

            this.calories = this.calories + food.calories;
        };
    };

    // Define a Dog that can bark, and has the same methods and properties of Animal

    const Dog = function (name) {

        // call the 'constructor' of Animal
        Animal.call(this, name);

        this.bark = function () {

            if (!module.parent){
                console.log('woof'); // eslint-disable-line no-console
            }
        };
    };

    // In order for Dog to `inherit` from Animal, we need to set Dog's prototype to Animal
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#Inheritance_with_the_prototype_chain

    Dog.prototype = Animal;

    // Create an `instance` of a dog, named after the coolest one in the universe (IMHO)

    Jupe = new Dog('Jupiter');

    Jupe.bark();
    Jupe.eat({
        name: 'steak',
        calories: 300
    });

    if (!module.parent) {
        // why isn't this private?
        console.log(Jupe.calories); // eslint-disable-line no-console
    }

    // define / declare exports (for testing etc)

    exports.Animal = Animal;
    exports.Dog = Dog;


})(Jupiter, DEFAULT_CAL);
