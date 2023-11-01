//define interface
interface IEmployee{

    //declare variables
    empCode:number;
    empName:String;

    //abstract method-> without implementation
    getSalary:(empCode:number)=>number;
    }

    //implement
    class EmployeeTwo implements IEmployee{

        //variables
        empCode:number;
        empName:string;

        //constructor
        constructor(_code:number,_name:string){
            this.empCode=_code;
            this.empName=_name;
        }
        

        //method implementation
        
        getSalary(empCode: number): number;{
        return 45000;
        }
    }

    let empTwo=new EmployeeTwo(100,"Bensy Benny");
    console.log(empTwo.getSalary(100));