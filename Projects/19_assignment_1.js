console.log(`------------------------Assignment A----------------------------`);
console.log(`----------------------------------------------------------------`);


const array_numbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log(`Add 10 into each element with using forEach :-`);

const add_array = array_numbers.map((element)=>{
    return element+10;
    });
    console.log(`${add_array}`);
console.log(`----------------------------------------------------------------`);

console.log(`Square the each array element :-`);

const square_of_array = array_numbers.map((element)=>{
    return element * element;
    });
    console.log(`${square_of_array}`);
console.log(`----------------------------------------------------------------`);

console.log(`Add the index value into it's corresponding each array element :-`);

const add_index_value = array_numbers.map((element,index)=>{
    return element + index;
    });
    console.log(`${add_index_value}`);