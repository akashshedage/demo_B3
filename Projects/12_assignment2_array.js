console.log("------------------------------------------------------------------------------------------------");
console.log("                                        Assignment");
console.log("                                   Using Splice Method");
console.log("------------------------------------------------------------------------------------------------");

const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
console.log(fruits_seasonal);

console.log("------------------------------------------------------------------------------------------------");

let fruits_seasonal_first = fruits_seasonal[0];
let fruits_seasonal_last = fruits_seasonal[fruits_seasonal.length-1];
console.log(`Fruits at position First:- ${fruits_seasonal_first}, Fruits at position Last :- ${fruits_seasonal_last}`);

console.log("------------------------------------------------------------------------------------------------");


const after_spilce_insert = fruits_seasonal.splice(0, 0, "Papaya");
console.log(`Adding new element "Papaya" before the element "Banana" :-`);
console.log(`After Inserting array is: ${fruits_seasonal}`);

console.log("------------------------------------------------------------------------------------------------");

const after_spilce_remove = fruits_seasonal.splice(4, 1); 
console.log(`Removed Element :-  ${after_spilce_remove}`);
console.log(`After removing array is: ${fruits_seasonal}`);

console.log("------------------------------------------------------------------------------------------------");

const after_spilce_insert_last = fruits_seasonal.splice(5, 0, "Pineapple");
console.log(`Adding new element "Pineapple" at the last Position :-`);
console.log(`After Inserting array is: ${fruits_seasonal}`);

console.log("------------------------------------------------------------------------------------------------");

const after_spilce_insert_middle = fruits_seasonal.splice(4, 0, "Dragon Fruit");
console.log(`Adding new element "Dragon Fruit" before "Watermelon" :-`);
console.log(`After Inserting array is: ${fruits_seasonal}`);

console.log("------------------------------------------------------------------------------------------------");

 fruits_seasonal.splice(2, 1, "Kiwi");
 console.log(`Replacing an element "Orange" with "Kiwi" :-`);
 console.log(`After replace  array is: ${fruits_seasonal}`);

 console.log("------------------------------------------------------------------------------------------------");

 console.log(`Total Element available in the given array using for of loop :-`);
 console.log("----------------------");
 for (const element of fruits_seasonal) {
    console.log(element);
}

console.log("------------------------------------------------------------------------------------------------");

console.log(fruits_seasonal);
const splice_after_both_index = fruits_seasonal.splice(1, 4);  
console.log(`The elements starting from index (1 to 4):- ${splice_after_both_index}`);

console.log("------------------------------------------------------------------------------------------------");

const fruits_seasonal1 = ['Papaya', 'Banana', 'Kiwi', 'Apple', 'Dragon Fruit', 'Watermelon', 'Pineapple'];
console.log(fruits_seasonal1);
const splice_last_elements = fruits_seasonal1.splice(fruits_seasonal1.length-3);
console.log(`Selected last 3 element by using the length Proprty:-`);
console.log(`${splice_last_elements}`);