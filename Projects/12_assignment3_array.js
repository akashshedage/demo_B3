console.log("                                        Assignment 2");
console.log("------------------------------------------------------------------------------------------------");
const array_numbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(array_numbers);

console.log("------------------------------------------------------------------------------------------------");

console.log(`Total length of given array is:- ${array_numbers.length}`);
console.log("------------------------------------------------------------------------------------------------");

console.log(`Total Elements available in the given array is :-`);
for (const element of array_numbers) {
   console.log(element);
}

console.log("------------------------------------------------------------------------------------------------");

let array_numbers_first = array_numbers[0];
let array_numbers_last = array_numbers[array_numbers.length-1];
console.log(`First element :- ${array_numbers_first}, Last element :- ${array_numbers_last}`);

console.log("------------------------------------------------------------------------------------------------");

let array_numbers_thirdlast = array_numbers[array_numbers.length-3];
console.log(`Third last 3 element by using the length Proprty:- ${array_numbers_thirdlast}`);

console.log("------------------------------------------------------------------------------------------------");
console.log(`Elements from End to Start position:-`);
for (let index =array_numbers.length-1; index >= 0; index--) {
    console.log(array_numbers[index]);
}

console.log("------------------------------------------------------------------------------------------------");
console.log(`Even numbers :-`);
for (const element of array_numbers) {
    if(element %2 ==0){
        console.log(element);
    }
}

console.log("------------------------------------------------------------------------------------------------");
console.log(`Odd numbers :-`);
for (const element of array_numbers) {
    if(element %2 !==0){
        console.log(element);
    }
}

console.log("------------------------------------------------------------------------------------------------");
console.log(`Even Positioned elements :-`);
for (let index = 0; index < array_numbers.length; index++) {
    if (index %2 == 0){
        const element = array_numbers[index];
        console.log(element);
    }
    
}

console.log("------------------------------------------------------------------------------------------------");
console.log(`Odd Positioned elements :-`);
for (let index = 0; index < array_numbers.length; index++) {
    if (index %2 !== 0){
        const element = array_numbers[index];
        console.log(element);
    }
    
}

console.log("------------------------------------------------------------------------------------------------");

let sum = 0;
for (let index = 0; index < array_numbers.length; index++) {
    sum += array_numbers[index];
}
console.log(`Sum of all elements is :- ${sum}`);

console.log("------------------------------------------------------------------------------------------------");

let prime = [];
function isPrime(item) {
    let identifier = item / 2;
      for (let j = 2; j <= identifier; j++) {
       if ((item % j) == 0) { 
        return false;
       } 
     }
     return true;
}
for (let index = 0; index < array_numbers.length; index++) {
  if (isPrime(array_numbers[index])) {
      prime.push(array_numbers[index])
  }
}
console.log(`Prime Numbers :- ${prime}`);

console.log("------------------------------------------------------------------------------------------------");

console.log(`The numbers which are multiple of 5 :-`);
for (let index = 0; index < array_numbers.length; index++) {
    if(array_numbers[index] %5 == 0){
        const element = array_numbers[index];
        console.log(element);
    }
    
}

console.log("------------------------------------------------------------------------------------------------");

let check = array_numbers.includes(115);
console.log(`Is number 115 available in given array :- ${check}`);
console.log("------------------------------------------------------------------------------------------------");


let check1 = array_numbers.includes(23);
console.log(`Is number 23 available in given array :- ${check1}`);
