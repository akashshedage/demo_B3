console.log("---------------------------------------------------------------------------------------");
console.log("------------------ Assignment A :- Using Object.assign() ------------------------------");
console.log("---------------------------------------------------------------------------------------");

const bank =
{
 Name:"SBI BANK",
 Branch:"Shivajinagar",
 Account_No:"1280",
 IFSC_code:"SBI007"
}

const bank_location =
{
 Street:"SB Road",
 City:"Pune",
 Pincode:"414600"
}

console.log(`Log details using Object.assign :-`);

const new_bank=Object.assign({},bank)
const new_bank_location=Object.assign({} ,bank_location)
console.log(new_bank);
console.log(new_bank_location);

console.log("---------------------------------------------------------------------------------------");


console.log(`Log details using Spread Operator :-`);

const new_bank1 = {...bank}
const new_bank_location1={...bank_location}
console.log(new_bank1);
console.log(new_bank_location1);

console.log("---------------------------------------------------------------------------------------");

const rate_of_interest =
{
    Home_loan_interest:"7.5%",
    Personal_loan_interest:"5.5%",
    Due_loan_interest:"3.5%",
}

console.log(`Merge : Bank, Bank_location, Rate_of_interest :-`);

const sbi_details=Object.assign({}, bank, rate_of_interest, bank_location)
console.log(sbi_details);

console.log("---------------------------------------------------------------------------------------");
