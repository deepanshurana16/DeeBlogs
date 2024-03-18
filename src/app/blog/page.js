import React from 'react'
import Blog from '@/components/Blog/blog';
import Navbar from '@/components/Navbar';
import styles from "./page.module.css"

 const page = () => {
  return (
    <div className={styles.blog}>
    <Navbar></Navbar>
    <div className={styles.container}>
<Blog></Blog>
</div>
</div>
  )
}
export  default page;
