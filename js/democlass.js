"use strict";
//declare variables
class Employee {
    //constructor
    constructor(code, name) {
        //instance variables
        this.empCode = 0;
        this.empName = ' ';
        //custom methods
        //normal way
        // function display():string{
        //     console.log(this.empName + this.empCode)
        // }
        //using arrow function
        this.display = () => console.log(this.empName + " " + this.empCode);
        this.empCode = code;
        this.empName = name;
    }
}
let employeeOne = new Employee(1001, "bensy");
employeeOne.display();
