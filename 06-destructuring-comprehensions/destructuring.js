module.exports = (function () {

    'use strict';

    const fantasyAuthors = ['Terry Goodkind', 'Brandon Sanderson', 'Robert Jordan'];
    const scifiAuthors = ['Robert A. Heinlein', 'Isaac Asimov', 'Michael Crichton'];

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

    return {
        fantasyAuthors,
        scifiAuthors,
        disassembleArray,
        disassembleArrayES5,
        swapValues,
        ignoreMiddleAuthor
    };

})();
