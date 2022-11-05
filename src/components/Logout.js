import React, { useEffect } from 'react'
import Login from './Login';

export default function Logout() {
    useEffect(() => {
       sessionStorage.clear();
      }, []);
  return (
    <div>
     <Login/>
    </div>
  )
}
