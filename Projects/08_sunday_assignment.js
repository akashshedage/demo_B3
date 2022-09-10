const my_string = "Hard work always pays back";
let counter = 0;
function count_space(string_with_spaces) {
    for (let index = 0; index < string_with_spaces.length; index++) {
        let char = string_with_spaces.charAt(index);
        if(char == " "){
            counter = counter+1;
        }
    }
}
// count_space(my_string);
// console.log(`Total spaces is ${counter}`);

console.log('----------------------------------------------------------');

let reverse_str = "";
function reverse_string(string_to_reverse) {
    for (let index = string_to_reverse.length-1; index >=0; index--) {
        let char = string_to_reverse.charAt(index);
        reverse_str = reverse_str.concat(char);
    }
}
reverse_string(my_string);
console.log(`Reverse String - ${reverse_str}`)


console.log('----------------------------------------------------------');

// let string1 = "Hard work always pays back";
// let string2 = "Soon I will be Angular IT Champ";
// let reveres_string = "";
// function reverse_string(str) {
//     for (let index = str.length - 1; index >= 0; index--) {
//         reveres_string = reveres_string.concat(str.charAt(index));
//     }
//     console.log(reveres_string);
// }
// console.log(`String is : ${string1}`);
// reverse_string(string1);
// reveres_string = "";
// console.log(`-----------------------------------------------------`);
// console.log(`String is : ${string2}`);
// reverse_string(string2);
// console.log(`-----------------------------------------------------`);