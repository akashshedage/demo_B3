console.log("----------------------------------------------------------------------------------------");
console.log("                                      Assignment");
console.log("----------------------------------------------------------------------------------------");
console.log("                                      Q.1");
console.log("----------------------------------------------------------------------------------------");
class vehicle {
    brand
    model
    color
    price
    launch_year
    constructor(brand, model, color, price, launch_year) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.launch_year = launch_year;
    }
}
const vehicle_tata = new vehicle("Tata", "Nexon", "Blue", "15L", 2021);
const vehicle_ford = new vehicle("Ford", "Endeavour", "Red", "30L", 2018);
const vehicle_mahindra = new vehicle("Mahindra", "Thar", "Black", "14L", 2022);
const vehicle_hyundai = new vehicle("Hyundai", "Verana", "White", "18L", 2015);
const vehicle_honda = new vehicle("Honda", "City", "Grey", "20L", 2016);

console.log(vehicle_tata);
console.log(vehicle_ford);
console.log(vehicle_mahindra);
console.log(vehicle_hyundai);
console.log(vehicle_honda);

console.log("----------------------------------------------------------------------------------------");
console.log("                                      Q.2");
console.log("----------------------------------------------------------------------------------------");

class college {
    college_name
    university
    courses
    address
    constructor(college_name, university, courses, address) {
        this.college_name = college_name;
        this.university = university;
        this.courses = courses;
        this.address = address;
    }
}
const college_mit = new college("MIT", "Pune", "BCA , MCA", "Kothrud,Pune");
const college_rit = new college("RIT", "Kolhapur", "CS, IT", "Islampur");
const college_vjit = new college("VJIT", "Mumbai", "Civil, Mechanical", "Mumbai");
const college_coep = new college("COEP", "PUNE", "E&TC", "Shivajinagar,Pune");

console.log(college_mit);
console.log(college_rit);
console.log(college_vjit);
console.log(college_coep);

console.log("----------------------------------------------------------------------------------------");
console.log("                                      Q.3");
console.log("----------------------------------------------------------------------------------------");

let college_location = {
    MIT: "Pune",
    VJIT: "Mumbai",
    IIM: "Bangaluru",
    AMITY: "Panvel",
    VIT: "Pune"
}
for (const key in college_location) {
    if (Object.hasOwnProperty.call(college_location, key)) {
        const element = college_location[key];
        console.log(`The College "${key}" is locatated in "${element}".`);
    }
}
console.log("----------------------------------------------------------------------------------------");
console.log("                                      Q.3.1");
console.log("----------------------------------------------------------------------------------------");

for (const key in college_mit) {
    if (Object.hasOwnProperty.call(college_mit, key)) {
        const element = college_mit[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("----------------------------------------------------------------------------------------");

for (const key in college_rit) {
    if (Object.hasOwnProperty.call(college_rit, key)) {
        const element = college_rit[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("----------------------------------------------------------------------------------------");

for (const key in college_vjit) {
    if (Object.hasOwnProperty.call(college_vjit, key)) {
        const element = college_vjit[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("----------------------------------------------------------------------------------------");

for (const key in college_coep) {
    if (Object.hasOwnProperty.call(college_coep, key)) {
        const element = college_coep[key];
        console.log(`${key}:- ${element}`);
    }
}
console.log("----------------------------------------------------------------------------------------");

console.log("                                      Q.4");
console.log("----------------------------------------------------------------------------------------");



let n1 = 0, n2 = 1, nextTerm;
console.log('Fibonacci Series till 7th occurrence:-');
for (let i = 0; i <= 7; i++) {
    console.log(n1);
    nextTerm = (n1) + (n2);
    n1 = n2;
    n2 = nextTerm;
}


// function fibonacci(num) {
// console.log('Fibonacci Series till 7th occurrence:-');
// let n1 = 0, n2 = 1, nextTerm;
// for (let i = 0; i < num; i++) {
//     console.log(n1);
//     nextTerm = (n1) + (n2);
//     n1 = n2;
//     n2 = nextTerm;
// }
// }
// fibonacci(7);

// var var1=0, var2=1 ;
// console.log(" fibonacci series : ");
// console.log(var1);
// console.log(var2);
// var counter, sum;
// for(counter=2; counter<=7; counter++)
// {
// sum=var1+var2;
// console.log(sum);
// var1=var2;
// var2=sum;
// }
 