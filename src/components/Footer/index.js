import React from 'react'
import style from "./footer.module.css"
export const Footer = () => {
  return (
    <div className={style.container}>
        <hr></hr>
        <div>made by Harsh Singh</div>
        <div className={style.links}>
            <div className={style.items}>Github</div>
            <div className={style.items}>Linkedin</div>
            <div className={style.items}>Leetcode</div>
            <div className={style.items}>Codeforces</div>
        </div>

    </div>
  )
}
