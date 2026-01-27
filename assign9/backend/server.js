import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/dbConnect.js";
import authRouter from "./routes/authRouter.js";

dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;
const app = express();

//middlewares
app.use(cors());
app.use(express.json());

//routes
app.use("/api/auth", authRouter);

app.listen(PORT,()=>{
    console.log(`Server is running at ${PORT}`);
});
