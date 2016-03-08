'use strict';

const destructuring = require('../dist/destructuring');

describe('Destructuring', function () {

    beforeEach(function () {

        this.fantasyAuthors = destructuring.fantasyAuthors;
        this.scifiAuthors = destructuring.scifiAuthors;
        this.swapValues = destructuring.swapValues;
    });

    describe('arrays', function () {

        it('simplifies array => variable assignment for multiple values', function () {

            const es6Result = destructuring.disassembleArray();
            const es5Result = destructuring.disassembleArrayES5();

            expect(es6Result).toEqual(jasmine.objectContaining({
                firstAuthor: this.fantasyAuthors[0]
            }));

            expect(es5Result).toEqual(jasmine.objectContaining({
                firstAuthor: this.fantasyAuthors[0]
            }));
        });

        it('easily swaps values', function () {

            const pi = Math.PI;
            const prime = 7;


            expect(this.swapValues(pi, prime)).toEqual([prime, pi]);
        });
    });

    describe('returning values', function () {

        // We've always been able to return Arrays; This creates "named" parameters if accessed via destructuring
        it('allows multiple values to be returned in an expression', function () {

            expect(this.swapValues(1,2).length).toEqual(2);
        });

        // this is due to the nature of destructuring to "fail-soft"; similar to standard object lookup foo["bar"], producing undefined values when not found
        it('allows us to omit / ignore some values in the return statement', function () {

            const fewerAuthors = destructuring.ignoreMiddleAuthor(this.scifiAuthors); // Isaac; just an example :)
            const middleAuthor = this.scifiAuthors[1];

            expect(this.swapValues(1,2,3,4,5).length).toEqual(2);
            expect(fewerAuthors.length).toBe(2);
            expect(fewerAuthors).not.toEqual(jasmine.arrayContaining([middleAuthor]));
        });
    });


    describe('Objects', function () {

        it('allows us to map variables to properties');

        it('allows us to reassign variable names');

        it('allows for parsing function defaults from an object argument');

        it('allows for easy computed property names (dynamic property names in objects)');

    });
});
