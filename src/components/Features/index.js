import React from "react";
import Secure from "../../assets/secure.svg";
import Search from "../../assets/search.svg";
import VirusAttack from "../../assets/multiattack.svg"
import styles from "./index.module.css"
const Features = () => {
  return (
    <div className={`${styles.feature} bg-DeepBlue mt-2 px-10 md:px-24 py-32`} id="feature">
      <h1 className="text-blue-400 text-3xl text-center w-full mb-8">
        Our Features
      </h1>
      <div className="flex flex-col md:flex-row justify-center mb-10">
        <div className="text-white bg-green-800 w-full md:w-1/5 px-4 py-8 text-xl text-center leading-10 mr-4 flex flex-col items-center mb-5 md:mb-0">
          <img className="w-4/5" src={Secure} alt="" />
          <div >Safe, free and automatic website risk assessment.</div>
        </div>
        <div className="text-white bg-green-800 w-full md:w-1/5 px-6 py-8 text-xl text-center leading-10 flex flex-col items-center mr-4 mb-5 md:mb-0">
          <img className="w-4/5" src={Search} alt="" />
          <div>
            Scan links with recognia to outline the severity of the attack.
          </div>
        </div>
        <div className="text-white bg-green-800 w-full md:w-1/5 px-6 py-8 text-xl text-center leading-10 flex flex-col items-center">
          <img className="w-4/5" src={VirusAttack} alt="" />
          <div>
            Protects you from multiple cyber attacks
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;