import { NextResponse } from "next/server";

export const GET=async(req,res)=>{
   console.log("here")
   try{
   
   return NextResponse.json({message:"request received"});
   }
   catch(error){
      console.error(error);
   }
}
