import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

export default function Protected(props) {
    const {Cmp}= props;
    const navigate = useNavigate();
    useEffect(()=>{
       let login= sessionStorage.getItem("code")
        let login1= localStorage.getItem("login")
        // if(login1===true){
        //     navigate('/Photos')
        // }
    if(login1!==true && login!=="login"){
            navigate('/')
        }
       
    })
  return (
    <div>
        
      <Cmp />
    </div>
  )
}
