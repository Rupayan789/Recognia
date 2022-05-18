import React from "react";
import About from "../../components/AboutUs";
import Features from "../../components/Features";
import Landing from "../../components/Landing";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <Landing />
      <About />
      <Features />
    </div>
  );
};

export default Home;
