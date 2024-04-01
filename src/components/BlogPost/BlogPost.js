import React from 'react'
import styles from "./page.module.css"
const getData = async (url) => {
    const res = await fetch(`http://localhost:3000/api/fetchOne/${url}`, {
      cache: "no-store",
    });
  
    if (!res.ok) {
   //console.log(res);
   console.log("error");
    }
  
    return res.json();
  };
 const BlogPage = async({url}) => {
   const data = await getData(url);
    
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>{data.title}</h1>
            <p>{data.time}</p>
            <p>{data.tag}</p>
        </div>
        <div className={styles.content}>
            {data.content}
        </div>

        
    </div>

  )
}
export default BlogPage;