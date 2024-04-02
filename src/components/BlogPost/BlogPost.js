
import React from 'react'
import styles from "./page.module.css"
const getData = async (url) => {
  console.log(url,"here in react");
  const searchParams = new URLSearchParams();
  searchParams.append('id', url); // Add your id variable here
  
  let res = await fetch(`http://localhost:3000/api/fetchone?${searchParams}`, {
    cache: "no-store",
  });
    //console.log(res);
     res=await res.json();
     console.log(res,"here in react");
    if (!res.ok) {
   //console.log(res);
   console.log("error");
    }
  console.log("here","out of ")
    return res;
  };
 const BlogPage = async({url}) => {
   const data = await getData(url);
   console.log(data,"here data");
    
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>{data.post.title}</h1>
            <p>{data.post.time}</p>
            <p>{data.post.tag}</p>
        </div>
        <div className={styles.content}>
            {data.post.content}
        </div>

        
    </div>

  )
}
export default BlogPage;