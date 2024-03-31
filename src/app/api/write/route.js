import { NextResponse } from "next/server";
import User from "@/app/models/post";


export const POST = async (req, res) => {
    try {
        const body = await req.json(); 
        console.log(body);
        const userData = {
            title: body.title,
            content: body.content,
            tag: body.tag,
            time: new Date() 
        };
        console.log(userData);
          await User.create(userData);
       //make corrections here
        return NextResponse.json({ message: "User posted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error occurred while saving user data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};


