const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(array_roll_numbers);

console.log("--------------------------------------------------------");

array_roll_numbers.reverse();
console.log(`Reverse the array :-`);
console.log(array_roll_numbers);

console.log("--------------------------------------------------------");

array_roll_numbers.sort();
console.log(`Sort() method as it is without any custom sorting logic :-`);
console.log(array_roll_numbers);

console.log("--------------------------------------------------------");

array_roll_numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
console.log(`Sort the array in ascending order :-`);
console.log(array_roll_numbers);

console.log("--------------------------------------------------------");

array_roll_numbers.sort((a, b) => {
    return a > b ? -1 : 1;
});
console.log(`Sort the array in descending order with using only sort() :-`);
console.log(array_roll_numbers);

console.log("--------------------------------------------------------");

const ascending_sort1 = array_roll_numbers.sort((a, b) => {
    return a > b ? 1 : -1;
});
const reverse_array = ascending_sort1.reverse();
console.log(`Sort the array in descending order with using reverse() method :-`);
console.log(reverse_array);

console.log("--------------------------------------------------------");

let greatestNum = array_roll_numbers[0];
for (let index = 1; index < array_roll_numbers.length; index++) {
    if (array_roll_numbers[index] > greatestNum) {
        greatestNum = array_roll_numbers[index];
    }
};
console.log(`Greatest number from the array :- ${greatestNum}`);

console.log("--------------------------------------------------------");

let smallestNum = array_roll_numbers[0];
for (let index = 1; index < array_roll_numbers.length; index++) {
    if (array_roll_numbers[index] < smallestNum) {
        smallestNum = array_roll_numbers[index];
    }
};
console.log(`Smallest number from the array :- ${smallestNum}`);

console.log("--------------------------------------------------------");

const array_new = [...new Set(array_roll_numbers)];
console.log(`Remove duplicates from array:- `);
console.log(array_new);

// function duplicate(arr){
//     let uniqueArr = [...new Set(arr)];

//     console.log(uniqueArr);
// }
// duplicate(array_roll_numbers);

// function removeDuplicates(array_roll_numbers) {
//     return array_roll_numbers.filter((item, index) => array_roll_numbers.indexOf(item) === index);
// }
// // const ascending_sort2 = array_roll_numbers.sort((a,b) => {
// //     return a>b ? 1 : -1;
// //     });
// console.log(`Remove duplicates from array:- `);
// console.log(removeDuplicates(array_roll_numbers));

// const array_roll_numbers0 = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
// function removeDuplicates(array_roll_numbers0) {
//     return array_roll_numbers0.filter((item,index) => array_roll_numbers0.indexOf(item) === index);
// };
// console.log(`Remove duplicates from array:- `);
// console.log(removeDuplicates(array_roll_numbers0));