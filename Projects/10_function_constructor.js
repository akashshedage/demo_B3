
// function person(first_name, city){
//     this.first_name = first_name;
//     this.city = city;
// }
// const person_akash= new person("Akash","Pune"); 
// const person_srushti= new person("Srushti","Karad"); 

// console.log(`${person_akash.first_name}`);
// console.log(`${person_akash.city}`);

function Person(first_name, city) {
    this.first_name = first_name;
    this.city = city;
  }
  const person_anil = new Person("Anil", "Pune");
  const person_radha = new Person("Radha", "Mumbai");
  const person_sunil = new Person("Sunil", "Pune");
  const person_ash = new Person("Ashwini", "Mumbai");
  const person_neha = new Person("Neha", "Mumbai");
  
  console.log(`${person_anil.first_name}`);
  console.log(`${person_anil.city}`);
  
  // Prototype wala
  Person.prototype.country = "US";
  console.log(`${person_anil.country}`);
  console.log(`${person_neha.country}`);
  