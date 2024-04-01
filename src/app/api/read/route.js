import { NextResponse } from "next/server";
import User from "@/app/models/post"; // Assuming this is your Mongoose model

export const GET = async (req, res) => {
    try {
        // Fetch the latest 10 user posts from MongoDB
        const latestPosts = await User.find().sort({ time: -1 }).limit(10);

        // Return the latest posts as JSON response
        return NextResponse.json({ posts: latestPosts });
    } catch (error) {
        console.error(error);
        // Handle error response
        return NextResponse.error(new Error("Failed to fetch user posts"));
    }
}
