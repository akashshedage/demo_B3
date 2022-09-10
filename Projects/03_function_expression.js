// FE with  no arg args and no return 

var result = function(){
    console.log(`Inside function expression....`);
}
result();

// FE with arg args and no return 
var result = function (arg1) {
    console.log(`Inside function expression.... ${arg1}`);
}
result(100);

// FE with no args and  return 
var result = function () {
    console.log(`Inside function expression....`);
    return "success";
}
var return_value = result();
console.log(return_value);

// FE with no args and  return 
var result = function (arg1, arg2) {
    console.log(`${arg1}, ${arg2}`);
    return arg1 + arg2;
}
var return_value = result(100, 200);
console.log(return_value);


