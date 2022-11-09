import React, { useState } from "react";
import nexflixlogo from "./1487203696884.png";
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { eye } from "react-icons-kit/feather/eye";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);
  const show = () => {
    console.log("show yes");
    if (type === "password") {
      setIcon(eye);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };
  const [text, settext] = useState({
    username: "",
    password: "",
  });

  const onhandleuser = (e) => {
    settext((prev) => ({ ...prev, username: e.target.value }));
  };
  const onhandlepass = (e) => {
    settext((prev) => ({ ...prev, password: e.target.value }));
  };
  const adminlogin = () => {
    let email = sessionStorage.getItem("email");
    let pass = sessionStorage.getItem("pass");

    let email2 = localStorage.getItem("email");
    let pass2 = localStorage.getItem("pass");

    let login = sessionStorage.getItem("code");
    let login1 = localStorage.getItem("login");

    if (
      (email2 === text.username &&
        pass2 === text.password &&
        login1 === "logout") ||
      (text.username === email && text.password === pass && login === "logout")
    ) {
      sessionStorage.setItem("code", "login");
      localStorage.setItem("login", "login");
      navigate("/Photos");
      toast("You are successfully logged in");
    } else {
      toast("Login failed");
    }
  };
  return (
    <>
      <section className="h-full gradient-form bg-gray-100  ">
        <div className="container py-12 px-6 h-full ">
          <div className="flex   justify-center items-center flex-wrap h-full g-6 text-gray-800">
            <div className="xl:w-10/12 ">
              <div className="block bg-white shadow-lg rounded-lg ">
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
                          Login form Flytographer account
                        </h4>
                      </div>
                      <form
                        type="submit"
                        // onSubmit={adminlogin}
                      >
                        <p className="mb-4">Please login to your account</p>
                        <div className="mb-4">
                          <input
                            type="email"
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="email"
                            placeholder="Username"
                            required
                            value={text.username}
                            onChange={onhandleuser}
                          />
                        </div>
                        <div className="mb-4 ">
                          <input
                            type={type}
                            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
                            id="pass"
                            placeholder="Password"
                            required
                            value={text.password}
                            onChange={onhandlepass}
                          />
                          <span
                            className="cursor-pointer float-right mr-4 -mt-8 relative "
                            onClick={show}
                          >
                            <Icon icon={icon} />
                          </span>
                        </div>
                        <div className="text-center pt-1 mb-12 pb-1">
                          <button
                            className="inline-block bg-black px-6 py-2.5 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                            //type="submit"
                            onClick={adminlogin}
                          >
                            Log in
                          </button>

                          <Link className="text-gray-500 text-black " to="/">
                            Admin
                          </Link>
                          <a className="text-gray-500" href="/">
                            |
                          </a>
                          <Link
                            className="text-gray-500 text-black"
                            to="/Registation"
                          >
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
                      <img
                        className="mx-auto w-48 "
                        src={nexflixlogo}
                        alt="logo"
                      />
                      <h4 className="text-xl font-semibold mb-6 text-center">
                        Flytographer Company
                      </h4>
                      <p className="text-sm">
                        Flytographer is a subscription-based streaming service
                        that allows our members to watch TV shows and movies on
                        an internet-connected device. It has a huge selection of
                        movies and TV shows old and new, tons of high-quality
                        original programs, and an easy-to-navigate interface.
                        Even though it no longer offers a free trial, it's worth
                        trying Netflix for a month if you want something new to
                        watch.
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
