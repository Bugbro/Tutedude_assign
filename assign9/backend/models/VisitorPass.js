import mongoose from "mongoose";

const visitorPassSchema = new mongoose.Schema({
    visitorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Visitor",
        required: true
    },
    organizationId: {
        type: String,
        ref: "Organization",
        required: true
    },
    personToMeet:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    purpose: String,
    visitDate:{
        type: Date,
        required: true
    },
    status:{
        type: String,
        enum: ["pending","approved","rejected","checkIn", "checkOut"],
        default: "pending"
    },
    qrCode: String,
    validFrom: Date,
    validto: Date
},{timestamps: true});

export default mongoose.model("VisitorPass", visitorPassSchema);