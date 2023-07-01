import React from "react";
import { icons } from "react-icons/lib";
import { GiSheikahEye } from "react-icons/gi"
import { MdAccountCircle } from "react-icons/md";

const Card = ({ icons, title, description }) => {
  const shadowColor = "#ffffff";
  return (

    <div className="bg-black rounded-lg shadow-custon  p-5 m-5 cursor-pointer transform transition-transform hover:-translate-y-2"  style={{ boxShadow: `0 4px 6px ${shadowColor}`,width:"200px" }}>
      <h3 className="text-white text-4xl font-bold flex justify-center items-center h-full mb-2">{icons}</h3>
      <h3 className="text-white text-lg font-bold mb-2">{title}</h3>
      <p className="text-white">{description}</p>
    </div>
  );
};

export const Portfolio = () => {
  return (
    <>
        <div className="p-3">
          <h1 className="text-white text-center font-serif  text-3xl">Recent Work</h1>
        </div>
        <div className="pl-28">
        <div className=" md:hidden justify-center    " style={{width:"100%",paddingBottom:"100px"}}>
            <div className="   " style={{width:"300px"}}>
              {/* First column content */}
              <Card
                    icons={<GiSheikahEye className="mr-2 text-[#46a1f6] text-4xl" />}
                    title={<span className="text-[#46a1f6]">TRINETRA</span>}
                    description="Trinetra is Social Media Plaform Based on Decentralized Applications(DAPPS)  Technology."
                  />
                 
              
            </div>
            <div className="" style={{width:"300px"}}>
              {/* Second column content */}
              <Card
                    icons={<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" style={{width:"75px"}}/>}
                    title={<span className="text-[#46a1f6]">Company Website</span>}
                    description="Created a simple Company website as Nodejs as Backend and MySql as database"
                  />
            </div>
            <div className="w-1/3">
              {/* Third column content */}
              <Card
                    icons={<MdAccountCircle className="text-6xl text-pink-500"/>}
                    title={<span className="text-[#46a1f6]">Portfolio Website</span>}
                    description="Created a simple Portfolio website with reactjs  and MySql as database"
                  />
            </div>
        </div>
        {/*Responsive */}
        <div className=" hidden md:flex justify-center   " style={{width:"25%",paddingLeft:"400px"}}>
            <div className="   " style={{width:"300px"}}>
              {/* First column content */}
              <Card
                    icons={<GiSheikahEye className="mr-2 text-[#46a1f6] text-4xl" />}
                    title={<span className="text-[#46a1f6]">TRINETRA</span>}
                    description="Trinetra is Social Media Plaform Based on Decentralized Applications(DAPPS)  Technology."
                  />
                 
              
            </div>
            <div className="" style={{width:"300px"}}>
              {/* Second column content */}
              <Card
                    icons={<img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" style={{width:"75px"}}/>}
                    title={<span className="text-[#46a1f6]">Company Website</span>}
                    description="Created a simple Company website as Nodejs as Backend and MySql as database"
                  />
            </div>
            <div className="w-1/3">
              {/* Third column content */}
              <Card
                    icons={<MdAccountCircle className="text-6xl text-pink-500"/>}
                    title={<span className="text-[#46a1f6]">Portfolio Website</span>}
                    description="Created a simple Portfolio website with reactjs  and MySql as database"
                  />
            </div>
        </div>
        </div>
    </>
  );
};

export default Portfolio;
