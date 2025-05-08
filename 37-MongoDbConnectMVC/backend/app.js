import express from "express";
import "dotenv/config";
import "./src/db/dbConnection.js";
import studentRouter from "./src/routes/studentRouter.js";

const app = express();

app.use(express.json()); 

app.use("/api/students", studentRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`server is up on port ${port}`);
});
