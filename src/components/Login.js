import React, { useContext } from "react";
import nexflixlogo from "./netflix-logo-png-2584.png"

import { Link, useNavigate } from "react-router-dom";
import { n1 } from "../App";

export default function Login() {
  const {dispatch}=useContext(n1);
  const navigate = useNavigate();

//   useEffect(()=>{
//     //let login= sessionStorage.getItem("code")
//    let login1= localStorage.getItem("login")
//     if(login1){
//       navigate('/Photos');
//     }
   
// })
  const adminlogin=()=>{
    // localStorage.setItem("login", true);
   
    
 let email1= document.getElementById("email").value;
 let pass1= document.getElementById("pass").value;

 let email=sessionStorage.getItem("email");
 let pass=sessionStorage.getItem("pass");

 let email2=localStorage.getItem("email");
 let pass2=localStorage.getItem("pass");

 let login= sessionStorage.getItem("code")
let login1= localStorage.getItem("login")


 

 if(email1===email && pass1===pass && login==="logout" ){

  dispatch({type:"user", payload: true})
  alert("correct email and pass vaild");
  //  window.location.href="/Photos"
 
  sessionStorage.setItem("code", "login");
 
 navigate('/Photos');

}
else if( email2===email1 && pass2===pass1 && login1!==true ){
  
  dispatch({type:"user", payload: true})
  alert("correct email and pass vaild");
  navigate('/Photos');
  //  window.location.href="/Photos"
  //localStorage.setItem("login", true);
  sessionStorage.setItem("code", "login");
 
 
  
 
 }
 else{
  dispatch({type:"user", payload: false})
  alert("incorrect email and pass invaild");
 
 }
  }
  return (
    <>
      <section className="h-full gradient-form bg-gray-100  ">
        <div className="container py-12 px-6 h-full">
          <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12">
              <div className="block bg-white shadow-lg rounded-lg">
                <div className="lg:flex lg:flex-wrap g-0">
                  <div className="lg:w-6/12 px-4 md:px-0">
                    <div className="md:p-12 md:mx-6">
                      <div className="text-center">
                        <img
                          className="mx-auto w-48"
                          src={nexflixlogo}
                          alt="logo"
                        />
                        <h4 className="text-xl font-semibold mt-1 mb-12 pb-1">
                          Login form NETFLIX account
                        </h4>
                      </div>
                      <form  type="submit"
                            onSubmit={adminlogin}
                             >
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="Username"
                            required
                          />
                        </div>
                        <div className="mb-4">
                          <input
                            type="password"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="pass"
                            placeholder="Password"
                            required
                          />
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block bg-black px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                          >
                            Log in
                          </button>
                          <Link className="text-gray-500 text-black " to="/">
                            Admin
                          </Link>
                          <a className="text-gray-500" href="/">
                            |
                          </a>
                          <Link className="text-gray-500 text-black" to="/Registation">
                            User
                          </Link>
                          <br></br>
                          <a className="text-gray-500" href="#!">
                            Forgot password?
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="lg:w-6/12 flex items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none"
                    style={{
                      background:
                        "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                    }}
                  >
                    <div className="text-white px-4 py-6 md:p-12 md:mx-6">
                      <h4 className="text-xl font-semibold mb-6">
                        We are more than just a company
                      </h4>
                      <p className="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
