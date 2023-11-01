"use strict";
/*1. convert a specified number to an array of digits
eg: 7895 arr[0]=7 arr[1]=8.....

2.To capitalize the first letter of a string
eg: varsha --- Varsha

3.Removes non-printable ASCII characters from a given string
eg: Hello\x00World\x1F\ output: HelloWorld
*/
//QUESTION 1
// function numberArray(number: number): number[] {
//     let numberStr = number.toString(); 
//     let digitsArray = numberStr.split('').map(Number);
//     return digitsArray;
//   }
//   let number = 7895;
//   let digitsArray = numberArray(number);
//   console.log(digitsArray);
//QUESTION 2
// function capitalizeFirstLetter(inputString: string): string {
//     if (inputString.length === 0) {
//       return inputString; 
//     }
//     const firstLetter = inputString[0].toUpperCase();
//     const restOfString = inputString.slice(1);
//     return firstLetter + restOfString;
//   }
//   const inputString = "varsha";
//   const capitalizedString = capitalizeFirstLetter(inputString);
//   console.log(capitalizedString);
//QUESTION 3
// function removeNonPrintableCharacters(inputString: string): string {
//     // Use a regular expression to match non-printable ASCII characters and replace them with an empty string.
//     return inputString.replace(/[\x00-\x1F\x7F-\x9F]/g, '');
//   }
//   const inputString = 'Hello\x00World\x1F';
//   const cleanedString = removeNonPrintableCharacters(inputString);
//   console.log(cleanedString);
