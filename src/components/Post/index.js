"use client";
import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image'
import Posts from '../Posts'
import Link from 'next/link';
import SmallWithSocial from '../Footer';
import {useContext} from "react";
import { ThemeContext } from '@/app/context/ThemeContext';
import { GithubImage } from '../GithubImage';
import { LinkedinImage } from '../LinkedinImage';
import { Heading } from '@chakra-ui/react'
import { PiHandWavingFill } from "react-icons/pi";
import Head from 'next/head';
const Post = () => {
  const {theme,toggle}=useContext(ThemeContext);
  return (
    <div className={styles.container}>
      
      <div className={styles.about}>
        <div className={styles.content}>
          <Heading size='xl'><div className={styles.heading}><PiHandWavingFill ></PiHandWavingFill><span>Hey, I'm harsh</span></div></Heading>
        
        <p className={styles.para}> a passionate computer science engineer from Vellore Institute of Technology, India.</p>
        <p className={styles.para}>  Ever since diving into the world of code in 2020, I've been fascinated by its potential to create innovative solutions and bridge the gap between technology and human experience</p>
        <p className={styles.para}>This blog is my playground to share my experiences, learnings, and projects as I navigate the exciting world of tech</p>
        <p className={styles.para}> From front-end development with React and Material-UI to back-end functionalities with Node.js, I'm constantly exploring new tools and frameworks to craft dynamic and user-friendly applications</p>
        {/* <p className={`${styles.para} ${styles.social}`}><span>Social links:</span> <Link href="https://www.linkedin.com/in/harshsingh0310/" className={styles.link} > <LinkedinImage></LinkedinImage></Link> <Link href="https://github.com/lives-in-virgosupercluster" className={styles.link}><GithubImage></GithubImage></Link></p> */}
        </div>
        <div className={styles.image}>
        <Image src="/images/harsh-picture.png" width={100} height={100} className={styles.image}></Image>
        </div>
      </div>
      <Posts></Posts>
      <SmallWithSocial></SmallWithSocial>
      </div>
  )
}
export default Post;
