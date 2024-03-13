import React from 'react'
import styles from "./home.module.css"
import Image from 'next/image'
export const Post = () => {
  return (
    <div className={styles.container}>
      
      <div className={styles.about}>
        <div className={styles.content}>
        <h1>Hey I'm harsh!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a modi alias maiores sed, magni cumque ea velit molestiae corrupti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a modi alias maiores sed, magni cumque ea velit molestiae corrupti.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam a modi alias maiores sed, magni cumque ea velit molestiae corrupti.</p>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem asperiores, veniam exercitationem nemo nulla mollitia eos, corporis id velit cumque tempore, neque inventore impedit eveniet atque consectetur cum sint nam commodi! Mollitia est cum optio tempora ex aut commodi debitis, laudantium distinctio eos, laborum fuga saepe eum explicabo, doloremque molestiae.</p>
        <p>social links</p>
        </div>
        <div className={styles.image}>
        <Image src="/images/harsh-picture.png" width={100} height={100}></Image>
        </div>
      </div>
      <div className={styles.posts}>
        <div className={styles.post}>
          <h1>PostName</h1>
          <p>Time</p>
        </div>

      </div>
      
      </div>
  )
}
