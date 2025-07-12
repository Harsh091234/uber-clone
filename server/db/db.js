import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

export const dbConnect = async() => {
    try {
       const conn = await mongoose.connect(MONGO_URI);
       console.log(`mongodb connected: ${conn.connection.host}`)
    } catch (error) {
        console.log("error in dbConnect: ", error);
        process.exit(1);
    }
}