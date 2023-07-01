  import React,{useState} from "react";
  import { AiOutlineMail, AiOutlineSend } from "react-icons/ai";
  import { MdLocationOn } from "react-icons/md";
  import { database } from "../firebase";
  import {ref,push,child,update} from  'firebase/database'
  export const Contact=()=>{

    const [userData,setUserData] = useState({
      Name:"",
      Email :"",
      Project:"",
      Message:"",
    });
    let name,value;
    const postUserData = (event) => {
      name = event.target.name;
      value = event.target.value;

      setUserData({...userData,[name]:value})
    };

    //connect with firebase
    const submitData = async (event) => {
      event.preventDefault();
      const { Name , Email , Project , Message } = userData;
      const res = fetch(
        "https://porfoliocontact-default-rtdb.firebaseio.com/feedBack.json",
        {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          Name,
          Email,
          Project,
          Message,
        }),
      }
      );
      if(res){
        alert("Data Stored");
      } else {
        alert("Plz fill the data");
      }
    };
      return(
          <>
              <h1 className="text-white text-center font-serif text-3xl">Contact Me</h1>
              <h5 className=" font-serif text-center pt-3" style={{color:'#ADD8E6'}}>Get In Touch</h5><br/>
           <div>
           <div className=" hidden md:flex grid grid-cols-2 gap-4">
        <div className="bg-black p-4 ">
          {/* Content for the first column */}
          <h1 className="float-right text-white text-2xl font-bold font-serif "  style={{paddingTop:"15px",paddingRight:"300px"}}>Email</h1>
          <h2 className="float-right  text-white text-base font-serif" style={{paddingTop:"5px",paddingRight:"170px"}}>prashikjadhav17@gmail.com</h2>
          <h1 className="text-8xl text-cyan-500" style={{paddingLeft:"100px"}}><AiOutlineMail/></h1><br />
          
          <h1 className="float-right  text-white text-2xl font-bold font-serif  " style={{paddingTop:"15px",paddingRight:"250px"}}>Location</h1>
          <h2 className="float-right  text-white text-base font-serif" style={{paddingTop:"5px",paddingRight:"310px"}}>Kalyan</h2>
          <h1 className="text-8xl text-green-500" style={{paddingLeft:"100px"}}><MdLocationOn /></h1>
        
        </div>
      <form  method="POST">
      <div className="bg-black-200 p-4  gap-4 text-white">
          {/* Content for the second column */}
          <input className="p-8 text-black font-serif rounded-lg "  style={{width:490}} type="text" placeholder="Name" name="Name" value={userData.Name} onChange={postUserData}/><br/><br/>
          <input className="p-8 text-black font-serif  rounded-lg"  style={{width:490}} type="email" placeholder="Email" name="Email" value={userData.Email} onChange={postUserData} /><br/><br/>
          <input className="p-8 rounded-lg text-black font-serif" style={{width:490}}  placeholder="Project" name="Project" value={userData.Project} onChange={postUserData}/><br/><br/>
        <textarea className="p-20 rounded-lg  text-black justify-start font-serif"   cols="30" rows="2"  placeholder="Message"  style={{width:"490px"}} name="Message" value={userData.Message} onChange={postUserData}></textarea><br/><br/>
          <button className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-14 py-6 rounded-3xl text-lg font-serif"  type="submit" onClick={submitData} >Send &nbsp;&nbsp;<AiOutlineSend  className="float-right text-2xl justify-center"/></button>
        </div>
      </form>
      
      </div>

      {/*Responsive */}
      <div className="md:hidden font-serif pt-4 pl-4 pr-4">
        <div class="grid grid-cols-2 border-0  border-white">
            <div className="border-0 border-white">
            <h1 className="text-8xl text-cyan-500" ><AiOutlineMail/></h1><br />
              </div>
            <div className="border-0 items-center justify-between border-white">
            <h1 className="float-right text-white text-2xl font-bold font-serif  " style={{paddingRight:"100px"}} >Email</h1>
            <h2 className="float-right  text-white text-sm font-serif" >prashikjadhav17@gmail.com</h2>
              </div>
              <div className="border-0  items-center border-white">
              <h1 className="text-8xl top-[-100%] text-green-500"  ><MdLocationOn /></h1>
              </div>
            <div className="border-0 border-white">
            <h1 className="float-right  text-white text-2xl font-bold font-serif  " style={{paddingRight:"55px"}}>Location</h1>
            <h2 className="float-right  text-white text-base font-serif" style={{paddingRight:"100px"}}>Kalyan</h2>
              </div>
        </div>
      </div>
      <form  method="POST">
      <div className=" md:hidden bg-black-200 p-4  gap-4 text-white" style={{paddingBottom:"200px"}}>
          {/* Content for the second column */}
          <input className="p-8  text-black font-serif rounded-lg "  style={{width:"100%"}} type="text" placeholder="Name" name="Name" value={userData.Name} onChange={postUserData}/><br/><br/>
          <input className="p-8 text-black font-serif  rounded-lg"  style={{width:"100%"}} type="email" placeholder="Email" name="Email" value={userData.Email} onChange={postUserData} /><br/><br/>
          <input className="p-8 rounded-lg text-black font-serif" style={{width:"100%"}}  placeholder="Project" name="Project" value={userData.Project} onChange={postUserData}/><br/><br/>
        <textarea className="p-20 rounded-lg  text-black justify-start font-serif"   cols="30" rows="2"  placeholder="Message"  style={{width:"100%"}} name="Message" value={userData.Message} onChange={postUserData}></textarea><br/><br/>
          <button className="bg-gradient-to-r from-blue-500 to-blue-800 text-white px-14 py-6 rounded-3xl text-lg font-serif"  type="submit" onClick={submitData} >Send &nbsp;&nbsp;<AiOutlineSend  className="float-right text-2xl justify-center"/></button>
        </div>
      </form>
      
           </div>
          </>
      )
  }
  export default Contact;