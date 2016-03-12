const myModule = require('../src/index');

describe('tests', function () {

    it('can see the exported function', function (){

        expect(myModule.findElements).toEqual(jasmine.any(Function));
    });

    it('i dont know', function () {

        expect(true).toEqual(true);
    });

});
