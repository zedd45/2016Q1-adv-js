'use strict';

// load our 'main'

const Main = require('../constructor-inheritence.js');
const Animal = Main.Animal;
const Dog = Main.Dog;


// https://github.com/jasmine/jasmine/wiki/Background#enter-jasmine

describe('Animal', function () {

    // try replacing these functions with 'Fat Arrows'
    // http://blog.continuation.io/how-to-abuse-the-fat-arrow/

    beforeEach( function () {

        // http://jasmine.github.io/2.4/introduction.html#section-The_<code>this</code>_keyword
        this.Hippo = new Animal('Hungry, Hungry');
    });

    it('can consume calories', function () {

        this.Hippo.eat({
            name: 'chocolate cake',
            calories: 500
        });

        expect(this.Hippo.calories).toBeGreaterThan(0);
    });
});


describe('Dog', function () {

    beforeEach( function () {

        this.Lassie = new Dog('Lassie');
        spyOn(this.Lassie, 'bark');
    });

    it('can bark', function () {

        // be wary of changing your code so that your tests pass! This can be an advantage of TDD.
        this.Lassie.bark();
        expect(this.Lassie.bark).toHaveBeenCalled();
    });
});
