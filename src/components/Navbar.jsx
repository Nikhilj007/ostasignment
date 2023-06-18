import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const { darkMode, setDarkMode } = useContext(AppContext);
  return (
    <div className={`${darkMode?"bg-black ":"bg-white "}`+ " flex sticky top-0 z-50 shadow-lg justify-between py-6 px-10 text-2xl"}>
      <div className="flex md:gap-10 gap-5">
        <Link className={`${darkMode?"text-emerald-300 ":"text-emerald-800 "}`+ "font-bold text-4xl "} to="/">
          OTS
        </Link>
        <label >
          <input onClick={()=>{setDarkMode(!darkMode)}} className="toggle-checkbox" type="checkbox" />
          <div className="toggle-slot">
            <div className="sun-icon-wrapper">
              <div
                className="iconify sun-icon"
                data-icon="feather-sun"
                data-inline="false"
              ></div>
            </div>
            <div className="toggle-button"></div>
            <div className="moon-icon-wrapper">
              <div
                className="iconify moon-icon"
                data-icon="feather-moon"
                data-inline="false"
              ></div>
            </div>
          </div>
        </label>
      </div>

      <ul
        className={`${darkMode?"text-white ":"text-black "}`+
          "lg:flex " +
          (click ? "block " : "hidden ") +
          "z-10 nav-menu flex gap-5 font-medium"
        }
      >
        <li className=" max-lg:mt-10 hover:border px-3 rounded-xl hover:-translate-x-0.5 transition ease-out shadow-md duration-200">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:border px-3 rounded-xl hover:-translate-x-0.5 transition ease-out shadow-md duration-200">
          <Link to="/feed">Feeds</Link>
        </li>
        <li className="hover:border px-3 rounded-xl hover:-translate-x-0.5 transition ease-out shadow-md duration-200">
          <Link to="/jobs">Jobs</Link>
        </li>
        <li className="hover:border px-3 rounded-xl hover:-translate-x-0.5 transition ease-out shadow-md duration-200">
          <Link to="/events">Events</Link>
        </li>
      </ul>
      <div className="hamburger z-20" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} className="text-green-900" />
        ) : (
          <FaBars size={20} className="text-green-900" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
