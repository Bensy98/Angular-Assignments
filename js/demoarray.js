"use strict";
//ARRAY
let fruits = ['apple', 'orange', 'banana'];
console.log(fruits);
//multi-type array
let fruitsDemo = ['apple', 100, 'orange', 200, 'banana', 300];
for (var fruit in fruitsDemo) {
    console.log(fruitsDemo[fruit]);
}
//SORT ARRAY
var sortedArray = fruits.sort();
console.log(sortedArray);
//DESCENDING using ==>
var sortedArrayDesc = fruits.sort((first, second) => {
    if (first > second) {
        return 1;
    }
    if (first < second) {
        return 1;
    }
    return 0;
});
console.log(sortedArrayDesc, "sorted");
