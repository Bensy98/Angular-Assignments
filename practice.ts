// const  myArray:number[]=[1,2,3,4];

//  myArray.push(5);
 
//  myArray.pop();
//  console.log(myArray);


//reduce
// const numbers:number[]=[1,2,3,4,5];
// const sum=numbers.reduce((accumulator,currentValue)=> accumulator + currentValue,0);
// console.log(sum);


//optional
function greet(name:string,greeting?:string):string{
    if(greeting){
        return `${greeting}, ${name}`;

    }else{
        return `Hello, ${name}!`;
    }
}
// console.log(greet("Bensy"));
console.log(greet("Bensy","Hi"));