import express from "express";
const router = express.Router();

router.get("/get", (req, res)=> {
    res.send("Get Request");
})
// send file
router.get("/", (req, res)=> {
    console.log("Hello World");
    res.sendFile("./dummy.html", {root: __dirname});
})

//requests 

//get request
router.get("/get", (req, res)=> {
    console.log("Get Request");
    res.send("Get Request");
})
// post request
router.post("/post",(req, res)=>{
    console.log("post request")
    res.send("post request")
})
// put request
router.put("/put", (req,res)=>{
    console.log("put request")
    res.send("put request")
})
// delete request
router.delete("/delete", (req,res)=>{
    console.log("delete request")
    res.send("delete request")
})

export default router;