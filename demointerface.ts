//define interface
interface IEmployee{

    //declare variables
    empCode: number;
    empName: String;

    //abstract method-> Without implementation
    getSalary:(empCode: number)=>number;

}
//implement

class EmployeeTwo implements IEmployee{

    //variables
    empCode:number;
    empName:String;

    //constructor
    constructor(_code:number,_name:String){
        this.empCode=_code;
        this.empName=_name;        
    }

    //method implementation
    getSalary(empCode: number):number{
        return 45000;
    }
}

//Entry point
let empTwo=new EmployeeTwo(111,"Hanna Fathima");
console.log(empTwo.getSalary(111));