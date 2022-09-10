class person{
    first_name
    second_name
    age
    address
    constructor(first_name, last_name, age, address){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
        this.address = address;
    }
    details() {
        console.log(` ${this.first_name} ${this.last_name} ${this.age} ${this.address}`);
    }

}
const person_mohit = new person("Mohit", "Sharma", 31, "PUNE Wakad");
const person_akash = new person("Akash", "Shedage", 25, "PUNE Katraj");
console.log(person_mohit);
console.log(person_akash);

person_mohit.details();
person_akash.details();

let my_res = person_mohit instanceof person;
console.log(my_res);

// let my_res1 = person_akash instanceof person;
// console.log(my_res);