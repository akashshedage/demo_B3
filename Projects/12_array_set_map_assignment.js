class Bank {
    bank_name
    location
    account_no
    ifsc
    interest_no
    constructor(bank_name, location, account_no, ifsc, interest_no) {
        this.bank_name = bank_name
        this.location = location
        this.account_no = account_no
        this.ifsc = ifsc
        this.interest_no = interest_no
    }
}
const axis_bank = new Bank("AXIX bank", "Mumbai", "1", "111", "8%")
const sbi_bank = new Bank("SBI bank", "Delhi", "2", "222", "5%")
const icici_bank = new Bank("ICICI bank", "Pune", "3", "333", "7%")
const kotak_bank = new Bank("Kotak bank", "Sangola", "4", "444", "6%")
const hdfc_bank = new Bank("HDFC bank", "Solapur", "5", "555", "4%")
const punjab_bank = new Bank("PUNJAB bank", "Hyadrabad", "6", "666", "9%")

const array_bank = [axis_bank, sbi_bank, icici_bank, kotak_bank,hdfc_bank,punjab_bank]
console.log("============ All bank details using Array=============");
for (const bank of array_bank) {
    console.log(`${bank.bank_name}  ${bank.location}`);
}

console.log("============ All bank details using Set=============");
const set_bank = new Set();
for (const bank of array_bank) {
    set_bank.add(bank);
}

for (const bank of set_bank) {
    console.log(`${bank.bank_name}  ${bank.ifsc}`);
}

console.log("============ All bank details using Map=============");
const map_bank = new Map();
map_bank.set(111, axis_bank);
map_bank.set(222, sbi_bank);
map_bank.set(333, icici_bank);
map_bank.set(444, kotak_bank);
map_bank.set(555, hdfc_bank);
map_bank.set(666, punjab_bank);

const map_keys = map_bank.keys(); // 111 222 333 444 555 666
for (const key of map_keys) {
    const bank = map_bank.get(key);
    console.log(`${bank.bank_name}  ${bank.location}   ${bank.interest_no}`);
}

// 4 From the array(Step A) find the object which has name → Kotak bank 

console.log("============ from the array(Step A) find the object which has name → Kotak bank =============");
for (const bank of array_bank) {
    if(bank.bank_name=="Kotak bank") {
        console.log(`${bank.bank_name}  ${bank.location}`);
    }
}