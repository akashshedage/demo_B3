var global_variable = 100;

function outer_fun() {
    let local_variable = 200;
    let inner_fun = function(){
        const inner_variable = 300;
        console.log(inner_variable);
        console.log(local_variable);
        console.log(global_variable);
        
    }
    return inner_fun;
}
let inner = outer_fun();
inner();