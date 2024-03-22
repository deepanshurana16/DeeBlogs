import mongoose from "mongoose";
import { NextResponse } from "next/server";

import User from "../../models/post";
import Post from "@/components/Post";

 const POST = async (req, res) => {
    try {
       const body=await req.json();
        console.log(req);

        // Create a new User instance using the data from the request body
        const newUser = new User({
            Title: body.title,
            content: body.content,
            tag: body.tag,
            time: new Date() // Assuming you want to set the current date/time
        });

        // Save the new user to the database
        const savedUser = await newUser.save();

        // Respond with the saved user data
        return NextResponse.json(savedUser, { status: 200 });
    } catch (error) {
        console.error("Error occurred while saving user data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
export default POST;