var index= 0;
while (index<=10) {
    if(index==5) {
        break;
    }
    console.log(index); // 0 1 2 3 4 5
    index++;
}
console.log("After loop");

for (let index = 0; index <= 5; index++) {
    console.log("Before continue", index); 
    if(index == 2) {
        continue;
    }
    console.log("After continue", index);
    
}
console.log("After for loop");


