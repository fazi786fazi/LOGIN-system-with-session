import React from 'react'
import { useNavigate } from "react-router-dom";



export default function Logout() {
    const navigate = useNavigate();
    
        sessionStorage.setItem("code", "logout");
        navigate('/');
       
       
    
    
  return (
    <div>
     
    </div>
  )
}

