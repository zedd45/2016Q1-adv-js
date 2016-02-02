'use strict';

const ScopeExample = require('../scope');
let jQuery = ScopeExample.jQuery;

describe('Lexical Scope', function () {

    it('nested blocks (inner scope) can read & affect the outer scope', function () {

        expect(jQuery.find).toEqual(jasmine.any(Function));
    });

    it('outer blocks cannot modify inner block', function () {

        expect(ScopeExample.innerVariable.emperor).toBeUndefined();
    });

});
