import express from "express";
import { login, registerAdmin, resendOtp, verifyOtp } from "../controllers/authcontrollers.js";

const authRouter = express.Router();

authRouter.post("/register-admin", registerAdmin);
authRouter.post("/verify-otp", verifyOtp);
authRouter.post("/login", login);
authRouter.post("/resend-otp", resendOtp);

export default authRouter;