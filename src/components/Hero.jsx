import React from "react";
import ReactTyped from "react-typed";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Hero = () => {
  const {darkMode, setDarkMode} = useContext(AppContext);
  return (
    <div className="">
      <div className=" max-w-[800px] mt[-96px] w-full h-screen mx-auto flex text-center flex-col items-center justify-center">
        <p className={(darkMode?"text-emerald-300 ":"text-emerald-800")+ " text-2xl font-bold p-1 -mt-16"}>
          Finding the best Human Resource
        </p>
        <p className={(darkMode?"text-white ":"")+ "md:text-7xl sm:text-6xl text-4xl font-bold md:py-6"}>
          Grow with <span className={(darkMode?"text-emerald-300 ":"text-emerald-800")}>OTS</span>
        </p>
        <div className="flex gap-3 justify-center md:text-4xl sm:text-3xl text-xl font-bold">
          <p className={(darkMode?"text-white ":"")+ "md:text-4xl sm:text-3xl text-xl font-bold"}>
            Hiring
          </p>
          <ReactTyped
            className={(darkMode?"text-gray-500 ":"text-gray-800 ")+ "md:text-4xl sm:text-3xl text-xl font-bold "}
            strings={["talented", "hardworking", "dedicated"]}
            typeSpeed={120}
            backSpeed={130}
            loop
          />
          <span className={(darkMode?"text-white ":"")}>Employees</span>
        </div>
        <p className="md:text-xl text-lg font-bold text-gray-500">With our consistent and dedicated effort, OST has become a storn to an increasing number of respected MNCs operating in emerging markets today.</p>
        <div className="md:text-2xl text-lg mt-7">
            <Link to="/feed" className={(darkMode?"bg-emerald-300 hover:bg-emerald-200":"bg-emerald-800 text-white hover:bg-emerald-900")+ " px-4 py-2 rounded-md mt-4  mr-10"}>Blogs</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
