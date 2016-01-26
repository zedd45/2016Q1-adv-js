'use strict';

const ScopeExample = require('../scope');
let jQuery = ScopeExample.jQuery;

describe('Lexical Scope', function () {

    it('modifying things within a nested block can affect the outer scope', function () {

        expect(jQuery.find).toEqual(jasmine.any(Function));
    });

    it('outer blocks cannot modify inner block', function () {

        expect(ScopeExample.innerVariable.emperor).toBeUndefined();
    });

});
