"use client"
import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
import style from "./Imagestyle.module.css"
export const LinkedinImage=()=>{

   const[size,setSize]= useState("25px");
   const onchange=()=>{
      setSize("30px");
    console.log(size);
   }
   const onchange2=()=>{
      setSize("25px");
      console.log(size);
   }
   return (
     
   
   <div className={style.linkedin}><FaLinkedin size={size} onMouseEnter={onchange} onMouseLeave={onchange2}></FaLinkedin></div>
   

)
}