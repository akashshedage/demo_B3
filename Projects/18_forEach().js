const array_number = [20, 30, 4, 5, 6, 7, 8];
for (let index = 0; index < array_number.length; index++) {
    const element = array_number[index];
    // console.log(element);
}

// array_number.forEach(function(element) {
//     console.log(element);
// });

array_number.forEach((element, index) =>{
    // console.log(element, index)
});

//Find out numbers greater than 10 from array [20, 30, 4, 5, 11, 7, 8]
array_number.forEach(element => {
    if(element > 10){                    
        console.log(element);
    }
});