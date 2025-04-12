import mongoose from "mongoose";
const url = process.env.URL;
const connectDb = async () => {
    mongoose.connect(url);
}
export default connectDb;