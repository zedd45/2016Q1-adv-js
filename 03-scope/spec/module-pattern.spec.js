'use strict';

const moduleContents = require('../module-pattern');

describe('Closures (IIFE)', function () {

    it('has private variables that are inaccessible outside of the module', function () {

        expect(moduleContents.privateName).toBeUndefined();
        expect(moduleContents.privateName).toBeUndefined();
    });


    it('has public variables that are available when we `import` (require) a module', function () {

        expect(moduleContents.publicName).toBe('zedd45');
        expect(moduleContents.dollarFormatter).toEqual(jasmine.any(Function));
    });

    it('has private methods that get called by public methods', function () {

        expect(moduleContents.dollarFormatter(300.258)).toBe('$300.26');
    });

    it('rounds up any fractional number to a whole cent, so you and the bank are not mad' , function () {

        expect(moduleContents.dollarFormatter(300.251)).toBe('$300.26');
    });

});
