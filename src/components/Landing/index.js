import React, { useEffect } from "react";
import Phishing from "../../assets/phishing.svg";
import styles from "./index.module.css"
const Landing = () => {
  return (
    <div className={`${styles.landing} w-screen bg-DeepBlue pb-32 mb-20`}>
      <div className="flex flex-col md:flex-row jusitify-between  px-10 md:px-24 pt-8 py-2">
        <div className="flex-1 mt-10">
          <h1 className="text-4xl mb-10 md:mb-5 md:text-5xl lg:text-6xl text-white font-bold leading-normal ">
            Detect the <span className="text-yellow-400">Url</span> is <br/><br className="hidden md:block"/><span className="text-red-400">Malicious</span> or <span className="text-blue-500">Safe</span>
          </h1>
          <div className="w-full flex justify-start items-center mt-10 md:mt-20">
          <input className="w-2/3 py-4 px-3 rounded-l-md focus:outline-none" type="text" placeholder="Paste the URL"/>
          <button className="bg-blue-200 rounded-r-md text-blue-800 py-4 px-2 hover:bg-blue-400 ease-in-out">
            Check
          </button>
          </div>
          
        </div>
        <img className="w-2/3 md:w-1/3 mx-auto mt-8" src={Phishing} alt="phishing" />
      </div>
    </div>
  );
};

export default Landing;
