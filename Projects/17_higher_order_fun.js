function do_assignment(callback){
    console.log(" Completing assignment by my own from scratch");
    callback();
    let inner = function() {
        console.log("Dheere challo ji");
    }
    return inner;
}
function copy_assignment(callback) {
    console.log(" Hello.. I am lazy. let me copy assignment");
}
 let inner_fun = do_assignment(copy_assignment);
 inner_fun();
// do_assignment(copy_assignment)();  // () Another way to call inner
