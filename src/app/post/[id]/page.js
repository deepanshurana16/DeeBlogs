import React from 'react'
import BlogPage from '@/components/BlogPost/BlogPost';
import Navbar from '@/components/Navbar';
 const page = ({params}) => {
  const {id}=params;
 

  return (
    <>
    <Navbar></Navbar>
    <BlogPage url={id}></BlogPage>
    </>
  )
}
export default page;
