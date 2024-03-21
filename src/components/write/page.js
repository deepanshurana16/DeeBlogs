"use client"
import React from 'react'
import styles from "./write.module.css"
import Image from 'next/image'
import { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css';

 const Writepage = () => {
    
  
    const [open,setOpen]=useState(false);
    const[value,setValue]=useState("");
  
  return (
    <div className={styles.container}>
        <input type="text" placeholder="Title" className={styles.input}/>
        <div className={styles.editor}>
        <button className={styles.button} onClick={()=>setOpen(!open)}>
            <Image src="/images/plus.png" alt="" width={16} height={16}/>
        </button>
        {open && (<div className={styles.add}>
        <button className={styles.addbutton}>
            <Image src="/images/image.png" alt="" width={16} height={16}/>
        </button>
        <button className={styles.addbutton}>
            <Image src="/images/external.png" alt="" width={16} height={16}/>
        </button>
        <button className={styles.addbutton}>
            <Image src="/images/video.png" alt="" width={16} height={16}/>
        </button>

            
            </div>)}
            <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="Tell Your Story" className={styles.TextArea}/>

        </div>
        <button className={styles.publish}>Publish</button>

        
        </div>
  )
}
export default Writepage;