import { NextResponse } from "next/server";

import User from "../../models/post";

const POST = async (req, res) => {
    try {
        const body = req.json(); // Use req.body directly
        console.log(req);
        const userData = {
            Title: body.title,
            content: body.content,
            tag: body.tag,
            time: new Date() 
        };

       
        return NextResponse.json({ message: "User posted successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error occurred while saving user data:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
};

export default POST;
