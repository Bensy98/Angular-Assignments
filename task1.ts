//write a function that takes array of numbers and returns sum of all the elements

// function sumElements(){
//     var sum:number=0;
//     var nums: number[]=[10,25,5];
//     var sums:any;
//     for(sums of nums){
//        sum=sum+sums; 
//     }
//     console.log("sum of elements "+sum);
// }
// sumElements();


var nums: number[] = [10, 25, 5];
function sumElements(nums: number[]) {
    var sum: number = 0;


    for (var sums of nums) {
        sum = sum + sums;
    }
    
    return sum;
}

var arrsum=sumElements(nums);
console.log("sum of elements " + arrsum);