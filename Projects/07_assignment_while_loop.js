console.log(`-----------------------------------`);
console.log(`           Assignment 1`);
console.log(`         Using While Loop`);
console.log(`-----------------------------------`);

console.log(`Numbers from 5 to 15 by incrementing 1 :-`);
var incrementing = function () {
    var index = 5
    while (index <= 15) {
        console.log(index);
        index = index + 1;
    }
}
return_value = incrementing();

console.log(`-----------------------------------`);

console.log(`Numbers from 50 to 40 by decrementing 1 :-`);
var decrementing = function () {
    var index = 50
    while (index >= 40) {
        console.log(index);
        index = index - 1;
    }
}
return_value = decrementing();

console.log(`-----------------------------------`);

console.log(`First 15 Odd numbers :-`);
var odd = function () {
    var index = 1
    while (index < 30) {
        if (index % 2 == 1)
            console.log(`${index}`);
        index++;
    }
}
return_value = odd();

console.log(`-----------------------------------`);

console.log(`First 10 Even numbers :-`);
var even = function () {
    var index = 0
    while (index < 20) {
        if (index % 2 == 0)
            console.log(index);
        index++;
    }
}
return_value = even();

console.log(`-----------------------------------`);

console.log(`Table of 5 :-`);
var table = function () {
    var index = 5
    while (index <= 50) {
        console.log(`${index}`);
        index = index + 5;
    }
}
return_value = table();
console.log(`-----------------------------------`);

console.log(`Table of 10 :-`);
var table = function () {
    var index = 10
    while (index <= 100) {
        console.log(`${index}`);
        index = index + 10;
    }
}
return_value = table();
console.log(`-----------------------------------`);
console.log(`           Assignment 2`);
console.log(`         Using do While Loop`);
console.log(`-----------------------------------`);

console.log(`Numbers from 5 to 15 by incrementing 1 :-`);
var incrementing = function () {
    var index = 5;
    do {
        console.log(index);
        index = index + 1;
    } while (index <= 15);
}
return_value = incrementing();

console.log(`-----------------------------------`);

console.log(`Numbers from 50 to 40 by decrementing 1 :-`);
var decrementing = function () {
    var index = 50;
    do {
        console.log(index);
        index = index - 1;
    } while (index >= 40);
}
return_value = decrementing();

console.log(`-----------------------------------`);

console.log(`First 15 Odd numbers :-`);
var odd = function () {
    var index = 1;
    do {
        var res = index % 2;
        if (res == 1)
            console.log(`${index}`);
        index++;
    } while (index < 30);
}
return_value = odd();

console.log(`-----------------------------------`);


console.log(`First 10 Even numbers :-`);
var even_number = function () {
    var index = 0;
    do {
        var res = index % 2;
        if (res == 0)
            console.log(`${index}`);
        index++;
    } while (index < 20);
}
var return_value = even_number();

console.log(`-----------------------------------`);

//console.log(`Table of 5 :-`);
// var index = 5;
// do {

//     console.log(`${index}`);
//     index =index +5;
// } while (index <= 50);
console.log(`Table of 5 :- `);
var table = function () {
    var index = 5;
    do {

        console.log(`${index}`);
        index = index + 5;
    } while (index <= 50);

}
var return_value = table();


console.log(`-----------------------------------`);

// console.log(`Table of 10 :-`);
// var index = 10;
// do {

//     console.log(`${index}`);
//     index =index +10;
// } while (index <= 100);
console.log(`Table of 10 :-`);
var table = function () {
    var index = 10;
    do {

        console.log(`${index}`);
        index = index + 10;
    } while (index <= 100);
}
var return_value = table();


console.log(`------------------------------------------------`);
console.log(`                 Assignment 3`);
console.log(`------------------------------------------------`);

let str = "I Love JavaScript";
let counter = 0;
for (let index = 0; index < str.length; index++) {
    let char = str.charAt(index);
    if (char == "a" || char == "A" || char == "e" || char == "E" ||
        char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U") {
        counter = counter + 1;
    }

}
console.log(`Total vowels in "I Love JavaScript" is ${counter}`);

console.log(`------------------------------------------------`);

let result = 0;
for (let index = 0; index <= 10; index++) {
    result = index + result;
}
console.log(`Sum of all numbers from 1 to 10 is :- ${result}`);

console.log(`------------------------------------------------`);

console.log(`Table of 5 :-`);
var table = function () {
    var index = 5;
    do {

        console.log(`${index}`);
        index = index + 5;
    } while (index <= 50);
}
return_value = table();

console.log(`--------------`);

console.log(`Table of 7 :-`);
var table = function () {
    var index = 7;
    do {

        console.log(`${index}`);
        index = index + 7;
    } while (index <= 70);
}
return_value = table();

console.log(`------------------------------------------------`);


for (let index = 1; index >= 5; index++) {
    result = (index * index) + (index * index);
}
console.log(`Sum of Square numbers from 1 to 5 is :- ${result}`);

console.log(`------------------------------------------------`);

function even_position_char(str) {
    var words = str.split(" ");
    var new_str = words.join("");
    console.log(`${new_str}`);

    for (var i = 1; i <= new_str.length; i = i + 2) {
        var evens = new_str.charAt(i);
        console.log(`${evens}`);
    }

}
even_position_char("Hard work always pays back");
even_position_char("Soon I will be Angular IT Champ");

function odd_position_char(str) {
    var new_str = str.split(" ").join("");
    console.log(`${new_str}`);

    for (var i = 0; i <= new_str.length; i = i + 2) {
        var evens = new_str.charAt(i);
        console.log(`${evens}`);
    }
}
odd_position_char("Hard work always pays back");
odd_position_char("Soon I will be Angular IT Champ");

console.log(`------------------------------------------------`);


