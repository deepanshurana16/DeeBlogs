import mongoose from "mongoose";
import { NextResponse } from "next/server";

import User from "../../models/post";
import Post from "@/components/Post";

const POST = async (req, res) => {
    try {
        const body = await req.json();
        console.log(req);

        
        const userData = {
            Title: body.title,
            content: body.content,
            tag: body.tag,
            time: new Date() 
        };

        // Save the new user data to the database
        const savedUser = await User.create(userData);
        console.log(savedUser);

        // Respond with success message
        return NextResponse.json({ message: "User posted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error occurred while saving user data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

export default POST;
