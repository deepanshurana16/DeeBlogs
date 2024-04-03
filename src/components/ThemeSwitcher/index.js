"use client"
import styles from './themeswitch.module.css';
import Image from 'next/image';
import Link from 'next/link';
import {useContext} from "react";
import { ThemeContext } from '@/app/context/ThemeContext';
const ThemeToggle=()=>{
    const {theme,toggle}=useContext(ThemeContext);
    console.log(theme);
    return (
        // <div className={styles.container} onClick={toggle} style={theme==="dark"?{backgroundColor:"white"}:{
        // backgroundColor:"#0f172a"
        // }}>
        //     <Image src="/moon.png" alt=" " width={14} height={14}/>
        //     <div className={styles.ball}style={
        //         theme==="dark"?
        //     {left:1,backgroundColor:"#0f172a"}:{
        //         right:1,backgroundColor:"white"
        //     }}></div>
        //     <Image src="/sun.png" alt="" width={14} height={14}/></div>
        <div onClick={toggle}>
        {theme === 'light' ? <Image src="/images/moon-solid.svg" height={25} width={25} alt="moon"/> : <Image src="/images/sun.png" height={25} width={25} alt="sun"/>}
    </div>

    )
}
export default ThemeToggle;