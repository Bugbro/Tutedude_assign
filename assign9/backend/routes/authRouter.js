import express from "express";
import { registerAdmin, verifyOtp } from "../controllers/authcontrollers.js";

const authRouter = express.Router();

authRouter.post("/register-admin", registerAdmin);
authRouter.post("/verify-otp", verifyOtp);

export default authRouter;