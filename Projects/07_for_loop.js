
// For Loop 1 2 3 4 5 6 7 8 9 
for (var index = 0; index < 10; index++) {
    console.log(index);
    
}

console.log("--------------------");

//for loop ---Even Numbers
for (var index = 0; index < 10; index = index+2) {
    console.log(index);
    
}

console.log("--------------------");


//for loop ---10 8 6 4 2 0
for (var index = 10; index >= 0; index = index-2) {
    console.log(index);
    
}

console.log("--------------------");


//for loop ---10 9 8 7 6 5 4 3 2 1 0
for (var index = 10; index >= 0; index = index-1) {
    console.log(index);
    
}

console.log("--------------------");

// 1 2 3 4 5 ....... 18 19 20 Even--Odd Numbers
for (let index = 0; index <= 20; index++) {
    
    var res = index %2;
    if (res == 0) {
        console.log(`Even number ${index}`);
    }else{
        console.log(`Odd number ${index}`);
    }
    
}
