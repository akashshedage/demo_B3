/*console.log("Hello JavaScript....")
console.log("Soon we will be friends....")*/

var girlName; // variable declaration
girlName = "Jenny"; // variable initialization
var boyName = "Billgates"; // variable declaration and initialization on the same line
console.log(girlName);
console.log(boyName); 


/* var oldVar = "Apple";
var newVar = "Mango";
console.log("Before Swapping");
console.log(oldVar, newVar);

var temp = newVar;

oldVar = newVar;
newVar = temp;

console.log ("After Swapping");
console.log (oldVar, newVar); */

var oldVar = "Apple"; // Mango
var newVar = "Mango"; // Apple
console.log("Before swapping");
console.log(oldVar, newVar); // Apple Mango

var temp = oldVar; //  temp= "Mango"   oldVar="Apple"     newVar="Mango";
 
oldVar = newVar;  //  temp= "Mango"   oldVar=Apple    newVar = Apple
newVar = temp;     //  temp= "Mango"   oldVar=Mango    newVar = Apple
console.log("After swapping");
console.log(oldVar, newVar);

/*var bottle = "Water";
bottle = "Milk"; // 
console.log(bottle);*/

