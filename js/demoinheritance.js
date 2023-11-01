"use strict";
//declare class
class Person {
    //constructor
    constructor(_name) {
        this.name = '';
        this.name = _name;
    }
}
//child
class EmployeeOne extends Person {
    //constructor
    constructor(_empCode, name) {
        super(name);
        //instance variable
        this.empCode = 0;
        //conrete method
        this.displayName = () => {
            console.log("Name : " + this.name);
            console.log("Code : " + this.empCode);
        };
        this.empCode = _empCode;
    }
}
//entry point
let emp = new EmployeeOne(10, "Bensy");
emp.displayName();
