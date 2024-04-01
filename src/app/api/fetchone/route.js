import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/post"; // Import the User model

export const GET = async (req, res) => {
    try {
        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.search);
        const _id = searchParams.get('id');

        console.log(_id);

        // Find the post by ID
        const getPost = await User.findById(_id);
        


        if (!data) {
            // Handle the case when post is not found
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

        console.log("Post found:", getPost);

        // Return the post as JSON response
        return NextResponse.json({ post: getPost });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
};
