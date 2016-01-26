'use strict';

const fruits = ['apple', 'orange', 'pear', 'banana', 'raspberry', 'blueberry'];
const people = [{
    name: 'Jon Resig',
    twitter: '@jeresig'
}];


const favoriteFruits = function (fruitChoices) {

    // return only your favorite fruits
    // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    return fruitChoices;
};

const addPeople = function (people) {

    // add another person, without modifying the original
    return people;
};

//
module.exports = {
    fruits,
    people,
    favoriteFruits,
    addPeople
};
