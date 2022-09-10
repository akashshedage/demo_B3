/* 
function display() {
    console.log("Today I am going to learn Function");
}
display(); 


function display(my_name, age, pin_code, city) {
    console.log(my_name, age, pin_code, city);
}
display( "Akash Shedage", 25, 410010 ,"pune");









var age = 25;
var age_type = typeof age
console.log( "Type of ", age, " ", age_type );

var first_name = "Akash";
var last_name = "Shedage";
var isMarried = false;
var pin_code;

type_check(age);
type_check(first_name);
type_check(last_name);
type_check(isMarried);
type_check(pin_code);

function type_check(value){
    var data_type = typeof value;
    console.log( "Type of ", value, data_type);
    
}


// Function with return value

var message = log_message();
console.log(message);

function log_message(){
    return "Hello";
}

// Addition of two numbers with return value
var add_return = add(10, 20);
console.log("Addition of number is ", add_return);

var add_result = add("Good","Morning");
console.log(add_result);

console.log("Good"+" Afternoon")

function add (agr_1, agr_2) { // arg_1 = 10, arg_2 = 20
    var result = agr_1 + agr_2;
    return result;
}


fun1();
function fun1(){
    console.log("Hello");
}
fun2(20, 30);
function fun2(v1, v2) {
  console.log(v1, v2);
}

var result_2 =fun3();
function fun3() {
    return "Hello";
}

 var result_1 = fun4(70, 80);
function fun4(v4, v5) {
    return "30";
}*/





console.log( "                                       Assignment 4")
console.log("----------------------------------------------------------------------------------------------");

function display(){
    console.log( "The model is the data, the view is the UI, and the controller is the business logic." );
    console.log("Thank You !");
}
display();

console.log("----------------------------------------------------------------------------------------------");

function full_name (first_name, last_name){
    var result = first_name + last_name
    console.log(result);
}
var add_return = full_name("Akash", " Shedage");

console.log("----------------------------------------------------------------------------------------------");

var val1;
var val2;

swap_value("Virat", "Anushka");
console.log("------------------------------------");
swap_value(1000, 2000);

function swap_value(val1, val2){
    console.log("Before Swapping");
    console.log(val1, val2);
    var temp = val1;
    val1 = val2;
    val2 = temp;
    console.log("After Swapping");
    console.log(val1, val2);
}


console.log("----------------------------------------------------------------------------------------------");

var add_return = add_three_numbers(10.23, 600, 40);
console.log("Addition of Three numbers is ", add_return);

function add_three_numbers (agr_1, agr_2, arg_3) { 
    var result = agr_1 + agr_2 + arg_3;
    return result;
}

var add_result = add("Hello,","  Good"," Morning !");
console.log(add_result);

function add (agr_1, agr_2, arg_3) { 
    var result = agr_1 + agr_2 + arg_3;
    return result;
}







