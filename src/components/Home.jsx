import React from "react";
import { AiOutlineSend } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Home = () => {
  
  return (
    <>
     <div>
     <div className="hidden md:flex max-w-[1240px] mx-auto" style={{ paddingBottom: "0px" }}>
        <div className="float-right hover:animate-pulse">
          <div className="justify-center" style={{ position: "relative", width: "600px", height: "600px" }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={{ top: "-120" }}>
              <path
                fill="#0F62FE"
                d="M161.2 75.8c5 19.5-13.3 42.3-33.3 55-20 12.8-41.8 15.5-58.6 4.9-16.7-10.7-28.6-34.8-22.6-55.6 5.9-20.8 29.6-38.5 55.5-39.2 25.9-.7 54.1 15.5 59 34.9z"
              ></path>
            </svg>
            <img
            className="pr-2"
              src={require("../profile.png")}
              alt="Overlay Image"
              style={{
                position: "absolute",
                top: 2,
                left: 160,
                paddingRight:"100px",
                width: "100",
                height: "380px",
                zIndex: 2,
              }}
            />
          </div>
        </div>
        {/* information */}
        <div className="pb-2000">
          <div className="float-left pt-2  font-serif" style={{ paddingLeft: "120px" }}>
            <h2 className="font-bold text-6xl pt-28 text-white">Hi, I am Prashik</h2>
            <h3 className="font-bold text-4xl text-cyan-500 pt-35">IF Undergrad at BVIT</h3>&nbsp;&nbsp;
            <p className="text-slate-500 text-lg">Hey there! I am currently in my third year.<br/> I have experience in software development, Blockchain and Dapps.</p><br/>
            <Link to="/portfolio/contact">
              <button
                className="bg-gradient-to-r text-base from-sky-400 to-cyan-600 text-white px-14 py-6 rounded-3xl"
              >
                Contact Me &nbsp;&nbsp;
                <AiOutlineSend className="float-right justify-center text-2xl" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/*Responsive */}
      <div className="md:hidden max-w-[1240px] mx-auto" style={{ paddingBottom: "500px" }}>
  <div className="float-right hover:animate-pulse">
    <div 
      style={{ position: "relative", width: "600px", height: "600px",paddingLeft:"200px",zIndex:1 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" style={{ position: "relative", top: "60%", left: "58%", transform: "translate(-50%, -50%)",width:"570px" }}>
        <path
        
          fill="#0F62FE"
          d="M161.2 75.8c5 19.5-13.3 42.3-33.3 55-20 12.8-41.8 15.5-58.6 4.9-16.7-10.7-28.6-34.8-22.6-55.6 5.9-20.8 29.6-38.5 55.5-39.2 25.9-.7 54.1 15.5 59 34.9z"
        ></path>
      </svg>
      <img
        src={require("../profile.png")}
        alt="Overlay Image"
       
        style={{
          position: "absolute",
          top: "38%",
          left: "73%",
          transform: "translate(-50%, -50%)",
          width: "289px",
          height: "420px",
          zIndex: 2,
          
        }}
      />
    </div>
  </div>
  {/* information */}
  <div>
    <div className="float-left pt-0  font-serif" style={{ paddingLeft: "75px" }}>
      <h2 className="font-bold text-6xl  text-white">Hi, I am Prashik</h2>
      <h3 className="font-bold text-4xl  text-cyan-500 pt-35">IF Undergrad  <br/>BVIT</h3>&nbsp;&nbsp;
      <p className="text-slate-500 text-lg">Hey there! I am currently in my third year.<br/> I have experience in software development, Blockchain and Dapps.</p><br/>
      <Link to="/portfolio/contact">
       <div className="pb-36">
       <button
          className="bg-gradient-to-r text-base from-sky-400 to-cyan-600 text-white px-14 py-6 rounded-3xl "
          
        >
          Contact Me &nbsp;&nbsp;
          <AiOutlineSend className="float-right justify-center text-2xl" />
        </button>
       </div>
      </Link>
    </div>
  </div>
</div>


       
      </div>

  
     
    </>
  );
};

export default Home;
