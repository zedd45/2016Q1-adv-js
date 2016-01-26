'use strict';

const fruits = ['apple', 'orange', 'pear', 'banana', 'raspberry', 'blueberry'];
const people = [{
    name: 'Jon Resig',
    twitter: '@jeresig'
}];


const favoriteFruits = function (fruitChoices) {

    // return only your favorite fruits
    // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    return fruitChoices.filter(function (fruit) {
        return fruit !== 'pear';
    });
};

const addPeople = function (people, person) {

    // slice creates a copy of the array
    let newPeople = people.slice(0);
    newPeople.push(person);
    return newPeople;
};

//
module.exports = {
    fruits,
    people,
    favoriteFruits,
    addPeople
};
