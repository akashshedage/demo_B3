const number_set = new Set();
console.log(number_set);
number_set.add(11);
number_set.add(22);
number_set.add(33);
number_set.add(22); // Adding duplicate element
number_set.add(44);
number_set.add(55);

console.log(number_set);
console.log("-----------size---------------");

console.log(`Size of set is ${number_set.size}`);

console.log("------------------------------------");

// number_set.clear(); // method for clear set
// console.log(number_set);

console.log("-------------Delete element from set-------------------");
const isDeleted = number_set.delete(22);
console.log(isDeleted);
console.log(number_set);

console.log("-----------has()---------------");

const isAvailable = number_set.has(33)
console.log(isAvailable);

console.log("-----------typeof Set---------------");
console.log(typeof number_set);

console.log("-----------Traversing using for of loop---------------");

for (const element of number_set){
    console.log(element);
}

console.log("-----------Remove duplicate from array---------------");

const array_number = [11, 55, 3, 11, 40, 77, 55, 3];

const my_set = new Set();

for (const element of array_number) {
    my_set.add(element)
}
console.log(array_number);
console.log(my_set);