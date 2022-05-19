import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Logo from "../../assets/logo.png";
const Navbar = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
  return (
    <div className="flex flex-row justify-between items-center text-lg text-white w-screen px-4 md:px-24 py-8 bg-DeepBlue">
      <div
        className="text-md md:text-2xl flex-1 flex items-center cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={Logo} alt="logo" />
        <span className="ml-2">Recognia</span>
      </div>

      <ul
        className={`flex  items-center flex-1 justify-end ${
          params.category && "invisible"
        }`}
      >
        <li
          className="text-sm md:text-xl mr-12 cursor-pointer"
          onClick={() =>
            document
              .getElementById("about")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          About Us
        </li>
        <li
          className="text-sm md:text-xl cursor-pointer"
          onClick={() =>
            document
              .getElementById("feature")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Features
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
