// require something!

describe('Destructuring', function () {


    describe('arrays', function () {

        it('simplifies array => variable assignment for multiple values');

        it('easily swaps values');
    });

    describe('returning values', function () {

        // We've always been able to return Arrays; This creates "named" parameters if accessed via destructuring
        it('allows multiple values to be returned in an expression');

        // this is due to the nature of destructuring to "fail-soft"; similar to standard object lookup foo["bar"], producing undefined values when not found
        it('allows us to omit / ignore some values in the return statement');
    });


    describe('Objects', function () {

        it('allows us to map variables to properties');

        it('allows us to reassign variable names');

        it('allows for parsing function defaults from an object argument');

        it('allows for easy computed property names (dynamic property names in objects)');

    });
});
