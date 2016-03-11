'use strict';

const destructuring = require('../dist/destructuring');

describe('Destructuring', function () {

    beforeEach(function () {

        this.fantasyAuthors = destructuring.fantasyAuthors;
        this.scifiAuthors = destructuring.scifiAuthors;
        this.famousNumbers = destructuring.famousNumbers;
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

    describe('returning & evaluating values', function () {

        // We've always been able to return Arrays; This creates "named" parameters if accessed via destructuring
        it('allows multiple values to be returned in an expression', function () {

            expect(this.swapValues(1,2).length).toEqual(2);
            expect(this.swapValues().length).toEqual(2);  // why might this be?  See next test.
        });

        // this is due to the nature of destructuring to "fail-soft"; similar to standard object lookup foo["bar"], producing undefined values when not found
        it('allows us to omit / ignore some values in the return statement', function () {

            const fewerAuthors = destructuring.ignoreMiddleAuthor(this.scifiAuthors); // Isaac; just an example :)
            const middleAuthor = this.scifiAuthors[1];

            expect(this.swapValues(1,2,3,4,5).length).toEqual(2);
            expect(fewerAuthors).not.toEqual(jasmine.arrayContaining([middleAuthor]));
        });

        it('is "fail-soft," meaning if the value cannot be found on the right side of the expression, the variable on the left is equal to undefined', function () {

            expect(this.swapValues()).toEqual([undefined, undefined]);
            expect(this.swapValues(1)).toEqual([undefined, 1]);
        });
    });


    describe('Objects', function () {

        it('allows us to map variables to properties', function () {

            expect(destructuring.pickApartObject()).toEqual([this.famousNumbers.seven, this.famousNumbers.golden, this.famousNumbers.pi]);
        });

        it('allows us to reassign variable names', function () {

            expect(destructuring.reassignProps()).toEqual(jasmine.objectContaining({
                pi: this.famousNumbers.seven
            }));
        });

        it('allows for parsing function defaults from an object argument', function () {

            const carConfig = {
                make: 'Porche',
                model: '911 GT3',
                specs: { hp: 475, engineConfiguration: 'flat6' }
            };

            expect(destructuring.objectDefaults()).toEqual(jasmine.objectContaining({
                model: 'GT-R',
                specs: jasmine.any(Object)
            }));

            expect(destructuring.objectDefaults(carConfig)).toEqual(jasmine.objectContaining({
                model: '911 GT3',
                make: 'Porche',
                specs: jasmine.objectContaining({ hp: 475 })
            }));
        });

    });
});
