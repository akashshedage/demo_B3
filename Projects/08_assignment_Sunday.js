console.log("-----------------------------------------------------------------------------");
console.log("                              Assignment 1");
console.log("-----------------------------------------------------------------------------");


function count_spaces(str) {
    var spaces = (str.split(` `).length -1);
    console.log(spaces);
}
console.log(`Total Number of spaces in given string "Hard work always pays back" is :- `);
count_spaces(`Hard work always pays back`);
console.log(`Total Number of spaces in given string "Soon I will be Angular IT Champ" is :- `);
count_spaces(`Soon I will be Angular IT Champ`);

console.log("-----------------------------------------------------------------------------");


// function reverse(str) {
//     if (str === "") return "";
//     else return reverse (str.substr(1)) + str.charAt(0);
// }
// console.log(`String :-`);
// console.log(`Hard work always pays back`);
// console.log(`Reverse :-`);
// console.log(reverse(`Hard work always pays back`));

// console.log("-----------------------------------------------------------------------------");
// console.log(`String  :-`);
// console.log(`Soon I will be Angular IT Champ`);
// console.log(`Reverse :-`);
// console.log(reverse(`Soon I will be Angular IT Champ`));

var string1="Hard work always pays back";
var string2="Soon I will be Angular IT Champ";
var reverse="";
function reverse_string(str) {
    for(let index=str.length-1; index >= 0; index--) 
    {
        reverse = reverse + str.charAt(index);
        
    }
    console.log(`Reverse String is : ${reverse}`);

}
console.log(`String is : ${string1}`);
reverse_string(string1);

console.log("-----------------------------------------------------------------------------");

var string2="Soon I will be Angular IT Champ";
var reverse="";
function reverse_string(str) {
    for(let index=str.length-1; index >= 0; index--) 
    {
        reverse = reverse + str.charAt(index);
        
    }
    console.log(`Reverse String is : ${reverse}`);

}
console.log(`String is : ${string2}`);
reverse_string(string2);
console.log("-----------------------------------------------------------------------------");


// function reverse(str){
//     let new_str = '';
// for (var i = str.length -1; i >=0; i=i-1) {
//     var reverse = str.substr(1) + str.charAt(0);
//     console.log(`${reverse}`);
// }
// }
// reverse(`Hard work always pays back`);

// function reverse_string(str) {
//     let new_str= '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         let new_str =  str.charAt(-1);
//     }
//     return new_str
    
// }
// reverse_string('Hard work always pays back' );

// console.log("-----------------------------------------------------------------------------");

// let counter = 1;
// let number = 1  
// let index = 1;
// while (counter <= 10) {
//     index++;
//     if (number % index ===0) {
//         console.log(index);
//         counter++;
//     }
// }
// console.log("-----------------------------------------------------------------------------");

// var string1="Hard work always pays back";
// var string2="Soon I will be Angular IT Champ";
// var reverse1="";
// function reverse_string(str) {
//     for(let index=str.length-1; index >= 0; index--) 
//     {
//         reverse1 = reverse1 + str.charAt(index);
//     }
// console.log(`Reverse String is : ${reverse1}`);
// }
// console.log(`String is : ${string1}`);
// reverse_string(string1);
// console.log(`-----------------------------------------------------`);
// console.log(`String is : ${string2}`);
// reverse_string(string2);
// console.log(`-----------------------------------------------------`);