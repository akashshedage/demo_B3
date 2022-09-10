function add_three_numbers(num1, num2, num3) {
    console.log("START");
     var result = num1 + num2 + num3;
     console.log(result);
     console.log("END");
     return result;
}
console.log(add_three_numbers(10, 20, 30));

console.log("----------------------------------");

var num1 = 100;
var num2 = 40;

var result = num1 * num2;

console.log(`Result ${result}`);

console.log("----------------------------------");

var num1 = 100;
var num2 = 41;

var result = num1 % num2;
var res = num2 % 2;

console.log(`Result ${res}`);
console.log(`Result ${num1%2}`);

console.log("----------------------------------");

var given_number = 5;
var add_1 = given_number + 1;
console.log(`Add ${add_1}`);

console.log("----------------------------------");

var given_number =  5;
var add_1 = ++given_number;  //given_number + 1; 
console.log(`Add ${add_1}`);

console.log("----------------------------------");

var num1 = 100;
var num2 = 41;

console.log(`== operator ${num1 == num2}`);

console.log(`!= Operator ${num1 != num2}`);

console.log(`> Operator ${num1 > num2}`); // > Greater than

console.log(`> Operator ${num1 < num2}`); // < less than

console.log(`<= Operator ${num1 <= num2}`); // <= less than equal

console.log(`>= Operator ${num1 >= num2}`); // >= greater than equals

console.log("----------------------------------");

 // var bool_result = true && false;    // AND - &&   OR - ||    NOT - !
 var boolean_1 = false;
 var boolean_2 = true;

 console.log(` AND Operator  ${boolean_1 && boolean_2}`);  // AND - &&

 console.log(` OR Operator  ${boolean_1 || boolean_2}`); //  OR - || 

 console.log(` NOT Operator  ${!boolean_2}`);  // NOT - !

console.log("----------------------------------");
//Assignment Operators

var num3 = 100;
num3 += 10;
console.log(num3);

console.log("----------------------------------");

console.log("           Assignment");

console.log("----------------------------------");

console.log(`1. ${0==``}`);
console.log(`2. ${0==`0`}`);
console.log(`3. ${0==false}`);
console.log(`4. ${null==undefined}`);
console.log(`5. ${1==[1]}`);
console.log(`6. ${1==true}`);
console.log(`7. ${1==`1`}`)  



console.log("--------------------------------------------------------------------------------------");

console.log("                                   Assignment");

console.log("--------------------------------------------------------------------------------------");


function word_length_square( word1, word2, word3 ){
      var word1 = "JavaScript";
      var length1 = word1.length;
      var square1 = length1 * length1;

      var word2 = "Google";
      var length2 = word2.length;
      var square2 = word2.length * word2.length;

      var word3 = "Developer";
      var length3 = word3.length;
      var square3 = word3.length * word3.length;


      console.log(`1. Length of word JavaScript is  "${length1}" and its length square is "${square1}"`);
      console.log(`2. Length of word Google is  "${length2}" and its length square is "${square2}"`);
      console.log(`3. Length of word Developer is  "${length3}" and its length square is "${square3}"`);


}
word_length_square();


 console.log("--------------------------------------------------------------------------------------");


 function given_length(){
    var given_string = "I am Angular Developer";
    console.log(`Given String : ${given_string}`);

    var rev= given_string.split("").reverse().join("");
    console.log(`The Reverse String is : ${rev}`);
    console.log("--------------------------------------------------------------------------------------");


    console.log(`The Length of the string is : ${given_string.length}`);

var words=given_string.split(" ");
var word_counts=words.length;

console.log(`The Total number of words in string is : ${word_counts}`);

var divide_str=given_string.length / word_counts;
console.log(`The Total length Divide by the total words : ${divide_str}`);

var multiply_str = given_string.length * word_counts;
console.log(`The String length Multiple by the total words : ${multiply_str}`);



 }
 given_length();



