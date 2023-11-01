"use strict";
//declare
const arrNumbers = [1, 2, 3, 4, 5, 6];
//for adding numbers or elements to array
//arrNumbers.push(10);
//arrNumbers.pop;
//filtering
const arrFilteredNumbers = arrNumbers.filter(x => x % 2 === 0);
console.log(arrFilteredNumbers);
//print full name
function printFullName(firstName, lastName = "Benny") {
    console.log(` ${firstName} ${lastName}`);
}
printFullName("Bensy");
//reduce method
/*
calculate the sum of all elements in the array
*/
//old method
// function addNumbersTest(first:number,second:number){
//     return first+second;
// }
const addNumbers = (first, second) => first + second;
const sumOfNumbers = arrNumbers.reduce(addNumbers, 0);
console.log(sumOfNumbers);
/*
ANONYMOUS FUNCTION
*/
// var varName=function(argument){
//     //bod
// }
let printMessage = () => console.log("we are learning!");
printMessage();
//const arrString:string[]=['hello','world']
const convertToUpperCase = (arrString) => {
    return arrString.map(item => item.toUpperCase());
};
const arrNewArray = ["apple", "orange", "grapes", "banana"];
const upperCaseArray = convertToUpperCase(arrNewArray);
console.log(upperCaseArray);
