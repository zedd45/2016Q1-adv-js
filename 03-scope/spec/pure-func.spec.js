'use strict';

const PureFunc = require('../pure-functions');

let fruits = PureFunc.fruits;
let people = PureFunc.people;
let favoriteFruits = PureFunc.favoriteFruits;
let addPeople = PureFunc.addPeople;

describe('Pure Function', function () {

    it('adding a new person does not modify the original data structure', function () {

        let newPeople = addPeople(people, {
            'name': 'Eran Hammer',
            'Twitter': '@eranhammer'
        });

        expect(newPeople.length).toEqual(2);
        expect(people.length).toEqual(1);
    });

    it('pruning fruits does not modify the original data structure', function () {

        let myFavoriteFruits = favoriteFruits(fruits);
        expect(myFavoriteFruits).not.toContain('pear');
        expect(fruits).toContain('pear');
    });

});
