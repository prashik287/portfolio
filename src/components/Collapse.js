import React,{useState} from "react";
import { BiCodeCurly } from "react-icons/bi";
 export const Collapse = ({ title, children,icon }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
    };
  
    return (
     <>
           <div style={{paddingLeft:"150px"}}>
      <button
        className=" hidden md:flex items-start justify-between text-2xl rounded-full  font-serif py-2 px-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white hover:bg-blue-600 focus:outline-none" style={{width:"1000px",paddingLeft:"120px"}}
        onClick={handleToggle}
      >
       <span>{icon}</span>
        <span>{title}</span>
        <svg
          className={`w-4 h-4  text-8xl transition-transform ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          viewBox="0 0 24 24"
          fill="currentColor"
          
        >
          <path
            fillRule="evenodd"
            d="M16.293 8.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L12 10.586l3.293-3.293a1 1 0 0 1 1.414 0z"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="" style={{paddingLeft:"1px",width:"25%"}}>
        <div className="py-2 px-4   bg-black-100" style={{width:"950px"}} >
          <div className="" >{children}</div>
        </div>
        </div>
      )}
    </div>
     </>
    );
  };
  export default Collapse;
  