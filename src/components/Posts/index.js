"use client"
import React from 'react'
import styles from "./posts.module.css"
import { useState,useEffect } from 'react';
import Link from 'next/link';

 const Posts = () => {


  const [posts, setPosts] = useState([]);
  useEffect(() => {
    // Function to fetch posts from API
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/read'); // Assuming your API endpoint is /api/posts
        if (response.ok) {
          const data = await response.json();
          setPosts(data.posts); // Assuming the response has a key 'posts' containing an array of posts
        } else {
          throw new Error('Failed to fetch posts');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts(); // Call the function to fetch posts when component mounts
  }, []); 
  return (
    <div className={styles.posts}>
        <h2>Latest posts</h2>
        {posts.map(post => (
          <Link href={`/post/${post._id}`}>
        <div className={styles.post} key={post._id}> {/* Assuming each post has a unique _id */}
          <h3>{post.title}</h3> {/* Assuming post title */}
          <p>{post.time}</p> {/* Assuming post time */}
          <p>{post.content}</p>
        </div>
        </Link>
      ))}

      </div>
  )
}
export default Posts;
