'use strict';

module.exports = (function () {

    const publicName = 'zedd45';
    // have lint ignore this for sake of discussion private vs public
    const privateName = 'Chris Keen'; /* eslint no-unused-vars: 0 */

    const dollarFormatter = function (number) {

        let money = roundOff(number);
        return '$' + money;
    };

    const roundOff = function (number) {

        // round any number to two decimal places, taking the ceiling
        // as no bank would ever let you just "drop" a 100th of a cent :)
        return Math.ceil( number * 100) / 100;
    };

    // "Revealing" Module Pattern
    // https://toddmotto.com/mastering-the-module-pattern/#revealing-module-pattern

    return {
        publicName,
        dollarFormatter
    };

})();
