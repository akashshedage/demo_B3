var week_day_number = 1; // 1 to 7
switch (week_day_number) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wedenesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    case 5:
        console.log("Friday");
        break;

    case 6:
        console.log("Saturday");
        break;

    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid input");
        break;
}
console.log("Done");
console.log("--------------------------------------------------");

function check_day(week_day_number) {
    switch (week_day_number) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default:
            console.log("Invalid Input");
            break;
    }
}

check_day(5);

console.log("--------------------------------------------------");


function gender_check(gender) {
    switch (gender) {
        case "Male":
            console.log("You are Man");
        break;  
        case "Female":
            console.log("You are Woman");
            break;
        case "Others":
            console.log("You are Transgender");
            break;
        default:
            console.log("Invalid input");
            break;
    }

}
gender_check("Male");
// gender_check("Female");
// gender_check("Others");
// gender_check("abc");
// gender_check(null);
