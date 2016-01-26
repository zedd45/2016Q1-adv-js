'use strict';

// lexical scope means items from "outer" scope are accessible to the "inner" scope
// however, items in the "inner" scope are not available to the "outer" scope
// this is how we can "simulate" private variables in JS
// http://stackoverflow.com/questions/1047454/what-is-lexical-scope

let jQuery = this.jQuery ? this.jQuery : {};
let innerVariable = {};

(function ($) {

    // jQuery is available here, but so is it's "alias" ($)
    $.find = function (element) {
        return element && element.children;
    };

    let innerVariable = {
        something: 'something darkside'
    };

    innerVariable.emperor = 'stewie';

})(jQuery);

module.exports = {
    jQuery,
    innerVariable
};
