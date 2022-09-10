// if (true) {
//     let salary = 40000;
//     console.log(salary);
// }
// console.log(salary);

// let str = "Google Chrome"; // a e i o u
// let counter = 0; 
// for (let index = 0; index < str.length; index++) {
//     let char = str.charAt(index); // a 
//     if (char == "a" || char == "A" || char == "e" || char == "E" ||
//         char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U") {
//             counter = counter+1;
//     }
// }
// console.log(`Total vowels ${counter}`);


var my_name = "Mohit";
// Block scope 
if(true) {
    const salary = "400000";
    console.log(salary); 
 }
 //console.log(salary);
console.log(my_name);
 

 function display (){
    var my_city = "Pune";
    if(true){
        const my_PIN =123456;
        let my_state= "MH";
        var my_country = "India";

    }
    // console.log(my_state);
    // console.log(my_PIN);
    // console.log(my_city);
     console.log(my_country);

 }

 display();

let index = 0;
for (index ; index < 3 ; index++);{
    console.log(index);
}

for(let i = 1; i<5 ; i++){
    if (i === 3) continue;
    console.log(i);
}