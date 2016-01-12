'use strict';

// load our 'main'

const Main = require('../index.js');
const Animal = Main.Animal;


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

        expect(this.Hippo.calories).toBeGreaterThan(1);
    });

});
