import mongoose from "mongoose";

export const dbConnect = async()=>{
    mongoose.connection.on('connected', ()=>{
        console.log("DB connect");
    });
    await mongoose.connect("mongodb+srv://ppal6060_db_user:XUoeYoZuCjNPNlzq@cluster0.hbcaqdw.mongodb.net/?appName=Cluster0");
};