import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai"

export const Navbar = () => {
  const [toggle,setToggle] = useState(false);
  return (
    <>
     <div className="float-right " style={{paddingTop:"-100px",paddingRight:"-200px"}}>
     {
          toggle ? 
          <AiOutlineClose onClick={()=>setToggle(!toggle)} className="text-white  text-5xl pt-3 md:hidden block"/> 
          :
          <AiOutlineMenu onClick={()=>setToggle(!toggle)} className="text-white  text-5xl pt-3 md:hidden block" />
        }
      </div>
      <nav className="max-w-[1240px] mt-[50px] border-4 flex border-black bg-black  justify-end font-serif">  
          <div className="nav-items inline-block ">
        
            <ul className="hidden md:flex  text-white   ">
              <li className="mb-5  ">
              <Link to="/portfolio/" className="text-white px-4 py-1  red">
              <button className=" bg-black hover:bg-gradient-to-r from-pink-500 to-yellow-500  rounded-lg p-1">
                  <button className="bg-black  rounded-lg p-3">
                    HOME
                  </button>
                  </button>
                </Link>
              </li>
              <li className="">
                <Link to="/portfolio/about"  className="text-white px-4 py-1">
                    <button className=" bg-black  rounded-lg hover:bg-gradient-to-r from-pink-500 to-yellow-500 p-1">
                  <button className="bg-black rounded-lg p-3">
                  ABOUT
                  </button>
                  </button>
                </Link>
              </li>
              <li className="px-2">
                <Link to="/portfolio/skills" className="text-white px-4 py-1  ">
                  <span className="pb-5">
                  <button className=" bg-black rounded-lg hover:bg-gradient-to-r from-pink-500 to-yellow-500 p-1">
                  <button className="bg-black rounded-lg p-3">
                  SKILLS
                  </button>
                  </button>
                  </span>
                </Link>
              </li>
              <li className="">
                <Link to="/portfolio/portfolio" className="text-white px-4" style={{paddingTop:"200px"}}>
                  <button className=" bg-black rounded-lg hover:bg-gradient-to-r from-pink-500 to-yellow-500 p-1">
                  <button className="bg-black rounded-lg p-3">
                  PORTFOLIO
                  </button>
                  </button>
                </Link>
              </li>
              <li className="">
                <Link to="/portfolio/contact" className="text-white px-4">
                 <button className="p-1">
                 <button className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl p-4 px-4">
                  CONTACT
                  </button>
                 </button>
                </Link>
              </li>
            </ul>
            {/*Responsive */}

            <ul className={`md:hidden   text-white w-full h-screen  fixed gap-10 bg-black top-[98px] ${toggle ? 'left-[0]':'left-[-100%]'} `}style={{paddingTop:"0px",zIndex:10}}>
              <li className="mb-5  ">
              <Link to="/portfolio/" className="text-white px-4 py-1   red" >
              <button className=" bg-black hover:bg-gradient-to-r from-pink-500 to-yellow-500  rounded-lg p-2">
                  <button className="bg-black  rounded-lg p-3">
                    HOME
                  </button>
                  </button>
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/portfolio/about"  className="text-white px-4 py-1">
                <button className=" bg-black hover:bg-gradient-to-r from-pink-500 to-yellow-500  rounded-lg p-2">
                  <button className="bg-black  rounded-lg p-3">
                    ABOUT
                  </button>
                  </button>
                </Link>
              </li>
              <li className="mb-5">
                <Link to="/portfolio/skills" className="text-white px-4 py-1  ">
                  <span className="pb-5">
                  <button className=" bg-black rounded-lg hover:bg-gradient-to-r from-pink-500 to-yellow-500 p-1">
                  <button className="bg-black rounded-lg p-3">
                  SKILLS
                  </button>
                  </button>
                  </span>
                </Link>
              </li>
              <li className="">
                <Link to="/portfolio/portfolio" className="text-white px-4" >
                  <button className=" bg-black rounded-lg hover:bg-gradient-to-r from-pink-500 to-yellow-500 p-2">
                  <button className="bg-black rounded-lg p-3">
                  PORTFOLIO
                  </button>
                  </button>
                </Link>
              </li>
              <li className="">
                <Link to="/portfolio/contact" className="text-white px-4">
                 <button className="p-1">
                 <button className=" bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-3xl p-4 px-4">
                  CONTACT
                  </button>
                 </button>
                </Link>
              </li>
            </ul>
          </div>
     
      </nav>
     
    </>
  );
};

export default Navbar;
