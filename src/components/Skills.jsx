import React from "react";
import Collapse from "./Collapse"
import CollapseR from "./CollapseR";
import { BiCodeCurly } from "react-icons/bi";
import { BsDatabaseAdd } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3 } from "react-icons/io";
import { DiNodejsSmall } from "react-icons/di"
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact , FaPython} from "react-icons/fa";
import { IoLogoFirebase} from "react-icons/io5";

export const Skills=()=>{
    return(
        <>
        <div className="p-3">
        <h1 className="text-white text-center font-serif  text-3xl">SKILLS</h1>
        <h5 className=" font-serif text-center pt-3" style={{color:'#ADD8E6'}}>My Technical Level</h5><br/>
            <div>
            <div>
                <Collapse  icon={<BiCodeCurly />} title="Frontend" >
                    {/* This is for HTML*/}
                    <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:805}}>
                            <h1 className="font-bold text-red-600  font-serif" > HTML</h1>
                        </div>
                        <AiFillHtml5 className="text-2xl text-red-600"/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"100%"}}>100%</div>
                        </div> 	
                   
                  </div>
                  {/* This for CSS*/}
                  <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:835}}>
                            <h1 className="font-bold  text-sky-500 font-serif" >CSS</h1>
                        </div>
                        <IoLogoCss3 className="text-2xl text-sky-500"/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-blue-600  via-sky-500 to-cyan-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"90%"}}>90%</div>
                        </div> 	
                   
                  </div>
                     {/* This is for Javascript*/}
                     <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:755}}>
                            <h1 className="font-bold text-yellow-600 font-serif" > JAVASCRIPT</h1>
                        </div>
                        <TbBrandJavascript className="text-2xl text-yellow-600"/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"75%"}}>75%</div>
                        </div> 	
                   
                  </div>
                  {/* This is for React js*/}
                  <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:820}}>
                            <h1 className="font-bold text-cyan-800  font-serif" > React</h1>
                        </div>
                        <FaReact className="text-2xl text-cyan-800  "/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-sky-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"90%"}}>90%</div>
                        </div> 	
                   
                  </div>
                </Collapse><br /><br />
                {/*This is Backend */}
                <Collapse icon={<BsDatabaseAdd  />}  title="Backend" >
                    {/* This is for Python*/}
                    <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:810}}>
                            <h1 className="font-bold text-yellow-400 font-serif " >Python</h1>
                        </div>
                        <FaPython style={{
                                stroke: '#083344', // Blue
                                fill: '#FFEB3B', // Yellow
                            }} className="text-2xl "/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"30%"}}>30%</div>
                        </div> 	
                   
                  </div>
                 
                     {/* This is for Nodejs*/}
                     <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:795}}>
                            <h1 className="font-bold text-lime-500 font-serif" >NODE JS</h1>
                        </div>
                        <DiNodejsSmall className="text-2xl text-lime-500"/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300 text-xs font-medium text-white font-bold text-center p-0.5 leading-none rounded-full" style={{width:"80%"}}>80%</div>
                        </div> 	
                  </div>
                  {/* This is for React js*/}
                  
                   
                  
                </Collapse>
                
             </div>
            </div>
            {/*Responsive */}


            <div>
            <div className="" style={{paddingBottom:"30%"}}>
                <CollapseR  icon={<BiCodeCurly />} title="Frontend" >
                    {/* This is for HTML*/}
                    <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:805}}>
                            <h1 className="font-bold text-red-600  font-serif" > HTML</h1>
                        </div>
                        <AiFillHtml5 className="text-2xl text-red-600"/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-red-600 via-rose-500 to-pink-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"100%"}}>100%</div>
                        </div> 	
                   
                  </div>
                  {/* This for CSS*/}
                  <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:835}}>
                            <h1 className="font-bold  text-sky-500 font-serif" >CSS</h1>
                        </div>
                        <IoLogoCss3 className="text-2xl text-sky-500"/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-blue-600  via-sky-500 to-cyan-400 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"90%"}}>90%</div>
                        </div> 	
                   
                  </div>
                     {/* This is for Javascript*/}
                     <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:755}}>
                            <h1 className="font-bold text-yellow-600 font-serif" > JAVASCRIPT</h1>
                        </div>
                        <TbBrandJavascript className="text-2xl text-yellow-600"/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-yellow-300 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"75%"}}>75%</div>
                        </div> 	
                   
                  </div>
                  {/* This is for React js*/}
                  <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:820}}>
                            <h1 className="font-bold text-cyan-800  font-serif" > React</h1>
                        </div>
                        <FaReact className="text-2xl text-cyan-800  "/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-indigo-900 via-blue-800 to-sky-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"90%"}}>90%</div>
                        </div> 	
                   
                  </div>
                </CollapseR><br /><br />
                {/*This is Backend */}
                <CollapseR icon={<BsDatabaseAdd  />}  title="Backend" >
                    {/* This is for Python*/}
                    <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:810}}>
                            <h1 className="font-bold text-yellow-400 font-serif " >Python</h1>
                        </div>
                        <FaPython style={{
                                stroke: '#083344', // Blue
                                fill: '#FFEB3B', // Yellow
                            }} className="text-2xl "/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500  text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width:"30%"}}>30%</div>
                        </div> 	
                   
                  </div>
                 
                     {/* This is for Nodejs*/}
                     <div style={{padding:10}}>
                    <div className="float-right" style={{paddingRight:795}}>
                            <h1 className="font-bold text-lime-500 font-serif" >NODE JS</h1>
                        </div>
                        <DiNodejsSmall className="text-2xl text-lime-500"/>&nbsp;
                        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                            <div className="bg-gradient-to-r from-lime-500 via-lime-400 to-lime-300 text-xs font-medium text-white font-bold text-center p-0.5 leading-none rounded-full" style={{width:"80%"}}>80%</div>
                        </div> 	
                  </div>
                  {/* This is for React js*/}
                  
                   
                  
                </CollapseR>
                
             </div>
            </div>



        </div>
        </>
    )
}
export default Skills;