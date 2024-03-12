import React from 'react'
import styles from "./navbar.module.css"

export const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftSideNavbar}>
        <li>
            Harsh
        </li>
        <li>
            Home
        </li>
        <li>
            Blog
        </li>
        </div>
        <div className={styles.rightSideNavbar}>
            night

        </div>



    </div>
  )
}
