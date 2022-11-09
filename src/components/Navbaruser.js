import React from "react";
import { Link } from "react-router-dom";
import nexflixlogo from "./1487203696884.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { user } from "react-icons-kit/fa/user";
import { Icon } from "react-icons-kit";

export default function Navbar() {
  function end() {
    localStorage.setItem("login", "logout");
    toast("Logout your account");
    sessionStorage.setItem("code", "logout");
    sessionStorage.clear();
  }

  return (
    <div>
      <nav className="bg-red-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900 fixed w-full top-0 py-1">
        <div className="container flex flex-wrap justify-between items-center mx-auto bg-red-500 ">
          <a href="/" className="flex items-center">
            <img
              src={nexflixlogo}
              className="mr-3 h-6 sm:h-9"
              alt="netflix Logo"
            />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flytographer</span> */}
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-red-500"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex  flex-col p-4 mt-4  rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-red-500 dark:bg-red-500 md:dark:bg-red-500 dark:border-gray-700">
              <li>
                <Link
                  to="/"
                  className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <span className="cursor-pointer  relative text-xs  ">
                <Icon icon={user} />
              </span>
              <span className="">
                {sessionStorage.getItem("name") !== null &&
                sessionStorage.getItem("lname") !== null
                  ? sessionStorage.getItem("name") +
                    " " +
                    sessionStorage.getItem("lname")
                  : " Admin " +
                    localStorage.getItem("name") +
                    " " +
                    localStorage.getItem("lname")}
              </span>
              <li>
                <a
                  href="/"
                  onClick={end}
                  className="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
