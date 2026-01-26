//code 1
let t = performance.now();// performance.now() ye time deta hai milliseconds me jese hi ye line execute hoti hai
for(let i=0;i<100;i++){
    let para = document.createElement('p');// creating paragraph element or any other element using createElement
    para.textContent="this is paragraph"+i;// adding text to the created element
    document.body.appendChild(para);// adding the created element to the body of html using appendChild
}

let t1 = performance.now(); // ye bhi time deta hai milliseconds me jese hi ye line execute hoti hai
console.log("time taken to execute the loop is "+(t1 - t)+" milliseconds");

// code2
const t2 = performance.now();

let mydiv = document.createElement('div');// creating a div element to hold all the paragraphs
for(let i=0;i<100;i++){
    let para = document.createElement('p');
    para.textContent="this is paragraph"+i;
    mydiv.appendChild(para);// adding the created element to the div of html using appendChild

}
document.body.appendChild(mydiv);
const t3 = performance.now();

console.log("time taken to execute the loop is "+(t3 - t2)+" milliseconds");

// reflow and repaint
// jab bhi hum DOM me koi changes karte hai to browser ko firse wo pura page render karna padta hai jise reflow and repaint kehte hai
// reflow tab hota hai jab hum kisi element ki size ya position change karte hai
// repaint tab hota hai jab hum kisi element ka color ya background change karte hai
// reflow zyada costly operation hota hai repaint se isliye hamesha koshish karni chahiye ki reflow ko minimize karein
// isliye humne code2 me ek div banaya aur usme sare paragraphs add kiye fir last me us div ko body me add kiya jisse reflow and repaint kam hua aur performance better hui
// isliye code2 zyada efficient hai code1 se


// '''''reflow computationally expensive hota hai kyunki browser ko pura layout firse calculate karna padta hai isliye jitna 
// ho sake reflow se bacheinaur reflow ko ye bhi dekhna padhta hai ki kon sa 
// element kis position par hai aur uske hisab se hi wo elements ko render 
// karta hai esliye reflow ko minimize karna chahiye jese ki batch updates karna ya hidden elements par changes karna etc'''''.

// yaha explain kiya hai ki kisme kitne reflow and repaint the code1 mein aur code 2 mein

// ''''meri strategy thi ki code1 mein har iteration mein hum ek naya paragraph create kar rahe the aur usse directly body mein append kar rahe the
// jisse har iteration mein ek naya reflow aur repaint hota tha kyunki body ke andar naya element add ho raha tha
// isse performance impact hota tha kyunki browser ko baar baar pura page render karna padta tha''''

// '''' aab baat aati hai code 2 ki jisme humne ek div create kiya aur usme sare paragraphs ko append kiya
// fir last mein us div ko body mein append kiya jisse sirf ek baar reflow aur repaint hua
// isse performance better hui kyunki browser ko sirf ek baar pura page render karna pada''''.
// isliye code2 zyada efficient hai code1 se

// aab jo topic aata hai uske kehte hai DOM fragmentation
// '''ye light DOM manipulation technique hai jisme hum multiple DOM changes ko ek single operation mein combine karte hai
// esme hum krte ye hai ki jb bhi koi nya element add krte hai toh esme add krne ke liye
// hume na toh koi reflow krna pdta hai na hi repaint krna pdta hai'''

// '''lekin jb esko kisi document mein add krte hai tb hi reflow aur repaint hota hai ek baar aur yadi
// hum pragment mein add krte hai toh koi bhi reflow aur repaint nahi hota hai'''.


// code3
const t4 = performance.now();
let fragment = document.createDocumentFragment();// creating a document fragment    

for(let i=0;i<100;i++){
    let para = document.createElement('p');
    para.textContent="this is paragraph"+i;
    fragment.appendChild(para);// adding the created element to the fragment using appendChild
}
document.body.appendChild(fragment);// adding the fragment to the body of html using appendChild
const t5 = performance.now();

console.log("time taken to execute the loop is "+(t5 - t4)+" milliseconds");
// is code3 mein humne document fragment use kiya jisme humne sare paragraphs ko add kiya fir last mein us fragment ko body mein add kiya