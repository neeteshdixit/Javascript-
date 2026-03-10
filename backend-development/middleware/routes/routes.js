import express from "express";
const router = express.Router();

// middleware
    const auth = function(req, res, next){
        console.log("I am inside auth wala middleware");

        // i am adding dummy user for your help
        req.user = {
            name: "John Doe",
            role: "admin",
            email: "john.doe@example.com"
        };

        if(req.user){
            // if a valid user
        next();
    }
    else{
        // if not a valid user
        res.json({
            success: false,
            message: "Unauthorized"
        })
    }
    }

    const isAAdmin = function(req, res, next){
        console.log("I am inside isAdmin wala middleware");
        if(req.user.role === "admin"){
            // if user is admin
            next();
        }
        else{
            // if user is not admin
            res.json({
                success: false,
                message: "Access denied. You must be an admin to perform this action."
            });
        }
    };

    const isStudent= (req,res,next)=>{
        console.log("I am inside isStudent wala middleware");
        if(req.user.role === "student"){
            // if user is student
            next();
        }
        else{
            // if user is not student
            res.json({
                success: false,
                message: "Access denied. You must be a student to perform this action."
            });
        }
    }


// routes
 router.get("/student", auth, isStudent, (req, res)=>{
        console.log("I am inside student route handler");
        res.send("Welcome to the student dashboard");
 })

router.get("/admin", auth, isAAdmin, (req, res)=>{
    console.log("I am inside admin route handler");
    res.send("Welcome to the admin dashboard");
})


export default router;