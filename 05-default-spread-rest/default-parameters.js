module.exports = (function () {

    'use strict';

    // this function is private because we do NOT export it (via the revealing module pattern below)

    const getValueOrDefault = function(currentValue, defaultValue) {

        // http://www.codereadability.com/javascript-default-parameters-with-or-operator/#howtosetdefaultsvaluesinstead

        if (currentValue === undefined) {
            return defaultValue;
        } else {
            return currentValue;
        }
    };


    // ES5 defaults

    const oldGreeting = function (name) {

        const defaultGreeting = 'es5';
        let greetingSuffix = getValueOrDefault(name, defaultGreeting);

        if (typeof greetingSuffix === 'function') {
            greetingSuffix = greetingSuffix();
        }

        return 'Hello, ' + greetingSuffix + '!';
    };


    // ES6 Default Parameters

    const greeting = function (name='brave new world') {

        const result = typeof name === 'function' ? name() : name;
        return 'Hello, ' + result + '!';
    };


    // do not use named parameters here
    // http://stackoverflow.com/questions/156767/whats-the-difference-between-an-argument-and-a-parameter

    const addTwoNumbers = function () {

        // set default values here

        const numbaOne = getValueOrDefault(arguments[0], 0);
        const numbaTwo = getValueOrDefault(arguments[1], 0);

        return numbaOne + numbaTwo;
    };


    const complexSequence = function (noun, pluralNoun = noun + 's', action = 'fire blasters') {

        return [pluralNoun, action].join(' ');
    };

    return {
        greeting,
        oldGreeting,
        addTwoNumbers,
        complexSequence
    };

})();
