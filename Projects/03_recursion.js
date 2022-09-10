console.log("====== Recursion Example========");
let result = 1;
function recursion(number) { // 4 3 2 1 0
    if(number==0) {
        return result;
    }
     return number * recursion(number-1); // 5 * 4 * 3 * 2 * 1
}

let fact = recursion(5);
console.log(fact);
