class Employee {
    emp_id
    emp_name
    emp_dept
    emp_salary
    emp_company
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company) {
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee (22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee (33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee (55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee (66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee (77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee (88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee (99, "Mahesh", "HR", 85000, "Infy");

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi]

for (const emp of array_employees) {
    console.log(emp);

}

console.log(`----------------------------------------------------------------------------------------------------------------`);
console.log(`1. Employees Working in "TCS" :-`);
for (const element of array_employees) {
    if(element.emp_company == "TCS") {
        console.log(`Name :- ${element.emp_name}, Company :- ${element.emp_company}`);

    }
}


console.log(`----------------------------------------------------------------------------------------------------------------`);
console.log(`2. Employees from "Finance" Department :-`);
for (const element of array_employees) {
    if(element.emp_dept == "Finance") {
        console.log(`Name :- ${element.emp_name}, Department :- ${element.emp_dept}`);

    }
}

console.log(`----------------------------------------------------------------------------------------------------------------`);
console.log(`3. Employee Details whose name starts with "R" :-`);
 for (const emp of array_employees) {
    if(emp.emp_name.startsWith("R")) {
        console.log(emp);
    }
}

console.log(`----------------------------------------------------------------------------------------------------------------`);
console.log(`4. The Employee salary is greater than 70000 :-`);
for (const salary of array_employees) {
    if(salary.emp_salary > 70000) {
        console.log(`Name :- ${salary.emp_name}, Company Name:- ${salary.emp_company}, Salary:- ${salary.emp_salary}`);
    }
}
console.log(`----------------------------------------------------------------------------------------------------------------`);

console.log(`5. The Employee salary is greater than or equal to 50000 and from IT departments :-`);
for (const emp of array_employees) {
    if(emp.emp_salary >= 50000 && emp.emp_dept == "IT") {
        console.log(emp);
    }
}
console.log(`----------------------------------------------------------------------------------------------------------------`);

console.log(`6. Employee Details of company "Infy" :-`);
for (const emp of array_employees) {
    if(emp.emp_company == "Infy") {
        console.log(emp);
    }
}

console.log(`----------------------------------------------------------------------------------------------------------------`);