//import React from 'react'
//import React, {useState} from 'react'
// import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom";
import nexflixlogo from "./netflix-logo-png-2584.png"
import { n1 } from "../App";
import { useContext } from "react";


export default function Navbar(props) {
  function end(){
  // sessionStorage.clear();
  }

  const {state}=useContext(n1);

const Fun=()=>{
   if (state){
    return (
      <>
        <li>
          <a href="/Logout" onClick={end} className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            logout</a>
        </li>
      </>
    )
   }
   else{
    sessionStorage.setItem("code", "logout");
    return(
      <>
       <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        login</a>
        </li>
      </>
    )
   }
}


  //const [data, setData] = useState("login");
  // const navigate = useNavigate();
 // let code= sessionStorage.getItem("code");

  // const log = () =>{

    
  //   if (code==="login"){
  //     setData("logout");
  //   }
  //  else if (code==="logout"){
  //     setData("login");
  //   }
   
    
  
   // setData(code);
    //sessionStorage.clear();
   
    // navigate('/');
   
   

  
//   function check(){
//  if(code==="login"){
//       setdata("logout");
//     }
//     else if(code==="logout"){
//       data("login");
//     }
//   }



  return (
    <div>
      
<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 ">
  <div className="container flex flex-wrap justify-between items-center mx-auto ">
    <a href="/" className="flex items-center">
        <img src={nexflixlogo} className="mr-3 h-6 sm:h-9" alt="netflix Logo"/>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Netflix</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link to ="/Logout"  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">
            home</Link>
        </li>
       <Fun />
        {/* <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li> */}
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
