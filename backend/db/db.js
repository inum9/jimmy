import mongoose from "mongoose";
import { dbName } from "../dbName.js";
import 'dotenv/config'; // Ensure environment variables are loaded

const connectDb = async () => {
    try {
        // Step 1: Verify environment variable and dbName
        const uri = `${process.env.MONGODB_URI}/${dbName}`;
        // console.log("Connection URI:", uri); // Debugging line

        // Step 2: Connect
        const connectionInstance = await mongoose.connect(uri);
        console.log(`MongoDB connected at ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error}`);
        process.exit(1); // Exit process on failure
    }
};

export default connectDb;
