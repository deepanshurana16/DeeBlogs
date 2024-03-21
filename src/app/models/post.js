import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
const UserSchema=new Schema(
    {
     Title:String,
     content:String,
     tag:String


    },
    {
        timestamps:true,
    }
);
const User=mongoose.models.User || mongoose.model("User",UserSchema);
export default User;
