console.log("---------------Before----------------");

function show_notification() {
    console.log("Notification");
}

setTimeout(show_notification, 5000); //1 sec = 1000 millisecond

console.log("------------After setTimeout-------------");

// Before
// Notification
// After

setTimeout(() => {
    console.log("Inside arrow function");
}, 7000);
