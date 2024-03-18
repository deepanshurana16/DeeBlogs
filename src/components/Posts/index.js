import React from 'react'
import styles from "./posts.module.css"
 const Posts = () => {
  return (
    <div className={styles.posts}>
        <h2>Latest posts</h2>
        <div className={styles.post}>
          <h3>PostName</h3>
          <p>Time</p>
        </div>

      </div>
  )
}
export default Posts;
