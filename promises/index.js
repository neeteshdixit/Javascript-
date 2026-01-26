// promise
// promise ek aisa object hai jo ki apke asynchronous peace of code ko handle karta hai.
// ye teen states mein ho sakta hai: pending, fulfilled, ya rejected.
// jab promise pending state mein hota hai, to iska matlab hai ki operation abhi complete nahi hua hai.
// jab promise fulfilled state mein hota hai, to iska matlab hai ki operation successfully complete ho gaya hai aur humein expected result mil gaya hai.
// jab promise rejected state mein hota hai, to iska matlab hai ki operation fail ho gaya hai aur humein error mil gaya hai.


let firstPromise = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    resolve("Promise is fulfilled");
});