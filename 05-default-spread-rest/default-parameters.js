module.exports = (function () {

    'use strict';

    // show ES5 way here
    const oldGreeting = function (name) {

        let greetingSuffix = arguments[0] === undefined ? 'es5' : name;

        if (typeof greetingSuffix === 'function') {
            greetingSuffix = greetingSuffix();
        }

        return 'Hello, ' + greetingSuffix + '!';
    };

    const greeting = function (name='brave new world') {

        const result = typeof name === 'function' ? name() : name;
        return 'Hello, ' + result + '!';
    };

    const complexSequence = function (noun, pluralNoun = noun + 's', action = 'fire blasters') {

        return [pluralNoun, action].join(' ');
    };

    return {
        greeting,
        oldGreeting,
        complexSequence
    };

})();
