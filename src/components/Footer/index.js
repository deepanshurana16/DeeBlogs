import React from 'react'
import style from "./footer.module.css"
import Link from 'next/link'
export const Footer = () => {
  return (
    <div className={style.container}>
        <hr className={style.line}></hr>
        <div className={style.footext}>made by Harsh Singh</div>
        <li className={style.links}>
            <ul className={style.items}><Link href="https://github.com/lives-in-virgosupercluster" className={style.linkitems}>Github</Link></ul>
            <ul className={style.items}><Link href="https://www.linkedin.com/in/harshsingh0310/" className={style.linkitems}>Linkedin</Link></ul>
            <ul className={style.items}><Link href="https://leetcode.com/Solar_Nebula/" className={style.linkitems}>Leetcode</Link></ul>
            <ul className={style.items}><Link href="https://codeforces.com/profile/idonthatephy" className={style.linkitems}>Codeforces</Link></ul>
        </li>

    </div>
  )
}
