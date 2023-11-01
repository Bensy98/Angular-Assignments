"use strict";
/*
write an arrow function that takes an array of numbers as a parameter and returns a new array with each element multiplied by 2
hint :map()
*/
const MultipliedByTwo = (arrNumber) => {
    return arrNumber.map(item => item * 2);
};
const arrArray = [2, 3, 4, 5];
const newArray = MultipliedByTwo(arrArray);
console.log(newArray);
