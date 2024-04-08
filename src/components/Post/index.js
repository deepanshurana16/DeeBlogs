import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image'
import Posts from '../Posts'
import Link from 'next/link';
import { Footer } from '../Footer';

const Post = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.about}>
        <div className={styles.content}>
        <h1>Hey I'm harsh!</h1>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a modi alias maiores sed, magni cumque ea velit molestiae corrupti.</p>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a modi alias maiores sed, magni cumque ea velit molestiae corrupti.</p>
        <p className={styles.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a modi alias maiores sed, magni cumque ea velit molestiae corrupti.</p>
        <p className={styles.para}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem asperiores, veniam exercitationem nemo nulla mollitia eos, corporis id velit cumque tempore, neque inventore impedit eveniet atque consectetur cum sint nam commodi! Mollitia est cum optio tempora ex aut commodi debitis, laudantium distinctio eos, laborum fuga saepe eum explicabo, doloremque molestiae.</p>
        <p className={`${styles.para} ${styles.social}`}>Social links: <Link href="https://www.linkedin.com/in/harshsingh0310/" className={styles.link} > <Image
      priority
      src="/images/linkedin.svg"
      alt="Follow us on Twitter"
      width={25}
      height={25}
      className={styles.icon}
    /> Linkedin</Link> <Link href="https://github.com/lives-in-virgosupercluster" className={styles.link}><Image
    priority
    src="/images/github.svg"
    alt="Follow us on Twitter"
    width={25}
    height={25}
    className={styles.icon2}
  />Github</Link></p>
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
