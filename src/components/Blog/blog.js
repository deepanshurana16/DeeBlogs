import React from 'react'
import styles from "./blog.module.css";
import Posts from '../Posts';

const Blog = () => {
  return (
    <div className={styles.container}>
<h1>Blog</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium repellendus qui recusandae delectus nobis deleniti possimus iste atque tempore ab quod eos, similique dicta temporibus totam perspiciatis! Accusantium, voluptatibus?</p>
<div className={styles.tags}>
  <p>Common tags:</p>
  <div>Reactjs</div>
  <div>Nodejs</div>
  <div>Nextjs</div>
  <div>MongoDB</div>
  <div>SQL</div>
  <div>GIT</div>
  <div>VSCODE</div>
</div>
<Posts></Posts>
        
    </div>
  )
}
export default Blog;
