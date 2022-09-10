console.log(`-----------------------------------------------------------------------------------------------------------------------`);
console.log(`----------------------------------------------Assignment (Array_Set_Map)-----------------------------------------------`);
console.log(`-----------------------------------------------------------------------------------------------------------------------`);

class Bank {
    bank_name
    location
    acoount_no
    ifsc
    interest_rate
    constructor(bank_name, location, acoount_no, ifsc, interest_rate) {
        this.bank_name = bank_name;
        this.location = location;
        this.acoount_no = acoount_no;
        this.ifsc = ifsc;
        this.interest_rate = interest_rate;
    }
}
const axis_bank = new Bank("Axis Bank", "Pune", "1234567890", "AXI111", "8%");
const sbi_bank = new Bank("SBI Bank", "Mumbai", "7894561230", "SBI123", "11%");
const icici_bank = new Bank("ICICI Bank", "Solapur", "4569871230", "ICI456", "13%");
const kotak_bank = new Bank("KOTAK Bank", "Kolhapur", "7891234560", "KOT789", "9%");
const hdfc_bank = new Bank("HDFC Bank", "Satara", "1237894560", "HDF007", "12%");
const punjab_bank = new Bank("PUNJAB Bank", "Sangli", "1478523690", "PUN555", "10%");

console.log(axis_bank);
console.log(sbi_bank);
console.log(icici_bank);
console.log(kotak_bank);
console.log(hdfc_bank);
console.log(punjab_bank);

console.log(`-----------------------------------------------------------------------------------------------------------------------`);

const array_bank = [axis_bank, sbi_bank, icici_bank, kotak_bank, hdfc_bank, punjab_bank]
console.log("--------------------------------------------Bank details using Array---------------------------------------------------");
for (const bank of array_bank) {
    console.log(`Bank Name:- ${bank.bank_name}, Location:- ${bank.location}`);
}

console.log("----------------------------------------------Bank details using Set---------------------------------------------------");
const set_bank = new Set();
for (const bank of array_bank) {
    set_bank.add(bank);
}

for (const bank of set_bank) {
    console.log(`Bank Name:- ${bank.bank_name}, IFSC Code:- ${bank.ifsc}`);
}

console.log("----------------------------------------------Bank details using Map---------------------------------------------------");
const map_bank = new Map();
map_bank.set(1234567890, axis_bank);
map_bank.set(7894561230, sbi_bank);
map_bank.set(4569871230, icici_bank);
map_bank.set(7891234560, kotak_bank);
map_bank.set(1237894560, hdfc_bank);
map_bank.set(1478523690, punjab_bank);

const map_keys = map_bank.keys();
for (const key of map_keys) {
    const bank = map_bank.get(key);
    console.log(`Bank Name:- ${bank.bank_name}, Location:- ${bank.location}, Account No:- ${bank.acoount_no}, IFSC Code:- ${bank.ifsc}, Interest Rate:- ${bank.interest_rate}`);
}
console.log(`-----------------------------------------------------------------------------------------------------------------------`);

console.log(`-----------------------From the array(Step A) find the object which has name → Axis Bank-------------------------------`);
for (const bank of array_bank) {
    if(bank.bank_name=="Axis Bank") {
        console.log(`Bank Name:- ${bank.bank_name}, Location:- ${bank.location}, Account No:- ${bank.acoount_no}, IFSC Code:- ${bank.ifsc}, Interest Rate:- ${bank.interest_rate}`);
    }
}


// class Bank {
//     bank_name
//     location
//     account_no
//     ifsc_no
//     inttrest_rate

//     constructor(bank_name, location, account_no, ifsc_no, inttrest_rate) {
//         this.bank_name = bank_name,
//             this.location = location,
//             this.account_no = account_no,
//             this.ifsc_no = ifsc_no,
//             this.inttrest_rate = inttrest_rate

//     }
// }
// const axis_bank = new Bank("Axis Bank", "Pune", "1234567890", "AXI111", "8%");
// const sbi_bank = new Bank("SBI Bank", "Mumbai", "7894561230", "SBI123", "11%");
// const icici_bank = new Bank("ICICI Bank", "Solapur", "4569871230", "ICI456", "13%");
// const kotak_bank = new Bank("KOTAK Bank", "Kolhapur", "7891234560", "KOT789", "9%");
// const hdfc_bank = new Bank("HDFC Bank", "Satara", "1237894560", "HDF007", "12%");
// const punjab_bank = new Bank("PUNJAB Bank", "Sangli", "1478523690", "PUN555", "10%");

// console.log(axis_bank);
// console.log(sbi_bank);
// console.log(icici_bank);
// console.log(kotak_bank);
// console.log(hdfc_bank);
// console.log(punjab_bank);


// console.log(`-----------------------------------------------------------------------------------------------`);
// console.log(`-----------------------------------------Object In Array---------------------------------------`);
// console.log(`-----------------------------------------------------------------------------------------------`);

// let axis_bank_array = [];

// for (const key in axis_bank) {
//     if (Object.hasOwnProperty.call(axis_bank, key)) {
//         const element = axis_bank[key];
//         axis_bank_array.push(element);

//     }
// }
// console.log(`Bank Name :- ${axis_bank_array[0]} , Location :-${axis_bank_array[1]}`);

// let sbi_bank_array = [];
// for (const key in sbi_bank) {
//     if (Object.hasOwnProperty.call(sbi_bank, key)) {
//         const element = sbi_bank[key];
//         sbi_bank_array.push(element);

//     }
// }
// console.log(`Bank Name :- ${sbi_bank_array[0]} , Location :-${sbi_bank_array[1]}`);

// let icici_bank_array = [];
// for (const key in icici_bank) {
//     if (Object.hasOwnProperty.call(icici_bank, key)) {
//         const element = icici_bank[key];
//         icici_bank_array.push(element);

//     }
// }
// console.log(`Bank Name :- ${icici_bank_array[0]} , Location :-${icici_bank_array[1]}`);

// let kotak_bank_array = [];
// for (const key in kotak_bank) {
//     if (Object.hasOwnProperty.call(kotak_bank, key)) {
//         const element = kotak_bank[key];
//         kotak_bank_array.push(element);

//     }
// }
// console.log(`Bank Name :- ${kotak_bank_array[0]} , Location :-${kotak_bank_array[1]}`);

// let hdfc_bank_array = [];
// for (const key in hdfc_bank) {
//     if (Object.hasOwnProperty.call(hdfc_bank, key)) {
//         const element = hdfc_bank[key];
//         hdfc_bank_array.push(element);

//     }
// }
// console.log(`Bank Name :- ${hdfc_bank_array[0]} , Location :-${hdfc_bank_array[1]}`);

// let punjab_bank_array = [];
// for (const key in punjab_bank) {
//     if (Object.hasOwnProperty.call(punjab_bank, key)) {
//         const element = punjab_bank[key];
//         punjab_bank_array.push(element);

//     }
// }
// console.log(`Bank Name :- ${punjab_bank_array[0]} , Location :-${punjab_bank_array[1]}`);

// console.log(`-----------------------------------------------------------------------------------------------`);
// console.log(`-----------------------------------------Object In Set-----------------------------------------`);
// console.log(`-----------------------------------------------------------------------------------------------`);



// let axis_bank_set = new Set();

// for (const key in axis_bank) {
//     if (Object.hasOwnProperty.call(axis_bank, key)) {
//         const element = axis_bank[key];
//         axis_bank_set.add(element);
//     }
// }
// const [first]= axis_bank_set;      // first element from set by destucturing
// const [,,,forth] =axis_bank_set;   // forth element from set by destructuring

// // for (const element of axis_bank_set) {
// //       console.log(element);

// //     }
// console.log(`Bank name :-- ${first} , IFSC code :-`,forth)

// let sbi_bank_set = new Set();

// for (const key in sbi_bank) {
//     if (Object.hasOwnProperty.call(sbi_bank, key)) {
//         const element = sbi_bank[key];
//         sbi_bank_set.add(element);
//     }
// }
// var [first1]= sbi_bank_set;      // first element from set by destucturing
// var [,,,forth1] =sbi_bank_set;   // foorth element from set by destructuring

// // for (const element of axis_bank_set) {
// //       console.log(element);

// //     }
// console.log(`Bank name :-- ${first1} , IFSC code :-`,forth1)



// let icici_bank_set = new Set();

// for (const key in icici_bank) {
//     if (Object.hasOwnProperty.call(icici_bank, key)) {
//         const element = icici_bank[key];
//         icici_bank_set.add(element);
//     }
// }
// var [first1]= icici_bank_set;      // first element from set by destucturing
// var [,,,forth1] =icici_bank_set;   // foorth element from set by destructuring

// // for (const element of axis_bank_set) {
// //       console.log(element);

// //     }
// console.log(`Bank name :-- ${first1} , IFSC code :-`,forth1)



// let kotak_bank_set = new Set();

// for (const key in kotak_bank) {
//     if (Object.hasOwnProperty.call(kotak_bank, key)) {
//         const element = kotak_bank[key];
//         kotak_bank_set.add(element);
//     }
// }
// var [first1]= kotak_bank_set;      // first element from set by destucturing
// var [,,,forth1] =kotak_bank_set;   // foorth element from set by destructuring

// // for (const element of axis_bank_set) {
// //       console.log(element);

// //     }
// console.log(`Bank name :-- ${first1} , IFSC code :-`,forth1)



// let hdfc_bank_set = new Set();

// for (const key in hdfc_bank) {
//     if (Object.hasOwnProperty.call(hdfc_bank, key)) {
//         const element = hdfc_bank[key];
//         hdfc_bank_set.add(element);
//     }
// }
// var [first1]= hdfc_bank_set;      // first element from set by destucturing
// var [,,,forth1] =hdfc_bank_set;   // foorth element from set by destructuring

// // for (const element of axis_bank_set) {
// //       console.log(element);

// //     }
// console.log(`Bank name :-- ${first1} , IFSC code :-`,forth1)



// let punjab_bank_set = new Set();

// for (const key in punjab_bank) {
//     if (Object.hasOwnProperty.call(punjab_bank, key)) {
//         const element = punjab_bank[key];
//         punjab_bank_set.add(element);
//     }
// }
// var [first1]= punjab_bank_set;      // first element from set by destucturing
// var [,,,forth1] =punjab_bank_set;   // foorth element from set by destructuring

// //  for (const element of axis_bank_set) {
// //      console.log(element);

// // }
// console.log(`Bank name :-- ${first1} , IFSC code :-`,forth1);



// // class Bank {
// //     bank_name
// //     location
// //     account_no
// //     ifsc
// //     interest_rate

// //     constructor(bank_name, location, account_no, ifsc, interest_rate) {
// //         this.bank_name = bank_name;
// //         this.location = location;
// //         this.account_no = account_no;
// //         this.ifsc = ifsc;
// //         this.interest_rate = interest_rate;
// //     }
// // }

// // const axis_bank =  new Bank("Axis", "Pune", 186754, "AXIS0001", "8%");
// // const sbi_bank =  new Bank("SBI", "Mumbai", 456374, "SBI0023", "5%");
// // const icici_bank =  new Bank("ICICI", "Aurangabad", 847562, "ICICI0001", "4%");
// // const kotak_bank =  new Bank("KOTAK", "Aundh", 874444, "KOTAK0001", "6%");
// // const hdfc_bank =  new Bank("HDFC", "Sangvi", 578454, "HDFC0001", "9%");
// // const punjab_bank =  new Bank("PUNJAB", "Hinjewadi", 186754, "AXIS0001", "8%");

// // console.log(`Objects : `);
// // console.log(`------------------------------------------------------------------`);
// // console.log(axis_bank);
// // console.log(sbi_bank);
// // console.log(icici_bank);
// // console.log(kotak_bank);
// // console.log(hdfc_bank);
// // console.log(punjab_bank);


// // const set_bank = new Set();
// // set_bank.add(axis_bank);
// // set_bank.add(sbi_bank);
// // set_bank.add(icici_bank);
// // set_bank.add(kotak_bank);
// // set_bank.add(hdfc_bank);
// // set_bank.add(punjab_bank);



// // const bank_map = new Map();
// // bank_map.set("Axis Bank", "Pune", 400000186754, "AXIS0001", "8%");
// // bank_map.set("SBI Bank", "Mumbai", 234563456374, "SBI0023", "5%");
// // bank_map.set("ICICI Bank", "Aurangabad", 345678847562, "ICICI0001", "4%");
// // bank_map.set("KOTAK Bank", "Aundh", 453212874444, "KOTAK0001", "6%");
// // bank_map.set("HDFC Bank", "Sangvi", 098765578454, "HDFC0001", "9%");
// // bank_map.set("PUNJAB Bank", "Hinjewadi", 345678186754, "AXIS0001", "8%");


// // console.log(`1. Bank Name and Location from an Array: `);
// // console.log(`------------------------------------------------------------------`);
// // for (const element of bank_map) {
// // console.log(`Bank Name : ${element[0]}     Location : ${element[1]}`);
// // }

// // console.log(`------------------------------------------------------------------`);

// // console.log(`2. Traverse of Bank Name and IFSC Code from an Array : `);
// // console.log(`------------------------------------------------------------------`);
// // for (const element1 of set_bank) {
// //     console.log(`Bank Name : ${element1.bank_name}    IFSC Code : ${element1.ifsc}`);

// // }
// // console.log(`------------------------------------------------------------------`);
// // console.log(bank_map);
// // console.log(`------------------------------------------------------------------`);


// // const key_map = bank_map.keys();
// // for (const keys of key_map) {
// //     const obj = bank_map.get(keys);
// //     console.log(bank_map);
// // }
