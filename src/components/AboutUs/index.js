import React from "react";
import Secure from "../../assets/secure.svg";
import Search from "../../assets/search.svg";
import styles from "./index.module.css"
const About = () => {
  return (
    <div className={` mt-2 px-10 md:px-24 pb-40 pt-20`} id="about">
      <h1 className="text-white font-bold text-3xl text-center w-full mb-8">
       About Us
      </h1>
      <div className="w-full md:w-1/2 text-xl text-gray-400 mx-auto leading-10">
      <span className="text-4xl text-yellow-600">Recognia</span> is a website that identifies different cyber attacks done through urls such as phishing, defacement, malware and shows if the website is legitimate and safe to use or it can harm your computer. It's a one-stop shop for all your security needs. It's also an educational website that teaches you how to stay safe on the internet.
      </div>
    </div>
  );
};

export default About;
