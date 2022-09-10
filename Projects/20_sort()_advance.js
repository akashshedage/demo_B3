const array_numbers = [1, 41, 4, 16, 2, 292, 117, 9, 271];

// array_numbers.sort(function(a, b) { // a =1 b =41
//     if(a>b) { 
//         return 1;
//     }else if(a<b){
//         return -1;
//     }else{
//         return 0;
//     }
// });

console.log("===== Sorting an array in Ascending order=======");

array_numbers.sort((a, b)=> { // a =1 b =41
   return a>b ? 1 : -1;
});
console.log(array_numbers);


console.log("===== Sorting an array in Descending order using sort()=======");
array_numbers.sort((a, b)=> {
 return a>b ? -1 : 1;
})
console.log(array_numbers);

console.log("------------------------------------------------------------------");

class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const empAnil = new Employee(22,"Anil","IT",50000,"TCS");
const empRadha = new Employee(66,"Radha","HR",74000,"Wipro");
const empRishi = new Employee(99,"Rishi","Finance",47000,"TCS");
const empSonali = new Employee(33,"Sonali","Finance",45000,"Infy");
const empMonika = new Employee(88,"Monika","IT",40000,"Wipro");
const empVinay = new Employee(77,"Vinayak","IT",75000,"TCS");
const empMahi = new Employee(11,"Mahesh","HR",75000,"Infy");
 
const array_employees= [ empAnil, empRadha, empRishi, empSonali, empMonika, empVinay, empMahi ];

console.log("======= Before sorting==========");
array_employees.forEach((employee)=>{
    console.log(`${employee.emp_id} ${employee.emp_name} ${employee.emp_company} ${employee.emp_dept}`);
});

//Sort an employee array in ascending order by employee ID
console.log("======= Sort an employee array in ascending order by employee ID==========");
array_employees.sort((employee1, employee2)=>{
    return employee1.emp_id > employee2.emp_id ? 1 : -1;
});

array_employees.forEach((employee)=>{
    console.log(`${employee.emp_id} ${employee.emp_name} ${employee.emp_company} ${employee.emp_dept}`);
});

//Sort an employee array in Descending order by employee ID
console.log("======= Sort an employee array in Descending order by employee ID==========");
array_employees.sort((employee1, employee2)=>{
    return employee1.emp_id > employee2.emp_id ? -1 : 1;
});

array_employees.forEach((employee)=>{
    console.log(`${employee.emp_id} ${employee.emp_name} ${employee.emp_company} ${employee.emp_dept}`);
});
