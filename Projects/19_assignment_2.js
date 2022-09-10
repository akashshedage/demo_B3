console.log(`------------------------Assignment B----------------------------`);
console.log(`----------------------------------------------------------------`);

const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const array_greater = array_numbers.filter((value) => {
    return value >50;
});
console.log(`Numbers which are greater than 50 :- ${array_greater}`);
console.log(`----------------------------------------------------------------`);


const array_even = array_numbers.filter((value) => {
    return value %2 ==0;
});
console.log(`Even Numbers :- ${array_even}`);
console.log(`----------------------------------------------------------------`);

const array_odd = array_numbers.filter((value) => {
    return value %2 !==0;
});
console.log(`Odd Numbers :- ${array_odd}`);
console.log(`----------------------------------------------------------------`);

const array_multiple = array_numbers.filter((value) => {
    return value %5 ==0;
});
console.log(`Numbers which are multiple of 5 :- ${array_multiple}`);
console.log(`----------------------------------------------------------------`);

const array_between = array_numbers.filter((value) => {
    return value >=20 && value <= 50;
});
console.log(`Numbers between 20 and 50 :- ${array_between}`);
console.log(`----------------------------------------------------------------`);