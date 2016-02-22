'use strict';

const spread = require('../dist/spread');


describe('Spread Operator', function () {

    beforeEach( function () {

        this.celebrities = spread.celebrities;
        this.visionaries = spread.visionaries;
        this.characters = spread.characters;
    });

    it('allows an expression to be expanded in places where multiple arguments (for function calls) or multiple elements (for array literals) are expected', function () {

        const sortedPeople = spread.visionariesFirst();
        const actorString = spread.insertionAround().join(' ');

        // why concat? because `Array.prototype.push.apply` is not pure; it operates on the instance passed to it
        expect(sortedPeople).toEqual(this.visionaries.concat(this.celebrities));
        expect(actorString).toMatch(new RegExp('^cool people ' + this.celebrities.join(' ') + ' who are actors$', 'i'));
    });

    it('is a more concise replacement for `apply` in some use cases', function () {

        expect(spread.largestInList()).toEqual(1000);
        expect(spread.largestInListES5()).toEqual(1000);
    });

    it('can assemble multiple arrays inline', function () {

        const combinedResult = spread.combineAll();

        expect(combinedResult).toEqual(jasmine.arrayContaining(this.celebrities));
        expect(combinedResult).toEqual(jasmine.arrayContaining(this.visionaries));
        expect(combinedResult).toEqual(jasmine.arrayContaining(this.characters));
        expect(combinedResult).toEqual(jasmine.arrayContaining(['all', 'the', 'things']));
    });

    // this includes DOM elements / references retrieved by `document.querySelector`
    it('will convert "array like" values to arrays', function () {

        const arrayOfArgs = spread.convertToArray(1,2,3);
        expect(arrayOfArgs.map).toEqual(jasmine.any(Function));
        expect(arrayOfArgs).toEqual(jasmine.arrayContaining([1,2,3]));
    });
});
