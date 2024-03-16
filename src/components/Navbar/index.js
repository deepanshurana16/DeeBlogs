import React from 'react'
import styles from "./navbar.module.css"
import Link from 'next/link'
export const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftSideNavbar}>
        <li className={`${styles.items} ${styles.logo}`}>
            HarshBlog
        </li>
        <li className={styles.items}>
          <Link href="/" className={styles.link}>Home</Link>  
        </li>
        <li className={styles.items}>
            <Link href="/Blog" className={styles.link}>Blog</Link>
        </li>
        </div>
        <div className={styles.rightSideNavbar}>
            night

        </div>



    </div>
  )
}
