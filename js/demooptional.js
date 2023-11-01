"use strict";
/*
optional parameters
?=nullable
the parameter that may or may not receive a value can be appened with a '?' to mark them as optional
*/
function greet(message, name) {
    return message + ' ' + name + ' | ';
}
console.log(greet('hello', 'bensy'));
console.log(greet('hello'));
