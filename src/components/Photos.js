import React from 'react'
//import { useNavigate } from "react-router-dom";

export default function Photos() {
  //const navigate = useNavigate();
  // let login= sessionStorage.getItem("code");
  // if(login==="login"){
    
  // }
  // else if (login==="logout"){
  //   navigate('/');
  // }
 
//   const List=()=>{
//     const name=sessionStorage.getItem("name");
//     const lname=sessionStorage.getItem("lname");

//     const name1=localStorage.getItem("name")
//     const lname1=localStorage.getItem("lname")
//    if(name===null && lname===null){
// return (
//   <>
//    <h1 className='text-black text-lg font-medium text-center py-2'>
//       Wellcome Admin:{localStorage.getItem("name")+" "+localStorage.getItem("lname")}
//       </h1>
//   </>
// )
//    }
//    else if(name1===null && lname1===null){
//     return (
//       <>
//        <h1 className='text-black text-lg font-medium text-center py-2'>
//       Wellcome User:{sessionStorage.getItem("name")+" "+sessionStorage.getItem("lname")}
//       </h1>
//       </>
//     )
//   }
 
//   }
  return (
    <div>
    
      <section className="overflow-hidden text-gray-700"> 
  <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
   {/* <List /> */}
   <h1 className='text-black text-lg font-medium text-center py-2'>
   Wellcome:{sessionStorage.getItem("name") !== null &&
            sessionStorage.getItem("lname") !== null
              ? sessionStorage.getItem("name") +
                " " +
                sessionStorage.getItem("lname")
              : " " + "Admin" + " "+localStorage.getItem("name") +
                " " +
                localStorage.getItem("lname")}
      </h1>

    <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/2">
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp"/>
        </div>
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="w-full p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"/>
        </div>
        <div className="w-1/2 p-1 md:p-2">
          <img alt="gallery" className="block object-cover object-center w-full h-full rounded-lg"
            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"/>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
