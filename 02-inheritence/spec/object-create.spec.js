'use strict';

// load our 'main'

const Main = require('../object-create.js');
const Animal = Main.Animal;
const Dog = Main.Dog;


// https://github.com/jasmine/jasmine/wiki/Background#enter-jasmine

describe('Animal', function () {

    // try replacing these functions with 'Fat Arrows'
    // http://blog.continuation.io/how-to-abuse-the-fat-arrow/

    beforeEach( function () {

        // http://jasmine.github.io/2.4/introduction.html#section-The_<code>this</code>_keyword
        this.Hippo = Object.create(Animal);
        this.Hippo.name = 'Hungry, Hungry';
    });

    it('has a name property', function () {

        expect(this.Hippo.name).toBeDefined();
    });


    it ('should have 0 calories', function () {

        expect(this.Hippo.calories).toBe(0);
    });

    it('can eat a food, and gain calories', function () {

        this.Hippo.eat({
            calories: 100
        });
        expect(this.Hippo.calories).toBeGreaterThan(0);
    });

    it ('should have 0 calories, again', function () {

        expect(this.Hippo.calories).toBe(0);
    });


});


describe('Dog', function () {

    beforeEach( function () {

        this.Doggie = Object.create(Dog);
        this.Doggie.name = 'Puppy';

        spyOn(this.Doggie, 'bark');
    });

    it('can bark', function (){

        // be wary of changing your code so that your tests pass! This can be an advantage of TDD.
        this.Doggie.bark();
        expect(this.Doggie.bark).toHaveBeenCalled();
    });


});
