console.log("------------------------------------------------------------------------------------------------");
console.log("                                        Assignment");
console.log("------------------------------------------------------------------------------------------------");

const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------------------------------");

let fruits_seasonal_0 = fruits_seasonal[0];
let fruits_seasonal_4 = fruits_seasonal[4];
console.log(`Fruits at position First:- ${fruits_seasonal_0}, Fruits at position Last :- ${fruits_seasonal_4}`);

console.log("------------------------------------------------------------------------------------------------");

const length_after_unshift = fruits_seasonal.unshift("Papaya");
console.log(`Adding new element "Papaya" before the element "Banana" :-`);
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------------------------------");

const push_after = fruits_seasonal.push("Pineapple");
console.log(`Adding new element "Pineapple" at the last Position :-`);
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------------------------------");

fruits_seasonal[2] = "Kiwi";
console.log(`Replace an element "Orange" with "Kiwi" :-`);
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------------------------------");

console.log(`Total fruits_seasonal:-  ${fruits_seasonal.length}`);

console.log("------------------------------------------------------------------------------------------------");

const slice_after_both_index = fruits_seasonal.slice(1, 4);  
console.log(`The elements starting from index (1 to 4):- ${slice_after_both_index}`);
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------------------------------");

const slice_after = fruits_seasonal.slice(4);
console.log(`Selected only last 3 elements:- ${slice_after}`);
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------------------------------");
console.log(`Traverse the array using loop:-`);
console.log("-------------------------------");

for (let index = 0; index < fruits_seasonal.length; index++) {
    const element = fruits_seasonal[index];
    console.log(`${element}`);
}
console.log("------------------------------------------------------------------------------------------------");
