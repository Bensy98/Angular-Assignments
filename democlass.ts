//declare variables
class Employee{
    //instance variables
    empCode:number=0;
    empName:string=' ';
    
    //constructor
    constructor(code:number,name:string){
        this.empCode=code;
        this.empName=name;
    }

    //custom methods
    //normal way
    // function display():string{
    //     console.log(this.empName + this.empCode)
    // }


    //using arrow function
    display=()=>console.log(this.empName+ " "+this.empCode);

    //entry point
    
}
let employeeOne=new Employee(1001,"bensy");
    employeeOne.display();