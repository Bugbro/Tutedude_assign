import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    organizationId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        enum: ["admin", "employee", "security"]
    },
    status:{
        type: String,
        enum: ["pending","approved","rejected"],
        default: "pending"
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    otp: String,
    otpExpiry: Date,
    resetPassOtp: String,
    resetPassOtpExpiry: Date,
    resetPassToken: String,
    resetPassTokenExpiry: Date
},{timestamps: true});

export default mongoose.model("User", userSchema);