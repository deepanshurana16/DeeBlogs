import { FaLinkedin } from "react-icons/fa";
import { IconContext } from "react-icons";

import style from "./Imagestyle.module.css"
export const LinkedinImage=()=>{
   return (
      <IconContext.Provider>
   
   <div className={style.linkedin}><FaLinkedin></FaLinkedin></div>
   </IconContext.Provider>

)
}