import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
const UserSchema=new Schema(
    {
     title:{
       type: String,
       required:true,
     },
     content:{
        type:String,
        required:true,
     },
     tag:{
        type:String,
        required:true,

     }
     ,
     time :{
        type:Date,
        required:true,
     }
      

    },
   
);
const User=mongoose.models.User || mongoose.model("User",UserSchema);
export default User;
