"use client"
import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useState } from "react";
export const GithubImage=()=>{
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
   
     
   
   <div > <FaGithub size={size} onMouseEnter={onchange} onMouseLeave={onchange2}></FaGithub></div>
   

)
}