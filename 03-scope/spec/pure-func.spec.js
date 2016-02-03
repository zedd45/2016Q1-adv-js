'use strict';

const PureFunc = require('../pure-functions');

let fruits = PureFunc.fruits;
let people = PureFunc.people;
let filterMyFavoriteFruit = PureFunc.filterMyFavoriteFruit;
let addPeople = PureFunc.addPeople;

describe('Pure Function', function () {

    it('adding a new person does not modify the original data structure', function () {

        const EranHammer = {
            'name': 'Eran Hammer',
            'Twitter': '@eranhammer'
        };

        const newPeople = addPeople(people, EranHammer);

        expect(people.length).toBe(1);
        expect(newPeople.length).toBeGreaterThan(1);
        expect(newPeople[1]).toEqual(EranHammer);
    });

    it('pruning fruits does not modify the original data structure', function () {

        const numberOfFruits = fruits.length;
        const myFavoriteFruit = fruits[4];
        let filteredFruits = filterMyFavoriteFruit(fruits, myFavoriteFruit);

        // check that the original fruits is unmodified
        expect(fruits.length).toEqual(numberOfFruits);
        // check that our filter was applied to filteredFruits
        expect(filteredFruits).toContain(myFavoriteFruit);
        expect(filteredFruits.length).toBe(1);
    });

});
