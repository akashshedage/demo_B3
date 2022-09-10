console.log("----------------------------");
console.log("        Assignment");
console.log("----------------------------");

console.log("Using Third Variable");
console.log("----------------------------");

function swap_with_third_arg(num1,num2) {
    console.log("Before Swapping");
    console.log(num1, num2);
    temp = num1;
    num1 = num2;
    num2 = temp;
    console.log("After Swapping");
    console.log(num1, num2);
}
swap_with_third_arg(100,200);
console.log("----------------------------");
swap_with_third_arg(40,50);


console.log("----------------------------");


console.log("Without Using Third Variable");
console.log("----------------------------");

function swap_without_using_third_arg(val1,val2) {
    console.log("Before Swapping");
    console.log(val1, val2);
    val1 = val1 + val2; 
    val2 = val1 - val2; 
    val1 = val1 - val2;
    console.log("After Swapping");
    console.log(val1, val2);
}
swap_without_using_third_arg(100,200);
console.log("----------------------------");
swap_without_using_third_arg(40,50);