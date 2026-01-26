import mongoose, { mongo } from "mongoose";

const inviteSchema = new mongoose.Schema({
    organizationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Organization",
        required: true
    },
    email:{ //email of person
        type: String,
        required: true,
        trim: true
    },
    role:{
        type: String,
        enum: ["employee","security"],
        required: true
    },
    token:{
        type: String,
        required: true,
        unique: true
    },
    status:{
        type: String,
        enum: ["pending", "accepted", "expired"],
        default: "pending"
    },
    expiresAt:{
        type: Date,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Invite", inviteSchema);