import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/post"; // Import the User model

export const GET = async (req, res) => {
    try {
        const url = new URL(req.url);
        const searchParams = new URLSearchParams(url.search);
      //  console.log(searchParams);
        const _id = searchParams.get('id');

        //console.log("here",_id);
      //  console.log("here in backend",_id);

        // Find the post by ID
        const getPost = await User.findById(_id);
        
  // console.log(getPost);

        if (!getPost) {
            // Handle the case when post is not found
            console.log("coudnt find post");
            return NextResponse.json({ error: "Post not found" }, { status: 404 });
        }

       // console.log("Post found:", getPost);
        const getPostJSON = await getPost.toJSON();

        // Return the post as JSON response
        return NextResponse.json({ post: getPostJSON },{status:200});
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
};
