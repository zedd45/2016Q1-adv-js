'use strict';

module.exports = (function () {

    const repeat = function (times, callback) {
        for (let i = 0; i < times; i++) {
            callback(i);
        }
    };

    return { repeat };

})();
