let is_notes_ready = true;
let promise_to_share_notes = new Promise (function (resolve, reject) {
    if(is_notes_ready){
        resolve("Guys.. here is the notes for todys's session");
    }else {
        reject ("Sorry guys, I didn't get time to share notes");
    }
}).then(function(on_success){
    console.log(on_success);
    console.log("Thank you Sir.");
}).catch(function(on_reject){
    console.log(on_reject);
    console.log("Why Sir... NP..I will prepare my notes");
}).finally(function (){
    console.log("Finally. I have my notes...");
})

// console.log("-------------------Using Arrow---------------------");

// let is_notes_ready = true;
// let promise_to_share_notes = new Promise((resolve, reject) => {
//         if (is_notes_ready) {
//             resolve("Guys.. here is the notes for today's session");
//         } else {
//             reject("Sorry guys, I didn't get time to share notes");
//         }
//     })
//     .then((on_success) => console.log(on_success))
//     .catch((on_reject) => console.log(on_reject))
//     .finally(() => console.log("Finally I have my notes...."));
