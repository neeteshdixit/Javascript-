import express from "express";

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
// middleware - logging, auth , validation

const loggingmiddleware = (req, res,next)=>{
  console.log("logging kra rha hun");
  next();
}

const authmiddleware = (req, res,next)=>{
  console.log("auth kra rha hun");
  res.send("chaloooooo");
  // next();
}

const validationmiddleware = (req, res,next)=>{
  console.log("validation kra rha hun");
  next();
}


app.use(loggingmiddleware);
app.use(authmiddleware);
app.use(validationmiddleware);

app.get("/", (req, res) => {
  console.log("mein route handler hun")
  console.log(req.body);
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});