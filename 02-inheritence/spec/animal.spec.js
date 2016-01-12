'use strict';

// load our 'main'

const Main = require('../index.js');
const Animal = Main.Animal;


// https://github.com/jasmine/jasmine/wiki/Background#enter-jasmine

describe('Animal', function() {

    // just try using Fat Arrow here...

    beforeEach( function () {

        this.Hippo = new Animal('Hungry, Hungry');
    });

    it('can consume calories', function() {

        this.Hippo.eat({
            name: 'chocolate cake',
            calories: 500
        });

        expect(this.Hippo.calories).toBeGreaterThan(1);
    });

});
