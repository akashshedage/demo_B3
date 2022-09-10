const fruits = ["Apple", "Mango", "Orange", "Strawberry", "Grapes", "Mango", "Orange"];
console.log(fruits);
console.log(`Type of array:- ${typeof fruits}`);

console.log(`Total fruits:-  ${fruits.length}`);

// Accessing an array element
let fruits_0 = fruits[0];
let fruits_3 = fruits[3];
let length_fruits = fruits.length - 1;
console.log(`Fruits at position 0:- ${fruits_0},   3:- ${fruits_3}, Last element:- ${fruits[length_fruits]}`);

// let fruits_3 = fruits[3];
// console.log(`Fruits at position 3:-  ${fruits_3}`);


// update element from an array
fruits[0] = "Strawberry";


// Traversing an array
console.log(`--------------Total Elements in the array - fruits ----------------------------`);

for (let index = 0; index < fruits.length; index++) {
    const element = fruits[index];
    console.log(`${element}`);
}

console.log(`------------------------------------------`);

const include = fruits.includes("Grapes");
console.log(`include ("Grapes"):- ${include}`);

console.log(`------------------------------------------`);
const mango_index = fruits.indexOf("Mango");
console.log(`fruits.indexOf("Mango"):-  ${mango_index}`);

console.log(`------------------------------------------`);


// Adding element at the begining position(Inserts new elements at the start of an array, and returns the new length of the array.)
const length_after_unshift = fruits.unshift("Watermelon");
console.log(`fruits.unshift("Watermelon"):- ${length_after_unshift}`);
console.log(fruits);

console.log(`------------------------------------------`);
// remove element at the begining position(Removes the first element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.)
const shhift_after = fruits.shift();
console.log(`fruits.shift():- ${shhift_after}`);
console.log(fruits);

console.log(`------------------------------------------`);
// remove element at the End position(Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.)
const pop_after = fruits.pop();
console.log(`fruits.pop()==> ${pop_after}`);
console.log(fruits);

console.log(`------------------------------------------`);

//Adding element at the End position (Appends new elements to the end of an array, and returns the new length of the array.)
const push_after = fruits.push("Papaya");
console.log(`fruits.push()==>  ${push_after}`);
console.log(fruits);

console.log(`------------------------------------------`);

// Selecting middle  elements
const slice_after = fruits.slice(3);
console.log(`fruits.slice(3):- ${slice_after}`);
console.log(fruits);

console.log(`------------------------------------------`);
// Selecting 
const slice_after_both_index = fruits.slice(3, 5);  //you can also use (3, -2)
console.log(`fruits.slice(3, 5):- ${slice_after_both_index}`);
console.log(fruits);


console.log(`-------------------------------------Splice Method to Remove element------------------------------`);

const my_list = [20, 3, 4, 5, 7, 67, 100, 1, 5];
console.log(my_list);


// Removing element using splice
// const after_spilce_5 = my_list.splice(5); //first method
const after_spilce_5 = my_list.splice(4, 2); //second method // where 4 is index and 2 is count element that to would be deleted
console.log(`Removed Element  ${after_spilce_5}`);
console.log(`After removing array is: ${my_list}`);

console.log(`----------------------------------------------------------------------------------`);
console.log(`-------------------------------------Splice Method to INSERT element------------------------------`);

const number_array = [20, 3, 4, 5, 7, 67, 100, 1, 5];
console.log(number_array);

// Inserting just one element that is 555 at the index position 3, Here 0 means don't replace
const after_spilce_insert = number_array.splice(3, 0, 555);
console.log(`Insert Element  ${after_spilce_insert}`);
console.log(`After Inserting array is: ${number_array}`);

(`----------------------------------------------------------------------------------`);

//Insert three element [333, 444, 777] at second position (index = 2) and don't replace any existing element
number_array.splice(2, 0, 333, 444, 777);
console.log(`After Inserting three array is: ${number_array}`);

console.log(`----------------------------------------------------------------------------------`);
console.log(`-------------------------------------Splice Method to Replace element------------------------------`);

const array_nums = [20, 3, 4, 5, 7, 67, 100, 1, 5];
console.log(array_nums);
array_nums.splice(2, 1, 999);// Replace second position element (index =2) with value 999
console.log(`After replace  array is: ${array_nums}`);

console.log(`----------------------------------------------------------------------------------`);
array_nums.splice(2, 2, 999); //Replace from 3rd index with value 888 and consider 2 element 
console.log(`After replace  array is: ${array_nums}`);

console.log(`----------------------------------------------------------------------------------`);
console.log(`-------------------------------------For in loop to traverse array------------------------------`);

const array_my = [20, 3, 4, 5, 7, 67, 100, 1, 5];
for (const key in array_my) {
    console.log(array_my[key]);
}

console.log(`----------------------------------------------------------------------------------`);
console.log(`-------------------------------------For of loop to traverse array------------------------------`);

for (const element of array_my) {
    console.log(element);

}

console.log(`----------------------------------------------------------------------------------`);
console.log(`-------------------------------------Join() Method ------------------------------`);
const student_names = ["Sonal", "Ravi", "Parveen", "Sagar", "Akash"];
console.log(student_names);
const joined_student = student_names.join(); // Default seprator is comma (,)
console.log(joined_student);

const joined_student_sep = student_names.join("::"); //  seprator is ::
console.log(joined_student_sep);

console.log(`----------------------------------------------------------------------------------`);
console.log(`-------------------------------------Concat () Method ------------------------------`);

const array_1 = [1, 2, 3, 4];
const array_2 = [5, 3, 10, 40];
// Combines two or more arrays. This method returns a new array without modifyning any existing arrays.
const combined_array = array_1.concat(array_2);
console.log(combined_array);

console.log(`----------------------------------------------------------------------------------`);
console.log(`-------------------------------------Resize an Array ------------------------------`);

const array_3 = [1, 2, 3, 4, 6, 77, 88];
console.log(array_3.length);
array_3.length = 3;
console.log("After Resize");
console.log(array_3);