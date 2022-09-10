let age = 31;
const person = {
    first_name: 'Sachin',
    last_name: 'Agalave',
    mobile: "4567 890 9999",
    adhar: "123 34 56 789 09",
    address: {
        city: "Pune",
        state: "MH",
        country: "India",
        district: "PUNE",
        taluka: "PUNE",
        village: "Roshangoan",
        pin_code: 431202,
    },
    details: function () {
        return `Person Details ${this.first_name} ${this.last_name} ${this.adhar} ${this.mobile}`;
    }
}
console.log(person.first_name); // Access the property
console.log(person["adhar"]);

person.pan_card = "CDBPK45678"; // Adding new property
console.log(person);

person.first_name = "Master Blaster"; // Update 
console.log(person);

delete person.adhar; // delete property
console.log(person);

console.log(person.is_married);

let details = person.details();
console.log(details);

console.log(typeof person.address);
console.log(person.address.city, person.address.village);
person.address.pin_code = 431203;
console.log(person.address);


console.log("----------------------------------------------------------------------------------------");

const student = {
    first_name: 'Sachin',
    last_name: 'Agalave',
    mobile: "4567 890 9999",
    adhar: "123 34 56 789 09",
}

const student_keys = Object.keys(student);
 console.log(student_keys);

 const student_values = Object.values(student);
 console.log(student_values);

const student_entries = Object.entries(student);
console.log(student_entries);

for (const key in student) {
    if (Object.hasOwnProperty.call(student, key)) {
        const element = student[key];
        console.log(`${key}  ${element}`);
    }
}


const is_first_name_available = "first_name" in student;
console.log(`Is Available ${is_first_name_available} `);
