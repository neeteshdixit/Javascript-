// asynchronous mein hota ye hai ki ek kaam complete hone ke baad hi dusra kaam start hota hai
// aur synchronous mein dono kaam ek sath start ho jate hain aur pehla kaam complete hone ka wait nahi karta dusre kaam ke liye

//''''asynchronous programming mein hum callbacks, promises, ya async/await ka use karte hain taaki hum code ko non-blocking bana sakein aur multiple tasks ko ek sath handle kar sakein 
// eske liye hum event loop ka use karte hain jo ki ek mechanism hai jo asynchronous operations ko handle karta hai aur ensure karta hai ki code efficiently execute ho''''.

// event loop ke teen main components
// 1. Call Stack: Ye ek data structure hai jo function calls ko track karta hai. Jab bhi koi function call hota hai, wo call stack mein push ho jata hai aur jab function complete hota hai, to wo pop ho jata hai.
// 2. Browser APIs: Ye APIs asynchronous operations ko handle karti hain, jaise ki setTimeout, DOM events, HTTP requests, etc. Jab koi asynchronous operation complete hota hai, to uska callback function browser APIs ke through event loop ko notify karta hai.
// 3. Callback Queue (Task Queue): Ye ek queue hai jahan par completed asynchronous operations ke callback functions store hote hain. Jab call stack empty hota hai, to event loop callback queue se functions ko call stack mein push karta hai taaki wo execute ho sakein.


console.log("Start");
setTimeout(function() {
    console.log("This is asynchronous");
},5000);
console.log("End");

// Output:
// Start
// End
// This is asynchronous (after 5 seconds)