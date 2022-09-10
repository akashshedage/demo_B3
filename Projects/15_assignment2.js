console.log("-----------------------------------------------------------");
console.log("                        Assignment 2");
console.log("-----------------------------------------------------------");

console.log(`With No Args and No return Value:-`);

let display = function () {
    console.log('"Good Morning, Today is Tuesday"');
}
display();

console.log("-----------------------------------------------------------");

console.log(`Multiplication using arrow function:-`);
let values = (num1, num2, num3) => {
    console.log(`Multiplication is :- ${num1*num2*num3}`);
}

values(5,5,2);
values(10,4,10);

console.log("-----------------------------------------------------------");

console.log(`With 5 arg and return value:-`);
let add_values = (num_1,num_2,num_3,num_4,num_5) => {
    return num_1+num_2+num_3+num_4+num_5;
}
console.log(`Addition using arrow function :- ${add_values(100,100,200,349,756)}`);

let add_string = (value1,value2,value3,value4,value5) => {
    return ;
}
console.log(`Addition using arrow function :- ${add_values("I am"," learning"," ES6"," features"," in JS")}`);

console.log("-----------------------------------------------------------");
