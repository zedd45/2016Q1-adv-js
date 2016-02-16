'use strict';

const restParams = require('../dist/rest-parameters');
const multiply = restParams.multiply;
const sum = restParams.sum;


describe('Rest Parameters', function () {

    it('allows us to represent an indefinite number of arguments as an array', function () {

        expect(multiply(2, 2,4 , 6, 8)).toEqual([4,8,12,16]);
    });

    // The rest parameter is only valid as the last parameter of a function.
    // http://tc39wiki.calculist.org/es6/rest-parameters/

    it('can be the only parameter, or the last', function () {

        expect(sum(1)).toBe(1);
        expect(sum(1,2,3)).toBe(1+2+3);
    });

    it('calculates the length of the arguments without the rest parameter');

    it('converts the rest parameter to an array, implicitly', function () {


    });

});
