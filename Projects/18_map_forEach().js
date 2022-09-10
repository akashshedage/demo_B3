const map_students = new Map();
map_students.set(11, "Reshma Patil");
map_students.set(22, "Suresh Dhok");
map_students.set(33, "Sonal");
map_students.set(44, "Parveen");
map_students.set(55, "Ram");

console.log(map_students);
map_students.forEach(function(value, key){
    console.log(`${key} ${value}`);
});

console.log("-----------with Arrow function ");

map_students.forEach((value, key) =>{
    console.log(`${key} ${value}`);
});

console.log("-------------------------------");

map_students.forEach((value, key) =>{
    if(key%2 ==0){
        console.log(`${key} ${value}`);
    }
});

console.log("-------------------------------");

map_students.forEach((value, key) =>{
    if(value.startsWith("S")){
        console.log(`${key} ${value}`);
    }
});