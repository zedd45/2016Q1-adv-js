
// https://github.com/jasmine/jasmine/wiki/Background#enter-jasmine

describe("Animal", function() {

    it("can consume calories", function() {

        expect(true).toBe(true);
    });

    it("can compare have multiple 'assertions' in one block", function() {

        expect(2).toEqual(2);
        expect(1+1).toEqual(2);
    });

    it("can negate a test", function () {

        // note that toBe properly compares with ===.  Why? because == is an expensive conversion
        expect(false).not.toBe(true);
    });
});
