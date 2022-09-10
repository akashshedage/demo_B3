console.log("----------------------------------------------------------------------------------------------------------");
console.log("----------------------------------- Assignment C :- Use only forEach() -----------------------------------");
console.log("----------------------------------------------------------------------------------------------------------");

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
const emp_rishi = new Employee(55, "Rishi", "Finance",47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

console.log(`"TCS" employee details :-`); 

array_employees.forEach((employee) => {
    if (employee.emp_company == "TCS") {
        console.log(`Name: ${employee.emp_name}, Company: ${employee.emp_company}`);
    }
});
console.log("----------------------------------------------------------------------------------------------------------");
console.log(`Employee Details of salary greater than or equal to 50000 :- `);

array_employees.forEach((employee)=>{
    
    if(employee.emp_salary >= 50000) {
        console.log(employee);
    }
});

console.log("----------------------------------------------------------------------------------------------------------");
let sum_of_salary = 0;
array_employees.forEach((employee) => {
   sum_of_salary = sum_of_salary + employee.emp_salary;
});

console.log(`Sum of all Employees salary is :- ${sum_of_salary}`);

console.log("----------------------------------------------------------------------------------------------------------");

let average_of_salary =0;
array_employees.forEach((employee) => {
    average_of_salary = sum_of_salary / (array_employees.length);
});
console.log(`Average of Employee Salary is :- ${average_of_salary}`);

console.log("----------------------------------------------------------------------------------------------------------");
console.log(`'IT' and 'HR' department employees whose salary is greater than or equal to 75000 :-`);
array_employees.forEach((employee) => {
    if(employee.emp_dept == "IT","HR" && employee.emp_salary >= 75000) {
        console.log(employee);
    }
});