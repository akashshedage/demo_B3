const employee = {
    emp_id: 123,
    emp_name: "Akash Shedage"
}
const address = {
    street: "AS CLUB",
    city: "Pune"
}

// cloning an object
const emp_cloned = Object.assign({}, employee);
console.log(emp_cloned);

// Merge an objects - employee and address 
const merged_obj =  Object.assign({}, employee, address);
console.log(merged_obj);
