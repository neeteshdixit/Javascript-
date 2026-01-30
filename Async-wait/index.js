// async function getData(){
//     setTimeout(function(){
//         console.log("I am inside the Time out block")
//     },5000);
// }

// getData();

// await ---> 
// fetch api => promise karna ho tbhi hum async ka use karenge asyncfuction hamesa ek promise return krta ha 

// async function getData(){

//     // get request - async
//     // let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//      let response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     //parse json - async
//     let data = response.json()
//     console.log(response);
// }
// getData();

// scenario:
// prepare url / api endpoint-> sync
// await // fetch data --> network call -> async
// process data -> sync

const myHeaders = new Headers();
myHeaders.append("Content-type","application-json");

const url = "https://jsonplaceholder.typicode.com//posts";

const options = {
    method: "POST",
    body:JSON.stringify({usernme:"neetesh"}),
    headers:myHeaders,
};

async function getData(){
    const response = await fetch(url);
    let data = await response.json();
    console.log("get data",data);
}

async function postData(){
    const response = await fetch(url,options);
    let data = await response.json();
    console.log("post the data",data);
}

postData();
getData();





