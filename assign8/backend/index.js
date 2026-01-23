import express from "express";
import cookieParser from "cookie-parser";
import { dbConnect } from "./config/dbConnect.js";
import todoRouter from "./routes/todoRoutes.js";
import cors from "cors";
import dotenv from 'dotenv'

dotenv.config();


const app = express();
const PORT = 8000;
const corsOption = {
    origin: "http://localhost:5173",
    credentials: true
}

dbConnect();
//middleware
app.use(cors(corsOption));
app.use(express.json());
app.use(cookieParser());

//api endpoints
app.use("/api/todos", todoRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});