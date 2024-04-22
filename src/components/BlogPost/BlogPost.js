
import React from 'react'
import styles from "./page.module.css"
import MyComponent from '../MyComponent';
import { Footer } from '../Footer';
const getData = async (url) => {
 // console.log(url,"here in react");
  const searchParams = new URLSearchParams();
  searchParams.append('id', url); // Add your id variable here
  //http://localhost:3000
  let res = await fetch(`https://own-blog-nu.vercel.app/api/fetchone?${searchParams}`, {
    cache: "no-store",
  });
    
     res=await res.json();
    
    if (!res.ok) {
   //console.log(res);
 
    }
 // console.log("here","out of ")
    return res;
  };
 const BlogPage = async({url}) => {
   const data = await getData(url);
   //console.log(data,"here data");
    
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <h1>{data.post.title}</h1>
            <p>{data.post.time}</p>
            <p className={styles.tag}>{data.post.tag}</p>
        </div>
        <div className={styles.content}>
        <MyComponent htmlContent={data.post.content} />
        </div>
        <Footer></Footer>

        
    </div>

  )
}
export default BlogPage;