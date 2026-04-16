import mongoose from "mongoose";

export const connectDB = async () => {
    const dbUri = process.env.MONGO_URI;

    if (!dbUri)
        throw new Error('Mongo URI is not defined!');

    try {
        await mongoose.connect(dbUri);

        console.log('MongoDB connected!');
    }
    catch (err) {
        console.error('Mongo error: ', err);

        process.exit(1);
    }
}