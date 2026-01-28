import Organization from "../models/Organization.js";
import User from "../models/User.js";
import { compareHash, hashValue } from "../utils/hash.js";
import { otpGen } from "../utils/otpGen.js";
import { genRandomToken } from "../utils/randomToken.js";
import { resHandler } from "../utils/resHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { generateToken } from "../utils/token.js";
import { generateDomain } from "../utils/uniquedomain.js";


//admin and organization admin register
export const registerAdmin = async (req, res) => {
    try {
        const { name, email, password, mobile, orgName, plan, logoUrl } = req.body || {};
        if(!name || !email || !password || !mobile || !orgName){
            return resHandler(res, 400, "Please provide all required fields.");
        }

        const existUser = await User.findOne({
            $or : [{email},{mobile}]
        });
        if(existUser){
            return resHandler(res, 400, "Email or mobile number already registered.");
        } 

        const domain = generateDomain(orgName);
        const organization = await Organization.create({
            name: orgName,
            domain,
            email,
            mobile,
            plan: plan || "free",
            logoUrl: logoUrl || null
        });

        const hashPassword = await hashValue(password);
        const otp = otpGen();
        const hashOtp = await hashValue(otp);
        
        const adminUser = await User.create({
            name,
            email,
            mobile,
            password: hashPassword,
            role: "admin",
            status: "approved",
            organizationId: organization._id,
            isVerified: false,
            otp: hashOtp,
            otpExpiry: Date.now() + 10 * 60 * 1000
        });

        //send email to user
        await sendEmail(email, "Your verification OTP ", otp);
        return resHandler(res, 201, "Admin registered successfully. OTP sent to email.",
            {
                _id: adminUser._id,
                organizationId: organization._id,
                domain: organization.domain,
                plan: organization.plan,
                logoUrl: organization.logoUrl
            }
        );

    } catch (error) {
        console.log("Error while register admin", error.message);
        return resHandler(res, 500, error.message);
    }
};

//verify otp 
export const verifyOtp = async(req, res)=>{
    try {
        const {userId, otp} = req.body;
        if(!userId || !otp){
            return resHandler(res, 400, "User ID and otp are required");
        }
        const user = await User.findById(userId);
        if(!user){
            return resHandler(res, 404, "User not found.");
        }
        if(user.isVerified){
            return resHandler(res, 400, "User already verified.");
        }
        if(user.otpExpiry < Date.now()){
            return resHandler(res, 400, "OTP Expired");
        }
        const isMatchOtp = await compareHash(otp, user.otp);
        if(!isMatchOtp){
            return resHandler(res, 400, "Invalid OTP");
        }
        user.isVerified = true;
        user.otp = null;
        user.otpExpiry = null;
        await user.save();
        
        const token = generateToken({
            _id: user._id,
            role: user.role,
            orgId: user.organizationId
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return resHandler(res, 200, "Account Verified Successfully.")

    } catch (error) {
        console.log("Error while register admin", error.message);
        return resHandler(res, 500, error.message);
    }
};

//login
export const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user) return resHandler(res, 404, "User not found");
        if(!user.isVerified) return resHandler(res, 401, "Verifiy email first");
        if(user.status !== "approved") return resHandler(res, 403, "Admin approval pending");

        const isPasswordMatch = await compareHash(password, user.password);
        if(!isPasswordMatch) return resHandler(res, 400, "Invalid credentials");

        const token = generateToken({
            _id: user._id,
            role: user.role,
            orgId: user.organizationId
        });
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict",
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        return resHandler(res, 200, "User Login");
    } catch (error) {
        console.log("Error while login", error.message);
        return resHandler(res, 500, error.message);
    }
};

//again resend the otp to verify 
export const resendOtp = async(req, res)=>{
    try {
        const {email} = req.body;
        if(!email) return resHandler(res, 400, "Please provide email");

        const user = await User.findOne({email});
        if(!user) return resHandler(res, 404, "User not found.");

        const otp = otpGen();
        user.otp = await hashValue(otp);
        user.otpExpiry = Date.now() + 10 * 60 *1000;
        await user.save();

        await sendEmail(email, "Your verification OTP", otp);
        return resHandler(res, 200, "OTP resend successfully.");
    } catch (error) {
        console.log("Error while resend OTP.", error.message);
        return resHandler(res, 500, error.message);
    }
};

// send otp which forgot password
export const forgotPassword = async (req, res) => {
    try {
        const {email} = req.body;
        if(!email) return resHandler(res, 400, "Please provide email.");
        const user = await User.findOne({email});
        if(!user) return resHandler(res, 404, "User not found.");

        //otp gen and token
        const otp = otpGen();
        const resetToken = genRandomToken();

        user.resetPassOtp =  await hashValue(otp);
        user.resetPassOtpExpiry = Date.now() + 10 * 60 * 1000;
        user.resetPassToken = await hashValue(resetToken);
        user.resetPassTokenExpiry = Date.now() + 10 * 60 * 1000;

        await user.save();
        await sendEmail(email, "Your OTP for reset password ", otp);
        return resHandler(res, 200, "Reset OTP send successfully.", resetToken, "resetToken");

    } catch (error) {
        console.log("Error while forgot password.", error.message);
        return resHandler(res, 500, error.message);
    }
};

//verify the reset otp
export const verifyResetOtp =async (req, res) => {
    try {
        const {email, otp} = req.body;
        if(!email || !otp) return resHandler(res, 400, "Email and OTP reqruied.");

        const user = await User.findOne({email});
        if(!user) return resHandler(res, 404, "User not found.");
        if(user.resetPassOtpExpiry < Date.now()){
            return resHandler(res, 400, "OTP Expired.");
        }
        const isOtpMatch = await compareHash(otp, user.resetPassOtp);
        if(!isOtpMatch){
            return resHandler(res, 400, "Invalid OTP.");
        };

        //otp verified here 
        user.resetPassOtp = null;
        user.resetPassOtpExpiry = null;
        await user.save();

        return resHandler(res, 200, "OTP verified succcessfully.")

    } catch (error) {
        console.log("Error while verify reset otp.", error.message);
        return resHandler(res, 500, error.message);
    }
}

//reset the password usi9ng token
export const resetPassword = async (req, res) => {
    try {
        const {token} = req.query;
        const {newPassword} = req.body;
        if(!token || !newPassword){
            return resHandler(res, 400, "Please provide requried fields.");
        }
        const users = await User.find({
            resetPassTokenExpiry: { $gt: Date.now() }
        });
        let validUser = null;

        for(const user of users){
            if(await compareHash(token, user.resetPassToken)){
                validUser = user;
                break;
            }
        };
        if(!validUser) return resHandler(res, 400, "Invalid or Expired token.");

        validUser.password = await hashValue(newPassword);
        validUser.resetPassToken = null;
        validUser.resetPassTokenExpiry = null;

        await validUser.save();
        return resHandler(res, 200, "User password reset successfully.");
    } catch (error) {
        console.log("Error while reset password.", error.message);
        return resHandler(res, 500, error.message);
    }
}