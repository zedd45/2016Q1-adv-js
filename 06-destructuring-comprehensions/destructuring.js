module.exports = (function () {

    'use strict';

    const fantasyAuthors = ['Terry Goodkind', 'Brandon Sanderson', 'Robert Jordan'];
    const scifiAuthors = ['Robert A. Heinlein', 'Isaac Asimov', 'Michael Crichton'];

    const famousNumbers = {
        pi: Math.pi,
        seven: 7,
        golden: 1.6180339887
    };

    const disassembleArrayES5 = function () {

        // without destructuring we need to create separate assignments for each variable

        const firstAuthor = fantasyAuthors[0];
        const secondAuthor = fantasyAuthors[1];
        const thirdAuthor = fantasyAuthors[2];

        // in ES5, we still can't return the individual items; we'd have to return a set (object or array) of them, anyway.

        return {
            firstAuthor,
            secondAuthor,
            thirdAuthor
        };
    };


    const disassembleArray = () => {

        // you can create the variables prior to the assignment.
        // just remember: they can't be const because const can't be reassigned!
        let firstAuthor, secondAuthor, thirdAuthor;

        // alternative assignment (in-line) as:
        // const [firstAuthor, secondAuthor, thirdAuthor] = fantasyAuthors;
        // and you can use `const` here, since we're not assigning `undefined`!
        [firstAuthor, secondAuthor, thirdAuthor] = fantasyAuthors;

        return {
            firstAuthor,
            secondAuthor,
            thirdAuthor
        };
    };


    // note this only returns the first two values!
    const swapValues = (...rest) => {

        const [first, second] = rest;
        // notice the above assignment didn't create an array, as it may have appeared
        // we still have to wrap these values in an array to return them as a set
        return [second, first];
    };


    const ignoreMiddleAuthor = (arrayOfAuthors) => {

        const [first, ,second] = arrayOfAuthors;
        return [first, second];
    };


    const pickApartObject = () => {

        const { pi, seven, golden } = famousNumbers;

        return [seven, golden, pi];
    };


    const reassignProps = () => {

        const {pi, seven} = famousNumbers;

        return {seven: pi, pi: seven };
    };


    // notice we're using destructing AND defaults here.  Don't you just love how we can mix and match the best of ES6
    // creating really eloquent JavaScript? And you wonder why it's my favorite language!
    // also notice we can use objects as defaults, so we're further "nesting" our statements

    const objectDefaults = function ({color = 'gun metalic', make = 'Nissan', model = 'GT-R', specs = { hp: 545, trim: 'nismo', turbo: 2, engineConfiguration: 'v6'}} = {}) {

        return {
            make,
            model,
            color,
            specs
        };
    };


    return {
        fantasyAuthors,
        scifiAuthors,
        famousNumbers,
        disassembleArray,
        disassembleArrayES5,
        swapValues,
        ignoreMiddleAuthor,
        pickApartObject,
        reassignProps,
        objectDefaults
    };

})();
