import { FaGithub } from "react-icons/fa";
import { IconContext } from "react-icons";

export const GithubImage=()=>{
   return (
   
      <IconContext.Provider
      value={{  display: 'inline' }}
    >
   
   <div style={{display:"inline"}}> <FaGithub></FaGithub></div>
   </IconContext.Provider>

)
}