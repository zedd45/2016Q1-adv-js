module.exports = (function () {

    'use strict';

    const multiply = function (multiplier, ...multiplicand) {

        return multiplicand.map( function (currentValue) {

            return multiplier * currentValue;
        });
    };

    const sum = function (...operands) {

        return operands.reduce( function (previousValue, currentValue) {

            return previousValue + currentValue;
        });
    };

    return {
        multiply,
        sum
    };

})();
