
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registation from './components/Registation';
import Photos from './components/Photos';
import React, { createContext, useReducer } from 'react';
import {initialState, reducer} from "../src/reducer/Usereducer"
import Logout from './components/Logout';
import Protected from './components/Protected';



export const n1= createContext();
function App() {
 
  const [state, dispatch]=useReducer(reducer, initialState)
  return (
    <>
    <n1.Provider value={{state, dispatch}}>
     <BrowserRouter>
     <Navbar  />
      <Routes>
        <Route path="/" element={<Login  />}/>
          <Route index element={ <Login/>} />
        <Route path="/Registation" element={<Registation/>} />
        <Route path="/Photos" element={< Protected Cmp={Photos} />} />
        <Route path="/Logout" element={<Logout/>} />
      </Routes>
    </BrowserRouter>
    </n1.Provider>
    
 
    </>
  );
}

export default App;
