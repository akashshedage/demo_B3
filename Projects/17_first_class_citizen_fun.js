//1. function can be stored in a variable
let show = function(){
    console.log("Inside show function");
}
show();

//2. Function can be passed as an argument to another function
// Please refer callback example

//3. A function can return another function
function outer_fun(){
    console.log("Inside outer function...");
    let my_variable = function (){
        console.log("Hello I an Good");
    }
    return my_variable;
}
let inner = outer_fun();
inner();