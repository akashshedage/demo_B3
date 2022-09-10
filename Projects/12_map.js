const map_student = new Map();
map_student.set(11, "Anil");
map_student.set(22, "Sunil");
map_student.set(33, "Madhav");
map_student.set(44, "Jeny");

console.log(map_student);

console.log("==========Size of Map===================");
console.log(`Size of Map is ${map_student.size}`);

console.log("==========Adding duplicate key===================");
map_student.set(22, "Sunil");
map_student.set(22, "Billgates");
map_student.set(77, "Billgates");

console.log(map_student);

console.log("==========Accessing element from Map ===================");
const value_22 = map_student.get(22);
console.log(`Value for key 22 is ${value_22}`);

const value_99 = map_student.get(99);
console.log(`Value for key 22 is ${value_99}`);

console.log("==========Delete entry from Map ===================");
map_student.delete(33);
console.log(map_student);

console.log("==========keys () ===================");
const keys_of_map = map_student.keys();
console.log(keys_of_map);

console.log("========= values() ==========");
const values_of_map = map_student.values();
console.log(values_of_map);

console.log("========= Entries() ==========");
const entries_of_map = map_student.entries();
console.log(entries_of_map);

console.log("========= Traversing Map using for of loop ==========");
for (const element of map_student) {
    console.log(element);
    console.log(element[0], element[1]);
}

// console.log("========= Traversing using forEach ==========");
// map_student.forEach((key, value) => {
//     console.log(key, value);
// })


console.log("-----------------------Sort()----------------------------");

const array_number = [1, 44, 3, 89, 6, 347, 8];
array_number.sort((a,b) => a>b ? 1 : -1);
console.log(array_number);

