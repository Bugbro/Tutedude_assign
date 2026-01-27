import mongoose from "mongoose";

const organizationSchema = new mongoose.Schema({
    name:{
        type: String,
        requred: true
    },
    domain:{
        type: String,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    mobile:{
        type: String,
        required: true
    },
    plan:{
        type: String,
        enum: ["free", "pro", "enterprise"],
        default: "free"
    },
    logoUrl:{
        type: String
    }
},{timestamps: true});

export default mongoose.model("Organization", organizationSchema);