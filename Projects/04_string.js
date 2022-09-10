var greet = "Good Morning";
var char_in_greet = greet.charAt(3);
console.log(char_in_greet);

console.log("------------------------------------");


var fname = "Mohit";
var lname = " Shama";
var fullName = fname.concat(lname);
console.log(fullName);

console.log("------------------------------------");


var position = greet.indexOf("M");
console.log(position);

console.log("------------------------------------");


var uppercase = greet.toLocaleUpperCase();
console.log(uppercase);

console.log("------------------------------------");


var message = "  Good evening     ";
console.log("Before trim() " + message.length);

var trimmedString = message.trim();

console.log("After trim() " + trimmedString.length);

var search = greet.search("Mor");
console.log(search);

var slice = greet.slice(5, 8);
console.log(slice);

console.log("------------------------------------");
// Split Method---
greet = "Hello Good morning buddy";
 var words = greet.split(" ");
 console.log(words.length);

console.log("---------------------------------------------");

console.log("                             Assignment 2");
console.log("--------------------------------------------------------------------------------");
console.log(`1. String : "  Hey you are doing good, keep it up   "`);
console.log("--------------------------------------------------------------------------------");
greet = "  Hey you are doing good, keep it up  ";
var words = greet.split("");
console.log("2. Length of String is :",words.length);

console.log("--------------------------------------------------------------------------------");
 var message = `  "Hey you are doing good, keep it up"  `;
 console.log("3. After Removing Space : "+message.trim());
 
console.log("--------------------------------------------------------------------------------");
  var len = greet.length;

  var strt=greet.trim();

  var new_len = strt.length;

 var diff = len-new_len;

console.log(`4. Total space Removed : ${diff}`)

console.log("--------------------------------------------------------------------------------");
 var first_character = "H";
 var last_character = "P";
 console.log(`5. First Character : ${first_character} , Last Character : ${last_character}`);

console.log("--------------------------------------------------------------------------------");
greet = "Hey you are doing good, keep it up";
var words = greet.split(" ");
console.log(`6. Total number of words : ${words.length}`);

console.log("--------------------------------------------------------------------------------");
 var position = greet.indexOf("good");
 console.log(`7. Index of good : ${greet.indexOf("good")}`);

console.log("--------------------------------------------------------------------------------");
var substring = greet.substring(22);
console.log(`8. Substring starting from Index 22 :`+ substring);

console.log("--------------------------------------------------------------------------------");
console.log(`9. Is string ends with word "up" :` + greet.endsWith("up"));

console.log("--------------------------------------------------------------------------------");

console.log(`10. Is string starts with word "Hey" after trimming :` +  greet.startsWith("Hey"));

console.log("--------------------------------------------------------------------------------");





