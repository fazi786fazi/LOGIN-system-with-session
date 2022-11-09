import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Registation() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [text, settext] = useState({
    name: "",
    lname: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const onhandlename = (e) => {
    settext((prev) => ({ ...prev, name: e.target.value }));
  };
  const onhandlelname = (e) => {
    settext((prev) => ({ ...prev, lname: e.target.value }));
  };
  const onhandlepassword = (e) => {
    settext((prev) => ({ ...prev, password: e.target.value }));
  };
  const onhandleconfirmpassword = (e) => {
    settext((prev) => ({ ...prev, confirmpassword: e.target.value }));
  };
  const onhandleemail = (e) => {
    settext((prev) => ({ ...prev, email: e.target.value }));
  };

  function Register(e) {
    e.preventDefault();

    if (text.password === text.confirmpassword && text.password.length >= 8) {
      sessionStorage.setItem("lname", text.lname);
      sessionStorage.setItem("name", text.name);
      sessionStorage.setItem("email", text.email);
      sessionStorage.setItem("pass", text.password);
      sessionStorage.setItem("c_pass", text.confirmpassword);

      toast("Account create successfully");
      navigate("/");
    } else if (text.password !== text.confirmpassword) {
      setError(
        "Passwords do not match OR Password must have at least 8 characters"
      );
    }
  }
  return (
    <>
      <body className="font-mono bg-gray-400">
        <div className="container mx-auto">
          <div className="flex justify-center px-6 my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              <div
                className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
                style={{
                  backgroundImage:
                    " url('https://source.unsplash.com/Mv9hjnEUHR4/600x800')",
                }}
              ></div>

              <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
                <h3 className="pt-4 text-2xl text-center">
                  Create an Account!
                </h3>
                <form
                  className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                  type="submit"
                  onSubmit={Register}
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        for="firstName"
                      >
                        First Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        required
                        onChange={onhandlename}
                        value={text.name}
                      />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        for="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        required
                        onChange={onhandlelname}
                        value={text.lname}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      for="email"
                    >
                      Email
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Email"
                      required
                      onChange={onhandleemail}
                      value={text.email}
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        for="password"
                      >
                        Password
                      </label>
                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none "
                        id="password"
                        type="text"
                        placeholder="password"
                        required
                        onChange={onhandlepassword}
                        value={text.password}
                      />
                      <span style={{ color: "red" }}>{error}</span>
                      <br />
                    </div>
                    <div className="md:ml-2">
                      <label
                        className="block mb-2 text-sm font-bold text-gray-700"
                        for="c_password"
                      >
                        Confirm Password
                      </label>

                      <input
                        className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="c_password"
                        type="text"
                        placeholder="Confirm Password"
                        required
                        onChange={onhandleconfirmpassword}
                        value={text.confirmpassword}
                      />
                      <span style={{ color: "red" }}>{error}</span>
                    </div>
                    <br />
                  </div>

                  <div className="mb-6 text-center">
                    <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                      Register Account
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />

                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="/"
                    >
                      Already have an account? Login!
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}
