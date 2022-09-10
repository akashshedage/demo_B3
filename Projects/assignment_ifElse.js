console.log(`-----------------------------------------------------------`);
console.log(`                       Assignment 1`);
console.log(`-----------------------------------------------------------`);

var age;
var voting_age = function (age) {
    if (age === null || age === undefined) {
        console.log(`${age} :- Invalid Input `);
    } else {
        if (age >= 18) {
            console.log(`Your age is ${age}, So You are eligible for Voting.`);
        } else {
            console.log(`Your age is ${age}, So You are Not eligible for Voting. `)
        }
    }

}
voting_age(45);
console.log(`-----------------------------------------------------------`);
voting_age(undefined);
console.log(`-----------------------------------------------------------`);
voting_age(17);
console.log(`-----------------------------------------------------------`);
voting_age(8);
console.log(`-----------------------------------------------------------`);
voting_age(20);
console.log(`-----------------------------------------------------------`);
voting_age(null);
console.log(`-----------------------------------------------------------`);



console.log(`                       Que. 2`);
console.log(`-----------------------------------------------------------`);
var gender_check = function (gender) {
    if (gender == "Male") {
        console.log(`Your Gender is :- ${gender}`);
    } else {
        if (gender == "Female") {
            console.log(`Your Gender is :- ${gender}`);
        } else {
            if (gender == "Others") {
                console.log(`Your Gender is :- ${gender}`);

            } else {
                console.log(`Invalid Gender :- ${gender}`);
            }
        }
    }
}
gender_check("Male");
console.log(`-----------------------------`);
gender_check("Others");
console.log(`-----------------------------`);
gender_check("Female");
console.log(`-----------------------------`);
gender_check(undefined);
console.log(`-----------------------------`);
gender_check(null);
console.log(`-----------------------------------------------------------`);



console.log(`                       Que. 3`);
console.log(`-----------------------------------------------------------`);
var even_odd = function (number) {
    if (number === null || number === undefined) {
        console.log(`${number} :- Invalid Number `);
    } else {
        if (number % 2 === 0) {
            console.log(`${number} :- This is EVEN Number.`);
        } else {
            console.log(`${number} :- This is ODD Number.`);
        }

    }

}
even_odd(60);
even_odd(51);
even_odd(0);
even_odd(5);
even_odd(40);
even_odd(null);
even_odd(undefined);


console.log(`-----------------------------------------------------------`);
console.log(`                       Assignment 2`);
console.log(`-----------------------------------------------------------`);
// var number;
// var number1 = typeof(number)

// function grade_check(number){
//     if (typeof(number) === `number`){
//         console.log(`This is Valid Score.`);
//     }else{
//         if (number < 35) {
//         console.log(`Sorry, You are Failed.`);
//         }
//         if(number <= 35){
//          console.log(`Congratulations ! You are Passed.`);
//         }
//         if(35 <= number && number <= 60 ){
//         console.log(`Congratulations ! You are Passed.`);
//         console.log(`Your grade is C.`);
//         }
//         if(60 <= number && number <= 75 ){
//         console.log(`Congratulations ! You are Passed.`);
//         console.log(`Your grade is B.`);
//         }
//         if(75 <= number && number <= 90 ){
//         console.log(`Congratulations ! You are Passed.`);
//         console.log(`Your grade is A.`);
//         }
//         if(90 <= number && number <= 100 ){
//         console.log(`Congratulations ! You are Passed.`);
//         console.log(`Your grade is A+.`);
//         }


//     else {
//         console.log(`This is Invalid score`);
// }
// }
// }

// grade_check(45);
// console.log(`-----------------------------`);
// grade_check(null);
// console.log(`-----------------------------`);
// grade_check(90);
// console.log(`-----------------------------`);
// grade_check(34);
// console.log(`-----------------------------`);
// grade_check(undefined);
// console.log(`-----------------------------`);
// grade_check(0);
// console.log(`-----------------------------`);
// grade_check(67);
// console.log(`-----------------------------`);
// grade_check(NaN);
// console.log(`-----------------------------`);



var grade_check = function (score) {
    if (score >= 0 && score <= 100 && score != null) {
        console.log(`Valid score`);

        if (score < 35) {
            console.log(`Unfortunately you are failed`);
        }
        else {
            console.log(`Congrats you are passed`);
            if (score < 60) {
                console.log(`Your grade is C`);
            }
            if (score > 60 && score < 80) {
                console.log(`Your grade is B`);
            }
            if (score >= 80 && score < 90) {
                console.log(`Your grade is A`);
            }
            if (score >= 90) {
                console.log(`Your grade is A+`);
            }
        }
    } else {
        console.log(`Please provide valid score`);
    }
}
grade_check(45);
console.log(`-----------------------------`);
grade_check(null);
console.log(`-----------------------------`);
grade_check(90);
console.log(`-----------------------------`);
grade_check(34);
console.log(`-----------------------------`);
grade_check(undefined);
console.log(`-----------------------------`);
grade_check(0);
console.log(`-----------------------------`);
grade_check(67);
console.log(`-----------------------------`);
grade_check(NaN);
console.log(`-----------------------------`);




