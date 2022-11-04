
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registation from './components/Registation';
import Photos from './components/Photos';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Login/>}/>
          <Route index element={ <Login/>} />
        <Route path="/Registation" element={<Registation/>} />
        <Route path="/Photos" element={<Photos/>} />
      </Routes>
    </BrowserRouter>
    
 
    </>
  );
}

export default App;
