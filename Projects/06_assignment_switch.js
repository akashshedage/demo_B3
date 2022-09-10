console.log("-----------------");
console.log("  Assignment 1");
console.log("-----------------");
console.log("Quetion 1:-");
console.log("----------");
function check_month(month_number) {
    switch (month_number) {
        case 1:
            console.log("January");
            break;
        case 2:
            console.log("February");
            break;
        case 3:
            console.log("March");
            break;
        case 4:
            console.log("April");
            break;
        case 5: 
            console.log("May");
            break;
        case 6:
            console.log("June");
            break;
        case 7:
            console.log("July");
            break;
        case 8:
            console.log("August");
            break;
        case 9:
            console.log("September");
            break;
        case 10:
            console.log("October");
            break;
        case 11:
            console.log("November");
            break;
        case 12:
            console.log("December");
            break;

        default:
            console.log("Invalid Input");
            break;
    }
}
check_month(1);
check_month(2);
check_month(3);
check_month(4);
check_month(5);
check_month(6);
check_month(7);
check_month(8);
check_month(9);
check_month(10);
check_month(11);
check_month(12);

console.log("-----------------");
console.log("Quetion 2:-");
console.log("Case statements without Break statments:-");
console.log("----------");

function gender_check(gender) {
    switch (gender) {
        case "Male":
            console.log("You are Man");
        
        case "Female":
            console.log("You are Woman");
            
        case "Others":
            console.log("You are Transgender");
    }

}
gender_check("Male");