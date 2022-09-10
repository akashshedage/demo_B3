console.log("--------------------------------------------");
console.log("               Assignment 2");
console.log("--------------------------------------------");

console.log(`Numbers from 5 to 15 by Incrementing by 1 :-`);
for (let index = 5; index <= 15; index = index +1) {
    console.log(index);
    
}

console.log("------------------------------------------");

console.log(`Numbers from 50 to 40 by Decrementing by 1 :-`);
for (let index = 50; index >= 40; index= index -1) {
    console.log(index);
    
}
console.log("--------------------");

console.log(`First 15 Odd Numbers :-`);
for (let index = 0; index <30; index++) {
    var res = index %2;
    if (res == 1) {
        console.log(` ${index}`);
    }
    
}
console.log("--------------------");

console.log(`First 10 Even Numbers :-`);
for (let index = 0; index <20; index++) {
    var res = index %2;
    if (res == 0) {
        console.log(` ${index}`);
    }
    
}

console.log("--------------------");

console.log(`Table of 5 :-`);
for (let index = 5; index <= 50; index = index +5) {
    console.log(index);
}

console.log("--------------------");

console.log(`Table of 10 :-`);
for (let index = 10; index <= 100; index = index +10) {
    console.log(index);
}
    
