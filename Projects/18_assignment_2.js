console.log("---------------------------------------------------------------------------------------");
console.log("------------------------------ Assignment B :- forEach() ------------------------------");
console.log("---------------------------------------------------------------------------------------");

const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("Array element with it's Index using forEach() with arrow function :-");
array_numbers.forEach((element, index) =>{
    console.log(`Array element:- ${element}, Index:- ${index}`)
});

console.log("---------------------------------------------------------------------------------------");

console.log("Positive Numbers using forEach() with arrow function:-");
array_numbers.forEach((element) => {
    if(element >= 0) {
     console.log(element);
    }
});

console.log("---------------------------------------------------------------------------------------");

console.log("Positive Numbers using forEach() with callback:-");
array_numbers.forEach(function(value){
    if (value>=0){
        console.log(value)
    }
})

console.log("---------------------------------------------------------------------------------------");

console.log("Negative Numbers using forEach() with arrow function:-");
array_numbers.forEach((element) => {
    if(element < 0) {
     console.log(element);
    }
});

console.log("---------------------------------------------------------------------------------------");

console.log("Even Numbers using forEach() with arrow function:-");
array_numbers.forEach((element) => {
    if(element %2 == 0) {
     console.log(element);
    }
});

console.log("---------------------------------------------------------------------------------------");

console.log("Sum of all elements :-");
let sum_of_all_element =0;
let index=0;
array_numbers.forEach((element) => {
    sum_of_all_element += element
});
console.log(sum_of_all_element);

console.log("---------------------------------------------------------------------------------------");

console.log(`Even Positioned elements :-`);
array_numbers.forEach((value,index)=>{
    if(index%2==0){
        console.log(value)
    }
});

console.log("---------------------------------------------------------------------------------------");

console.log(`Odd Positioned elements if it is negative :-`);

array_numbers.forEach((value,index)=>{
    if(index%2!=0 && value < 0){
        console.log(value)
    }
});