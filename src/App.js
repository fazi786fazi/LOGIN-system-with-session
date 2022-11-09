import "./App.css";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Navbaruser from "./components/Navbaruser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registation from "./components/Registation";
import Photos from "./components/Photos";
import Protected from "./components/Protected";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route index element={<Login />} />
          <Route path="/Registation" element={<Registation />} />
          <Route path="/Navbaruser" element={<Protected Abc={Navbaruser} />} />
          <Route
            path="/Photos"
            element={<Protected Cmp={Photos} Abc={Navbaruser} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
