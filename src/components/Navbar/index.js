import React from 'react'
import styles from "./navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftSideNavbar}>
        <li className={`${styles.items} ${styles.logo}`}>
            HarshBlog
        </li>
        <li className={styles.items}>
            Home
        </li>
        <li className={styles.items}>
            Blog
        </li>
        </div>
        <div className={styles.rightSideNavbar}>
            night

        </div>



    </div>
  )
}
