import React from "react";
import logo from "../assets/images/logo.png";
import Carousel from "../components/Carousel";

const LandingPage = () => {
  return (
    <div>

      <div className="flex flex-col justify-start items-center h-screen bg-[#F5F5F5]">
        <div className="mt-16">
          <img src={logo} alt="Materny Logo" className="w-24" />
        </div>
        <div className="mt-0 text-center leading-9 font-semibold">
          <h1 style={{ color: "#F580AB", fontSize: "2.25rem", fontFamily: "Ubuntu"}}>Materny Care</h1>
        </div>

        <div className="mt-12 text-center leading-8">
          <h2 style={{color: "#333333", fontSize: "2rem", fontFamily: "Ubuntu"}}>The stage is set! <br />Choose your role.</h2>
        </div>
      </div>

      <div className="mx-96">
        <Carousel />
      </div>
  
    </div>
  );
};

export default LandingPage;
