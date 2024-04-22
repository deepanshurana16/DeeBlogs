"use client";
import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image'
import Posts from '../Posts'
import Link from 'next/link';
import { Footer } from '../Footer';
import {useContext} from "react";
import { ThemeContext } from '@/app/context/ThemeContext';


const Post = () => {
  const {theme,toggle}=useContext(ThemeContext);
  return (
    <div className={styles.container}>
      
      <div className={styles.about}>
        <div className={styles.content}>
        <h1>Hey I'm harsh!</h1>
        <p className={styles.para}> a passionate computer science engineer from Vellore Institute of Technology, India.</p>
        <p className={styles.para}>  Ever since diving into the world of code in 2020, I've been fascinated by its potential to create innovative solutions and bridge the gap between technology and human experience</p>
        <p className={styles.para}>This blog is my playground to share my experiences, learnings, and projects as I navigate the exciting world of tech</p>
        <p className={styles.para}> From front-end development with React and Material-UI to back-end functionalities with Node.js, I'm constantly exploring new tools and frameworks to craft dynamic and user-friendly applications</p>
        <p className={`${styles.para} ${styles.social}`}>Social links: <Link href="https://www.linkedin.com/in/harshsingh0310/" className={styles.link} > {theme==='light' ?<Image
      priority
      src="/images/linkedin.svg"
      alt="Follow us on Twitter"
      width={25}
      height={25}
      className={styles.icon}
    />:<Image priority src="/images/light-linkedin.png" width={25} height={25} className={styles.icon}></Image>} Linkedin</Link> <Link href="https://github.com/lives-in-virgosupercluster" className={styles.link}>{theme==='light'?<Image
    priority
    src="/images/github.svg"
    alt="Follow us on Twitter"
    width={25}
    height={25}
    className={styles.icon2}
  />:<Image priority src="/images/light-github-1.png" width={25} height={25} className={styles.icons2}></Image>}Github</Link></p>
        </div>
        <div className={styles.image}>
        <Image src="/images/harsh-picture.png" width={100} height={100} className={styles.image}></Image>
        </div>
      </div>
      <Posts></Posts>
      <Footer></Footer>
      </div>
  )
}
export default Post;
