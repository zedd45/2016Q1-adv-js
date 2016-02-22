'use strict';

const restParams = require('../dist/rest-parameters');


describe('Rest Parameters', function () {

    beforeEach( function () {

        this.multiply = restParams.multiply;
        this.sum = restParams.sum;

        spyOn(this, 'multiply').and.callThrough();
        spyOn(this, 'sum').and.callThrough();
    });

    it('allows us to represent an indefinite number of arguments as an array', function () {

        const result = this.multiply(2, 2, 4, 6, 8);
        expect(result).toEqual([4, 8, 12, 16]);
    });

    // The rest parameter is only valid as the last parameter of a function.
    // http://tc39wiki.calculist.org/es6/rest-parameters/

    it('can be the only parameter, or the last', function () {

        expect(this.sum(1)).toBe(1);
        expect(this.sum(1,2,3)).toBe(1+2+3);
    });

    // in ES6, the rest parameter is not counted towards the function or methods Arity
    // http://tc39wiki.calculist.org/es6/rest-parameters/

    it('calculates the length of the arguments correctly', function () {

        this.sum(2,2);
        this.sum(1,1,1,1);

        expect(this.sum.calls.argsFor(0).length).toBe(2);
        expect(this.sum.calls.argsFor(1).length).toBe(4);
    });

    // another ES6 feature that doesn't translate 1:1 in ES5
    // http://tc39wiki.calculist.org/es6/rest-parameters/ => Evaluation

    it('converts the rest parameter to an array, implicitly', function () {

        this.multiply(1, 2, 3, 4);
        // expect(this.multiply).toHaveBeenCalledWith(1, jasmine.arrayContaining(2,3,4));
        expect(this.multiply).toHaveBeenCalledWith(1,2,3,4);
    });

});
