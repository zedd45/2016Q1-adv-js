'use strict';

const fruits = ['apple', 'orange', 'pear', 'banana', 'raspberry', 'blueberry'];
const people = [{
    name: 'Jon Resig',
    twitter: '@jeresig'
}];

// my favorite fruit is: 
const filterMyFavoriteFruit = function (fruitChoices, favoriteFruit) {

    // return only your favorite fruits
    // hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    return fruitChoices.filter(function (fruit) {
        return fruit === favoriteFruit;
    });
};

const addPeople = function (people, person) {

    let newPeople = [].concat(people);
    newPeople.push(person);
    return newPeople;
};

//
module.exports = {
    fruits,
    people,
    filterMyFavoriteFruit,
    addPeople
};
