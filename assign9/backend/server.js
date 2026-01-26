import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/dbConnect.js";

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();


app.get("/", (req, res)=>{
    res.end("Hello World");
});

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});
