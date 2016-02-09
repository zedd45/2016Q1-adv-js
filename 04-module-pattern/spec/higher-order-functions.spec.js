'use strict';

const repeat = require('../higher-order-functions').repeat;


describe('Higher Order Function', function () {

    it('uses the result of a function to compute a new function (function operates on another function)', function () {

        let someObject = {

            callback (index) {

                return index;
            }
        };

        spyOn(someObject, 'callback').and.callThrough();
        repeat(5, someObject.callback);

        expect(someObject.callback.calls.count()).toEqual(5);
    });
});
