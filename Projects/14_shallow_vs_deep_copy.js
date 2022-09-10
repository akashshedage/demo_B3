let value_original = 100;
let value_copy = value_original;
console.log(value_original, value_copy);

value_original = 400;
console.log(value_original, value_copy);

const array_original = [1, 2, 3, 4, 6, 77, 88 ];
// let array_copy = array_original; // Shallow copy - Not recommended
console.log("========Deep copy using spread operator=========");
let array_copy = [...array_original]; // Deep Copy
console.log(array_original);
console.log(array_copy);

array_original.push(9999);

console.log(array_original);
console.log(array_copy);

console.log("========== Object Cloning using spread operator for simple object I mean non nested object=============");
const person_elon = {
    id: 123,
    full_name : "Elon Musk",
    country: "US"
}
// const person_stew = person_elon; // Shallow copy
const person_stew = {...person_elon}; // Deep Copy
console.log(person_elon);
console.log(person_stew);
person_stew.full_name = "Stew Job"; // Updated 
console.log(`Elon Person ${person_elon.id} ${person_elon.full_name} ${person_elon.country}`);
console.log(`Stew Person ${person_stew.id} ${person_stew.full_name} ${person_stew.country}`);

console.log(" ============== Deep Copy for the nested object ==============");
const stud_anil = {
    id: 444,
    full_name: "Anil Mohite",
    marks: {
        math: 95,
        english: 45,
        prog: 44
    }
}
// console.log(` Student Anil ==> ${stud_anil.id} ${stud_anil.full_name} Marks==> Math ${stud_anil.marks.math},  English ${stud_anil.marks.english}, Prog: ${stud_anil.marks.prog}` );

// const stud_sak = stud_anil; // Shallow Copy
// const stud_sak = { ...stud_anil } // For marks reference, it will do shallow copy that is the problem
const stud_sak = JSON.parse(JSON.stringify(stud_anil));
stud_sak.id = 777; // Updated
stud_sak.full_name = "Sakalen Atar"; // Update
stud_sak.marks.prog = 99; // update --> 
console.log(` Student Anil ==> ${stud_anil.id} ${stud_anil.full_name} Marks==> Math ${stud_anil.marks.math},  English ${stud_anil.marks.english}, Prog: ${stud_anil.marks.prog}` );
console.log(` Student Sakalen ==> ${stud_sak.id} ${stud_sak.full_name} Marks==> Math ${stud_sak.marks.math},  English ${stud_sak.marks.english}, Prog: ${stud_sak.marks.prog}` );

