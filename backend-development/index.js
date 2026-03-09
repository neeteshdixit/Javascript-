import express from "express";
const app = express();
const port = 3000;

// import router
import router from "./routes/router.js";

app.use("/routing", router);

app.listen(port, ()=> {
    console.log(`Server is running on port http://localhost:${port}`);
})