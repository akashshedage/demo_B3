console.log(`------------------------Assignment C----------------------------`);
console.log(`----------------------------------------------------------------`);

const array_numbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];

const sum = array_numbers.reduce((currentTotal, value) => {
    return currentTotal + value;
}, 0);
console.log(`Sum of all numbers :- ${sum}`);

console.log(`----------------------------------------------------------------`);

const sum_even_num = array_numbers.filter((element) => {
    return element%2==0;
}).reduce((current_total,element) => {
    return current_total + element;
});
console.log(`Sum of all Even Numbers :- ${sum_even_num}`);
