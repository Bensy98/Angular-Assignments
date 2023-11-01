"use strict";
//implement
class EmployeeTwo {
    //constructor
    constructor(_code, _name) {
        this.empCode = _code;
        this.empName = _name;
    }
    //method implementation
    getSalary(empCode) {
        return 45000;
    }
}
//Entry point
let empTwo = new EmployeeTwo(111, "Hanna Fathima");
console.log(empTwo.getSalary(111));
