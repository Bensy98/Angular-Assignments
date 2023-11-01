//declare class
class Person{
 name:String ='';

 //constructor
 constructor(_name:String){
    this.name=_name;
 }
}

//child
class EmployeeOne extends Person{
    //instance variable
    empCode:number=0;

    //constructor
    constructor(_empCode:number,name:String){
        super(name);
        this.empCode=_empCode;
    }

    //conrete method
    displayName=(): void=>{
        console.log("Name : " + this.name);
        console.log("Code : " + this.empCode )
    }
}

//entry point
let emp=new EmployeeOne(10,"Bensy");
emp.displayName();