import React from "react";
import Navbar from "../../components/Navbar";
import Phishing from "../../assets/phishing.svg";
import { useParams } from "react-router-dom";
import Check from "../../assets/check.svg";
const Category = () => {
  const { category } = useParams();

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className={`w-screen bg-DeepBlue pb-32`}>
        <div className="flex flex-col md:flex-row jusitify-between  px-10 md:px-24 pt-8 py-2">
          <div className="flex-1 mt-10">
            <h1 className=" text-4xl mb-10 md:mb-5 md:text-5xl lg:text-6xl text-white font-bold leading-normal ">
              The URL is
              {category == "benign" ? (
                <span className=" flex ml-4 mt-5">
                  <span className="text-blue-500">a Safe URL</span>
                  <img className="ml-4 w-12" src={Check} alt="" />
                </span>
              ) : category == "phishing" ? (
                <span className="text-red-600 ml-4">a Phishing URL</span>
              ) : category == "malware" ? (
                <span className="text-red-600 ml-4">
                  prone to Malware attack
                </span>
              ) : (
                <span className="text-red-600 ml-4">a Defaced URL</span>
              )}
            </h1>
            {category == "benign" ? (
              <div className="py-12  w-full md:w-2/3 mt-8 text-xl text-white">
                The website looks free of phishing,malware and defacement.
                <br />
                <br />
                You can go ahead surfing through this webite.
              </div>
            ) : category == "phishing" ? (
              <div className="py-12  w-full md:w-2/3 mt-8 text-xl text-white">
                The website is highly prone to Malware attacks.
                <br />
                <br />
                Visiting this website might affect your device.
              </div>
            ) : category == "malware" ? (
              <div>
              <div className="py-12 text-red-400 w-full md:w-2/3 mt-8 text-xl text-white">
                The website is highly prone to Malware attacks.
                <br />
                <br />
                Visiting this website might affect your device.
              </div>
              <button className="bg-transparent">Want to Know More</button>
              </div>
            ) : (
              <span className="text-red-600">a Defaced URL</span>
            )}
          </div>
          <img
            className="w-2/3 md:w-1/3 mx-auto mt-8"
            src={Phishing}
            alt="phishing"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
