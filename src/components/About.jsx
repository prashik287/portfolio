import React from "react";
import { AiOutlineFile } from "react-icons/ai";


export const About=()=>{
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('resume.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'resume.pdf';
                alink.click();
            })
        })
    }
    return(
        <>
        <div className=" ">
            <div className=" text-center text-white font-serif  py-2 text-4xl ">
                <h1 >ABOUT ME</h1>
            </div>
             <h4 className=" font-serif  text-cyan-500 text-center" >MY INTRODUCTION</h4>
            <div className=" hidden md:flex" style={{paddingLeft:"200px",paddingRight:"100px"}}>
                <div className="grid grid-cols-2 border-4 border-black " style={{width:"75%"}}>
                    <div className="text-white  ">
                        <div className="pl-2 animate-pulse">
                            <img src={require('../about.jpg')} className=" rounded pl-22 rounded-full" style={{width:"300px",paddingTop:"70px"}} />
                        </div>
                    </div>
                    <div className="text-white">
                    <div className="float-left  pt-20  pl-3=15 font-serif " >
                        <p className="text-white">An Introvert  who loves coding  and working <br/>on cybersecurity related projects.Other than <br/>acads I play a lot of games like <br/> GTA V and CSGO.If you wanna team up,<br/> ping me </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3 float-left " style={{paddingLeft:"0px",paddingTop:1}}>
                        <div className="bg-black p-3 text-center text-white "><span className="text-2xl font-bold">00</span><br/> Years <br/>Experience</div>
                        <div className="bg-black p-3 text-center text-white"><span className="text-2xl font-bold">5+</span><br/>Completed <br/>Projects</div>
                        <div className="bg-black p-3 text-center text-white"><span className="text-2xl font-bold">0</span><br/>Companies <br/> Worked</div>
                    </div>
                    <div style={{paddingLeft:"10px",paddingTop:300}}>
                        <div >
                            <button className="bg-gradient-to-r from-blue-500 to-blue-800 p-4   w-40 font-serif rounded-lg"  onClick={onButtonClick}>Resume/CV <AiOutlineFile className="float-right"/></button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/*Responsive */}
            <div className="md:hidden">
                <div className="text-white font-serif">
                    <div className="pl-20 animation-pulse">
                    <img src={require('../about.jpg')} className=" rounded pl-22 rounded-full" style={{width:"300px",paddingTop:"70px"}} />
                    </div>
                </div>
                <div className="text-white font-serif p-8">
                        <p className="text-white">An Introvert  who loves coding  and working <br/>on cybersecurity related projects.Other than <br/>acads I play a lot of games like <br/> GTA V and CSGO.If you wanna team up,<br/> ping me </p>
                </div>
                <div className="grid grid-cols-3 gap-3 float-left " style={{paddingLeft:"30px",paddingTop:1}}>
                        <div className="bg-black p-3 text-center text-white "><span className="text-2xl font-bold">0</span><br/> Years <br/>Experience</div>
                        <div className="bg-black p-3 text-center text-white"><span className="text-2xl font-bold">5+</span><br/>Completed <br/>Projects</div>
                        <div className="bg-black p-3 text-center text-white"><span className="text-2xl font-bold">0</span><br/>Companies <br/> Worked</div>
                    </div><br/>
                    <div className="p-8" style={{paddingLeft:"100px",paddingBottom:100}}>
                        <div >
                            <button className="bg-gradient-to-r from-blue-500 to-blue-800 p-4   w-40 font-serif rounded-lg"  onClick={onButtonClick}>Resume/CV <AiOutlineFile className="float-right"/></button>
                        </div>
                    </div>
            </div>
        
        </div>
        </>
    )
}
export default About;