import express from "express";
import cookieParser from "cookie-parser";
import { dbConnect } from "./config/dbConnect.js";
import todoRouter from "./routes/todoRoutes.js";

const app = express();
const PORT = 8000;

dbConnect();
//middleware
app.use(express.json());
app.use(cookieParser());

//api endpoints
app.use("/api/todos", todoRouter);


app.listen(PORT, ()=>{
    console.log(`Server is running at ${PORT}`);
});