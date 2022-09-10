// Factorial of a number 5! = 5 * 4 * 3 * 2 * 1 
var result = 1;
for (let index = 1; index <= 5; index++) { 
    result = index * result;
    // console.log(result);    
}
console.log(result);    


function factorial(number) {
    var result = 1;
for (let index = 1; index <= number; index++) { 
    result = index * result;
    // console.log(result);    
    }  
    return result; 
}
console.log(`Factorial of 5 is ${factorial (5)}`);    
console.log(`Factorial of 6 is ${factorial (6)}`); 


// Prime Number 11 --> 11%2  11%3  11%4  11%5  11%10
function prime_number(prime) {
    for (let index = 2; index < prime; index++) {
        if(prime%index == 0 ) {
            return "Not a Prime Number";
        } 
    }
    return "Prime Number";

}
console.log(`Is 3 ${prime_number(3)}`);
console.log(`Is 4 ${prime_number(4)}`);
console.log(`Is 9  ${prime_number(9)}`);
console.log(`Is 20  ${prime_number(20)}`);


