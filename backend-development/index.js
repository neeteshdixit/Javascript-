const express = require("express");
const app = express();
const port = 3000;

// import router
const router = require("./routes/router.js");

app.use("/routing", router);

app.listen(port, ()=> {
    console.log(`Server is running on port http://localhost:${port}`);
})