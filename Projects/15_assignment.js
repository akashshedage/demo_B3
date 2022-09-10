console.log("-----------------------------------------------------------");
console.log("                        Assignment 1");
console.log("-----------------------------------------------------------");

console.log(`Update values 55 & 66 in cloned array before 90 :-`);

const array_nums = [20, 3, 4, 56, 90, 400, 49];
console.log(`Original Array :- ${array_nums}`);

const splice_array_nums = array_nums.splice(4, 0, 55, 66)
let array_copy = [array_nums]; 
console.log(`Cloned Array :- ${array_copy}`);

console.log("-----------------------------------------------------------");

console.log("Deep Clone using Spread Operator :- ");
console.log(`Original Array :- ${array_nums}`);
let array_deep_copy = [...array_nums]; 
array_deep_copy.push(10, 25);
console.log(`Deep Clone Array : ${array_deep_copy}`);

console.log(`-------------------------------------------------------------`);

const array_even = [2, 30, 14, 8];
const combined_array = array_nums.concat(array_even);
console.log(`Concat Array using Spread Operator :- `);
const combined_spread = [...combined_array];
console.log(`${combined_spread}`);
console.log(`-------------------------------------------------------------`);

const employee_info = {
    emp_id: 27,
    emp_name: "John Doe",
    salary: {
        july_month: "40,0000INR",
        aug_month: "50,0000INR",
        jun_month: "65,0000INR"
    },
    adrress: {
        locality: {
            colony: "OM Vrindavan Society",
            street: "Kanch Pokli, 431202",
        },
        city: "Mumbai",
        state: "Maharashtra",
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(`Employee Details: `);
console.log(`Adrress => ${employee_info.adrress.locality.colony} ${employee_info.adrress.locality.street}`);
console.log(`city => ${employee_info.adrress.city}, state =>  ${employee_info.adrress.state}, country => ${employee_info.adrress.country}`);
console.log(`Mobiles => ${employee_info.mobiles}`);

console.log(`-------------------------------------------------------------`);
console.log(`Update cloned object street:- `);
let value_original = "Kanch Pokli, 431202";
let value_copy = value_original;
console.log(`Street before update :- ${value_original}`);

value_original = "Pune, 431202";
console.log(`Street After update :- ${value_original}`);
console.log(`-------------------------------------------------------------`);
console.log(`Update Mobiles :- `);
let mobile_original = "+91 8600 3456 88,1800- 4567 32,+91- 9096 5678 77";
let mobile_copy = mobile_original;
console.log(`Mobiles before Update :- ${mobile_original}`);

mobile_original = "+91 9168 4593 63, 1800- 4567 32, +91- 9096 5678 77";
console.log(`Mobiles After Update :- ${mobile_original}`);

console.log(`-------------------------------------------------------------`);

console.log(`Update Using JSON.stringify:`);
const employee_details = JSON.parse(JSON.stringify(employee_info));
employee_details.salary.july_month = "80,000INR";
employee_details.adrress.country = "United Kingdom";
console.log(`Original July month Salary :- ${employee_info.salary.july_month}`);
console.log(`Original Country           :- ${employee_info.adrress.country}`);


console.log(`Updated July month Salary  :- ${employee_details.salary.july_month}`);
console.log(`Updated Country            :- ${employee_details.adrress.country}`);