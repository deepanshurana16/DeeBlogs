import React from 'react'
import BlogPage from '@/components/BlogPost/BlogPost';
 const page = ({params}) => {
  const {id}=params;
 

  return (
    <BlogPage url={id}></BlogPage>
  )
}
export default page;
