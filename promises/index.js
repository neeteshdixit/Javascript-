// promise
// promise ek aisa object hai jo ki apke asynchronous peace of code ko handle karta hai.
// ye teen states mein ho sakta hai: pending, fulfilled, ya rejected.
// jab promise pending state mein hota hai, to iska matlab hai ki operation abhi complete nahi hua hai.
// jab promise fulfilled state mein hota hai, to iska matlab hai ki operation successfully complete ho gaya hai aur humein expected result mil gaya hai.
// jab promise rejected state mein hota hai, to iska matlab hai ki operation fail ho gaya hai aur humein error mil gaya hai.


// let firstPromise = new Promise((resolve, reject) => {
//     console.log("Promise is pending");
//     //resolve("Promise is fulfilled");
//    // reject(new Error("Internal server error"))
//    function sayMyName(){
//     console.log("My name is neetesh")
// }

// setTimeout(sayMyName , 1000)

// resolve(1);
// }); 

// // asynchronous code 

// function sayMyName(){
//     console.log("My name is neetesh")
// }

// setTimeout(sayMyName , 1000)

// then and catch key 

// fullfilled =====> then()
// failure =====> catch()

// let promise1 = new Promise((resolve, reject) => {
//     let success = false;

//     if (success) {
//         resolve("promise fulfilled");
//     } else {
//         reject("error fetched");
//     }
// });

// promise1
// .then((message) => {
//     console.log("message " + message);
// })
// .catch((error) => {
//     console.log("error " + error);
// });

// promice all

let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello"), 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello 1"), 1000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello 2"), 1000);
});

let promise4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("hello 3"), 1000);
});

Promise.all([promise1, promise, promise3, promise4])
.then((values) => {
    console.log("values:", values);
    return "All promises resolved!";
})
.then((message) => {
    console.log(message);
})
.catch((error) => {
    console.log("error:", error);
});
