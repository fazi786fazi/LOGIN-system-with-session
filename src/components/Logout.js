import React, { useEffect } from 'react'
import Login from './Login';

export default function Logout() {
    useEffect(() => {
    sessionStorage.clear();
      //localStorage.setItem("login", false);
      }, []);
  return (
    <div>
     <Login/>
    </div>
  )
}
