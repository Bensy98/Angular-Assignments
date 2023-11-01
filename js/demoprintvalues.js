"use strict";
//print  values
for (let i = 1; i <= 5; i++) {
    //in order to delay a task by millisecond we use settimeout
    setTimeout(function () {
        console.log(i);
    }, 6000);
    let fistNum = 100;
    let secondNum = 200;
    //equality
    //it checks only the values of the operands
    console.log(fistNum == secondNum);
    //identity
    //it checks the type as well as the values
    console.log(fistNum === secondNum);
}
