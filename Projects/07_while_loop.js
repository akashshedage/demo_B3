//print numbers from 1  to 10
var index = 0;
while (index <= 10) {
    console.log(index);
     index++;
}

console.log("---------------------------");


var counter = 0;
do {
    console.log(counter);
    counter++;
} while (counter <= 10);

console.log("---------------------------");

var str = "JavaScript"; //aeiou   Element
var strLength = str.length;
var index = 0;
var count = 0;
while(index<str.length){
    var char = str.charAt(index);
    if(char =="a" || char == "A" || char =="e" || char =="E" ) {
        count++;
    }
}


