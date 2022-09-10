const array_numbers = [20, 30, 4, 5, 6, 7, 8];

const array_filtered = array_numbers.filter((value) => {
    return value >10;
});
console.log(array_filtered);

console.log("----------------------");


class Employee {

    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

// Filter out TCS employees into one array
let array_employees_tcs = [];
array_employees.forEach(employee => {
    if (employee.emp_company=="TCS") {
        array_employees_tcs.push(employee);
    }
});

array_employees_tcs.forEach((employee)=> {
    console.log(employee.emp_name, employee.emp_company);
});

// console.log("----------------------");

// const array_emp_tcs =  array_employees.filter( (employee) => {
//     return employee.emp_company=="TCS";
// });
// array_emp_tcs.forEach((employee)=> {
//     console.log(employee.emp_name, employee.emp_company);
// });

console.log("----------------------");
const array_emp_tcs =  array_employees.filter( employee =>  employee.emp_company=="TCS")
.map((employee)=> employee.emp_name);

console.log(array_emp_tcs);



console.log("----------------------");

console.log("6. Find the average salary for 'IT' department : ");
let average = 0;
let salary_sum =0;
array_emps.filter((employee) => {
    if(employee.emp_dept=="IT") {
        salary_sum = salary_sum + employee.emp_salary;
       
    }
})
console.log(salary_sum);

const average_sal = array_emps.reduce((employee) => {
    average = salary_sum / 3;
})
console.log(average);