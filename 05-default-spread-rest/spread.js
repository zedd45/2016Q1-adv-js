module.exports = (function () {

    'use strict';


    const visionaries = ['Jon Resig', 'Eran Hammer', 'Dan Abramov'];
    const celebrities = ['Ryan Reynolds', 'Patrick Stewart', 'Harrison Ford'];
    const characters = ['Deadpool', 'Captain Picard', 'Han Solo'];
    const numbers = [404, 42, 1000, 502, 3.14];


    const visionariesFirst = () => {

        return [...visionaries, ...celebrities];
    };


    const insertionAround = () => {

        return ['Cool', 'People', ...celebrities, 'who', 'are', 'actors'];
    };


    const largestInListES5 = () => {

        // it is also acceptable to supply `null` as the first parameter here; `this` context is not relevant.
        return Math.max.apply(Math, numbers);
    };


    const largestInList = () => {

        return Math.max(...numbers);
    };


    const combineAll = () => {

        return ['all', ...visionaries, 'the', ...characters, 'things', ...celebrities];
    };


    // using "fat arrow" here will not send undeclared arguments (e.g. named parameters)
    const convertToArray = function () {

        return [...arguments];
    };

    return {
        visionaries,
        celebrities,
        characters,
        visionariesFirst,
        insertionAround,
        largestInListES5,
        largestInList,
        combineAll,
        convertToArray
    };

})();
