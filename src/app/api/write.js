import mongoose from "mongoose";
import { NextResponse } from "next/server";

import User from "../models/post";

export const POST=async(req,res)=>{

    try{
    const body=await req.json();
    console.log(body);
    }
    catch(error){
        console.error("Error occurred while retrieving user image",error);
        return NextResponse.json({error:"Internal Server Error"},{status:500});
    }
}