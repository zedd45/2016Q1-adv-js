'use strict';

const defaults = require('../dist/default-parameters');
const greeting = defaults.greeting;
const oldGreeting = defaults.oldGreeting;
const complexSequence = defaults.complexSequence;

describe('Default Parameters', function () {

    it('uses the default value if one if not supplied', function () {

        expect(greeting()).toEqual('Hello, brave new world!');
        expect(oldGreeting()).toEqual('Hello, es5!');
    });

    it('overrides the default value with the supplied one', function () {

        const greetingSuffix = 'your name here';
        const matcher = /your name here!$/; // ES6 template strings?

        expect(greeting(greetingSuffix)).toMatch(matcher);
        expect(oldGreeting(greetingSuffix)).toMatch(matcher);
    });

    // https://leanpub.com/understandinges6/read#leanpub-auto-functions-with-default-parameter-values
    // make sure when passing a function you are passing what you intended: a function reference, or the result of a function

    it('allows functions to be the default value', function (){

        const matcher = 'Coruscant!';
        const myGreeting = () => {

            return 'Coruscant';
        };

        expect(greeting(myGreeting)).toMatch(matcher);
        expect(oldGreeting(myGreeting)).toMatch(matcher);
    });

    it('allows parameters earlier in the function definition to be used in later parameters', function () {

        expect(complexSequence('Stormtrooper')).toEqual('Stormtroopers fire blasters');
        expect(complexSequence('Star Destroyer', undefined, 'fire Turbolasers')).toEqual('Star Destroyers fire Turbolasers');
    });
});
