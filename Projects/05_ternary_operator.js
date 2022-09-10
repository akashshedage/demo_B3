// Ternary Operator condition ? start1 : start2
// var res = isRoadBlocked ? go straight : choose alternate path;

var number1 = 100;
var number2 = 200;
var result = number1 >= number2 ? number1 : number2;  
console.log(result);


console.log(`--------------------------------------------------------------`);

console.log(`                       Assignment 1`);
console.log(`--------------------------------------------------------------`);

var result = function(num1, num2){
    console.log(`Greatest Number is  ${num1 >= num2 ? num1 : num2}`)
}
result(10, -10);
result(800, 899);

console.log(`--------------------------------------------------------------`);

var result= function(arg1){
    var arg1 = 29
    var result = ( arg1 %2 == 0) ? "even" : "odd";
    console.log(`The number 29 is ${result}.`)

    var arg1 = 44
    var result = ( arg1 %2 == 0) ? "even" : "odd";
    console.log(`The number 44 is ${result}.`)

    var arg1 = 0
    var result = ( arg1 %2 == 0) ? "even" : "odd";
    console.log(`The number 0 is ${result}.`)

    var arg1 = 101
    var result = ( arg1 %2 == 0) ? "even" : "odd";
    console.log(`The number 101 is ${result}.`)

}
result();



console.log(`--------------------------------------------------------------`);

var word_length = function(word1){
    var word1 = "JavaScript";
    var length = word1.length;
    var even_odd = ( word1.length %2 ==0) ? "even" : "odd" ;
    console.log(`The lenght of word "JavaScript" is ${length} & This is ${even_odd} length.` );
    
    var word1 = "Developer";
    var length = word1.length;
    var even_odd = ( word1.length %2 ==0) ? "even" : "odd" ;
    console.log(`The lenght of word "Developer" is ${length} & This is ${even_odd} length.` );

    var word1 = "Google";
    var length = word1.length;
    var even_odd = ( word1.length %2 ==0) ? "even" : "odd" ;
    console.log(`The lenght of word "Google" is ${length} & This is ${even_odd} length.` );
}
word_length();


console.log(`----------------------------------------------------------------------------`);

console.log(`                                Assignment 2`);
console.log(`----------------------------------------------------------------------------`);

console.log(`                        Marriage eligibility check`);
console.log(`----------------------------------------------------------------------------`);

function marriage_m(gender_m, age_m){
    var result = gender_m == "male" && age_m >=21 ? "Congratulations! You are eligible for Marriage." : "Sorry! You are not eligible for Marriage.";
    return (result);
}
function marriage(gender, age){
    var result = gender == "female" && age >=18 ? "Congratulations! You are eligible for Marriage." : "Sorry! You are not eligible for Marriage.";
    return (result);
}

console.log(`Condition Check for Male:`);
console.log(`-------------------------`);

var a1 = marriage_m("male", 30);
console.log(`Gender: Male, Age:30 :- ${a1}`);


var a1 = marriage_m("male", 20);
console.log(`Gender: Male, Age:20 :- ${a1}`);


console.log(`----------------------------------------------------------------------------`);
console.log(`Condition Check for Female:`);
console.log(`---------------------------`);

var a2 = marriage("female", 22);
console.log(`Gender: Female,  Age: 22 :- ${a2}`);
var a2 = marriage("female", 13);
console.log(`Gender: Female, Age: 13 :- ${a2}`);


console.log(`----------------------------------------------------------------------------`);

console.log(`                                Assignment 3`);
console.log(`----------------------------------------------------------------------------`);
console.log(`                        TCS Interview eligibility check`);
console.log(`----------------------------------------------------------------------------`);

var company_interview_criteria =function(grad_score, hsc_score, ssc_score, candidate_name){
    var a = "Congrats "  +candidate_name+"!  You are eligible for TCS Interview.";
    var b = "Unfortunately, You are not eligible for Interview.";
    return grad_score >= 70 && hsc_score >= 80 && ssc_score >= 90 ? a:b;
}
var result = company_interview_criteria(80,87,91, "Akash Shedage");
console.log(`Graduation Score = 80%, HSC Score = 87%, SSC Score = 91%`);
console.log(result);
console.log(`----------------------------------------------------------------------------`);

var result = company_interview_criteria(70,64,58, "Mohit Sharma");
console.log(`Graduation Score = 70%, HSC Score = 64%, SSC Score = 58%`);
console.log(result);
console.log(`----------------------------------------------------------------------------`);

var result = company_interview_criteria(85,78,90, "Rohan Oswal");
console.log(`Graduation Score = 85%, HSC Score = 78%, SSC Score = 90%`);
console.log(result);
console.log(`----------------------------------------------------------------------------`);
