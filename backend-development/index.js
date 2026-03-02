const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res)=> {
    console.log("Hello World");
    res.send("Hello World");
})

//requests 

//get request
app.get("/get", (req, res)=> {
    console.log("Get Request");
    res.send("Get Request");
})
// post request
app.post("/post",(req, res)=>{
    console.log("post request")
    res.send("post request")
})
// put request
app.put("/put", (req,res)=>{
    console.log("put request")
    res.send("put request")
})
// delete request
app.delete("/delete", (req,res)=>{
    console.log("delete request")
    res.send("delete request")
})

app.listen(port, ()=> {
    console.log(`Server is running on port http://localhost:${port}`);
})