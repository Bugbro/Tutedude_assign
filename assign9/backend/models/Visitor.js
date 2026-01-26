import mongoose from "mongoose";

//in this onlt store visitor simple info like name email....
const visitorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    otp: String,
    otpExpiry: Date
},{timestamps:true});

export default mongoose.model("Visitor", visitorSchema);