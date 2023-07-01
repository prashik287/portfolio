import React from "react";
import { AiOutlineLinkedin,AiOutlineTwitter,AiFillGithub } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";  

export const Sidebar=()=>{
    return(
        <>
     <div>
  <div className="hidden md:flex fixed absolute px-4 flex-col" style={{ paddingTop: "110px", paddingBottom: "0px" }}>
                    <ul>
                    <a href="https://www.linkedin.com/in/prashik-jadhav-917a54279/">
                        <li className="text-blue-900">
                        <AiOutlineLinkedin className="text-4xl" />
                        </li>
                    </a>
                    </ul>
                    <br />
                    <ul>
                    <a href="https://twitter.com/PrashikJad80622">
                        <li className="text-cyan-400">
                        <AiOutlineTwitter className="text-4xl" />
                        </li>
                    </a>
                    </ul>
                    <br />
                    <ul>
                    <a href="https://github.com/prashik287">
                        <li className="text-white">
                        <AiFillGithub className="text-4xl" />
                        </li>
                    </a>
                    </ul>
                    <br />
                    <ul>
                    <a href="https://www.instagram.com/mr_prashik_2277/">
                        <li className="text-pink-600">
                        <GrInstagram className="text-4xl" />
                        </li>
                    </a>
                    </ul>
                </div>


        {/*Responsive */}
        <div className= " md:hidden fixed bottom-4 left-0 w-full flex justify-center p-1" style={{paddingTop:"20px",paddingBottom:"10px"}}>
            <ul className="p-4" stye>
                <a href="https://www.linkedin.com/in/prashik-jadhav-917a54279/"><li className="text-blue-900    "><AiOutlineLinkedin className="text-6xl"/></li></a>
            </ul><br/>
            <ul className="p-4">
               <a href="https://twitter.com/PrashikJad80622"> <li className="text-cyan-400"><AiOutlineTwitter className="text-6xl"/></li></a>
            </ul><br/>
            <ul className="p-4">
               <a href="https://github.com/prashik287"> <li className="text-white"><AiFillGithub className="text-6xl"/></li></a>
            </ul><br />
            <ul className="p-4">
                <a href="https://www.instagram.com/mr_prashik_2277/"><li className="text-pink-600   "><GrInstagram className="text-6xl"/></li></a>
            </ul>
        </div>
        </div>
        </>
    )
}
export default Sidebar;