console.log("----------------------------------------------------------------------------------------");
console.log("                                        Assignment");
console.log("----------------------------------------------------------------------------------------");

const teacher = {
    first_name: "Mohit",
    last_name: "Sharma",
    sub: "Angular",
    mobile: "1234567890",
    email: "ms123@gmail.com",
    degrees: {
        engineering: "CS",
        masters: "Web Design & Development",
        phd: "Adv Computing",
    },
    certificates: {
        certificate_1: 'Hacker Rank Participation',
        certificate_2: 'Certificate in IFE course',
        certificate_3: 'Certificate in Adv Programming',
    },
    total_degrees: function () {
        return `${this.degrees.engineering}, ${this.degrees.masters}, ${this.degrees.phd}`;
    }
}
console.log("Created object 'Teacher':- ");
console.log(teacher.first_name);
console.log(teacher.last_name);
console.log(teacher.sub);
console.log(teacher.mobile);
console.log(teacher.email);
console.log(teacher);

console.log("----------------------------------------------------------------------------------------");
console.log("Added nested object 'Degrees':- ");
console.log(teacher.degrees.engineering);
console.log(teacher.degrees.masters);
console.log(teacher.degrees.phd);
console.log(teacher.degrees);

console.log("----------------------------------------------------------------------------------------");
console.log("Added nested object 'Certificates':- ");
console.log(teacher.certificates.certificate_1);
console.log(teacher.certificates.certificate_2);
console.log(teacher.certificates.certificate_3);
console.log(teacher.certificates);

console.log("----------------------------------------------------------------------------------------");
console.log("Added Function value:- ");
let details = teacher.total_degrees();
console.log(`Teachers Degrees are:- ${details}`);

console.log("----------------------------------------------------------------------------------------");
console.log("Added New property 'City':- ");
teacher.city = "Pune"
console.log(teacher.city);

console.log("----------------------------------------------------------------------------------------");
console.log("Modified existing Mobile property:- ");
teacher.mobile = "7865412300";
console.log(teacher.mobile);
console.log(teacher);

console.log("----------------------------------------------------------------------------------------");
console.log("Deleted one certificate from nested object 'Certificates':- ");
delete teacher.certificates.certificate_3;
console.log(teacher.certificates);


console.log("----------------------------------------------------------------------------------------");
console.log("Added new certificate in nested object 'Certificates':- ");
teacher.certificates.certificate_3 = "Certification in AI";
console.log(teacher.certificates.certificate_3)

console.log("----------------------------------------------------------------------------------------");
console.log("The nested object 'Certificates' on console:- ");
console.log(teacher.certificates); 


console.log("----------------------------------------------------------------------------------------");

function count_chars(str) {
    count=0;
    for (var  index = 0; index < str.length; index++) 
    {
        var ch=str.charAt(index);
        if (ch=="a")
         {
            count++;
        }
        
        
    }
    
}
console.log(`Total Number of characters "a" available in string`)
count_chars(`I am Learning Javascript`)
console.log(`"I am Learning Javascript": ${count}`);
count_chars(`My favourite movie is Laggan`)
console.log(`"My favourite movie is Laggan": ${count}`);