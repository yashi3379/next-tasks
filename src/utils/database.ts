import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI as string || '')
        console.log("Connected to the database");
    } catch (error) {
        console.error("Error connecting to the database", error);
    }
}