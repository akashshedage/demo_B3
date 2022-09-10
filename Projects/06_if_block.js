// var age = 17;
// if (age >= 21) {
//     console.log(`Hey ${age} congrats your line is clear now`);
// }else {
//     console.log(`Sorry not eligible`);
// }
// console.log(`Operation done`);



// var my_number = 10;
// if (my_number == 10) {
//     console.log(`My lucky number`);
    
// }

// var age = 17;
// if (age >= 18) {
//     console.log(`Now are eligible for voting`);
// }else{
//     console.log(`Sorry not eligible for voting, please try next time`);
// }


// var male_marriage_check = function (gender, age){
//     if (gender == "Male" && age >= 21){
//         return  "Hey boy you are eligible for marriage";
//     } else {
//         return "Sorry not eligible";
//     }
// }
// var result = male_marriage_check("Male", 20);
// console.log(result)


// Grade design Function
function grade_design(score) {
    if (score >= 0 && score <= 100) { // true
        console.log(`Valid score`);
        if (score < 35) { // 34 < 35
            console.log(`Unfortunately you are failed`);
        } else {
            console.log(`Congrats you are passed`);
            if(score >=35 && score <60 ){
                console.log(`Your grade is C`);
            } else{
                if (score>=60 && score < 80) {
                    console.log(`Your grade is B`); 
                }
                else {
                    if (score>=80 && score <90) {
                        console.log(`Your grade is A`); 
                    } else {
                        console.log(`Your grade is A+`);  
                    }
                }
            }
        }

    } else {
        console.log(`Please provide valid score`);

    }
}
grade_design(80);
// grade_design(-10);

console.log("----------------------------------------------------");
// Grade design Function
function grade_design_new(score) {
    if (score >= 0 && score <= 100) { // true
        console.log(`Valid score`);
        if (score < 35) { // 34 < 35
            console.log(`Unfortunately you are failed`);
        } 
        else {
            console.log(`Congrats you are passed`);
            if(score <60 ){
                console.log(`Your grade is C`);
            } 
            if (score>60 && score < 80) {
                console.log(`Your grade is B`); 
            }
            if (score>=80 && score <90) {
                console.log(`Your grade is A`); 
            } 
            if( score>=90 ){
                console.log(`Your grade is A+`);  
            }
        }
    } else {
        console.log(`Please provide valid score`);
    }
}
grade_design_new(89);
// grade_design(-10);
console.log("--------------------------------------------");


function gender_check(gender) { // var gender = Male 
    // if(gender === "Male") {
    //   console.log(`Your are Man, Gender ${gender} `);
    // }
    // if(gender === "Female") {
    //     console.log(`Your are Woman, Gender ${gender} `);   
    // }
    // if(gender === "Others") {
    //     console.log(`Your are Transgender, Gender ${gender} `);    
    // }

    // if(gender != "Male" && gender != "Female" && gender !="Others") { // gender = "Male"
    //     console.log(`Invalid gender ${gender}`);
    // }
if(gender == "Male") { // Others
        console.log(`Your are Man, Gender ${gender} `); 
    } else {
        if(gender === "Female") { // Others
            console.log(`Your are Woman, Gender ${gender} `); 
        } else {
            if(gender === "Others") {
                console.log(`Your are Transgender, Gender ${gender} `); 
            } else {
                console.log(`Invalid gender ${gender}`);
            }
        }
    } 

}
gender_check("Male");
gender_check("animal");
gender_check("Female");
gender_check("Others");
gender_check("bird");



console.log("--------------------------------------------");




console.log("               Assignment 1");
console.log("--------------------------------------------");

var number;
var number1 = typeof(number);

function even_odd(number){
    if (typeof(number) === `number`){
        console.log(`The number ${number} is Valid Input.`);
        if (number %2 == 0){
            console.log(`The number ${number} is Even.`);
        }else{
            console.log(`The number ${number} is Odd.`);
        }
    }else{
        console.log(`The number ${number} is Invalid Input.`);
    }
}
even_odd(2);
console.log("--------------------------------------------");
even_odd(45);
console.log("--------------------------------------------");
even_odd(null);
console.log("--------------------------------------------");
even_odd(13);
console.log("--------------------------------------------");
even_odd(0);
console.log("--------------------------------------------");
even_odd("70");
console.log("--------------------------------------------");
even_odd(undefined);
console.log("--------------------------------------------");
even_odd("Ten");
console.log("--------------------------------------------");
even_odd(NaN);
console.log("--------------------------------------------");



console.log("------------------------------------------------------------");

var num1;
var num2;
var num3;

var large_fun = function(num1, num2, num3){
    console.log(`The Three Numbers are ${num1},${num2},${num3}`);
    if (typeof(num1) == `number` && typeof(num2) == `number` && typeof(num3) == `number`){
        console.log(`This is Valid Input`);
        
        if(num1 >= num2 && num1 >= num3){
            console.log(`The Largest Number is: ${num1}`);
        }else if (num2 >= num1 && num2 >= num3){
            console.log(`The Largest Number is: ${num2}`);
        }else {
            console.log(`The Largest Number is: ${num3}`);

        }
    }else {
        console.log(`The Largest Number is: ${num3}`);
        console.log(`The One value is Invalid`);
    }

}
large_fun(56,70,80);
console.log("--------------------------------------------");
large_fun(-20,-90,0);
console.log("--------------------------------------------");
large_fun(1000,undefined,0);
console.log("--------------------------------------------");
large_fun(null,5,67);
console.log("--------------------------------------------");
large_fun(NaN,60,70);
console.log("--------------------------------------------");

