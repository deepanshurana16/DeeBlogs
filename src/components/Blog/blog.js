import React from 'react'
import styles from "./blog.module.css";
import Posts from '../Posts';
import { Footer } from '../Footer';
const Blog = () => {
  return (
    <div className={styles.container}>
<h1>Blog</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit praesentium repellendus qui recusandae delectus nobis deleniti possimus iste atque tempore ab quod eos, similique dicta temporibus totam perspiciatis! Accusantium, voluptatibus?</p>
<div className={styles.tags}>
  <p>Common tags:</p>
  <div className={`${styles.tag} ${styles.reactjs}`}>Reactjs</div>
  <div className={`${styles.tag} ${styles.nodejs}`}>Nodejs</div>
  <div className={`${styles.tag} ${styles.nextjs}`}>Nextjs</div>
  <div  className={`${styles.tag} ${styles.mongodb}`}>MongoDB</div>
  <div className={`${styles.tag} ${styles.sql}`}>SQL</div>
  <div  className={`${styles.tag} ${styles.git}`}>GIT</div>
  <div  className={`${styles.tag} ${styles.vscode}`}>VSCODE</div>
</div>
<Posts></Posts>
        <Footer></Footer>
    </div>
  )
}
export default Blog;
