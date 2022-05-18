import React from "react";
import Logo from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center text-lg text-white w-screen px-4 md:px-24 py-8 bg-DeepBlue">
      <div className="text-md md:text-2xl flex-1 flex items-center"><img src={Logo} alt="logo"/><span className="ml-2">Recognia</span></div>

      <ul className="flex  items-center flex-1 justify-end">
        <li className="text-sm md:text-2xl mr-12 cursor-pointer">About Us</li>
        <li className="text-sm md:text-2xl cursor-pointer">Features</li>
      </ul>
    </div>
  );
};

export default Navbar;
