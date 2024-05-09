import React from "react";
import logo from "../assets/images/logo.png";
import Carousel from "../components/Carousel";

const LandingPage = () => {
  return (
    <div>

      <div className="flex flex-col justify-start items-center h-screen bg-[#F5F5F5]">
        <div className="mt-10">
          <img src={logo} alt="Materny Logo" className="w-24" />
        </div>

        <div className="mt-0 text-center leading-9 font-semibold">
          <h1 style={{ fontFamily: "Ubuntu", fontSize: "2.25rem" }}>
            <span style={{ color: "#0D99FF" }}>Materny</span>
            <span style={{ color: "#F580AB" }}> Care</span>
          </h1>
        </div>

        <div className="mt-6 text-center leading-8">
          <h2 style={{color: "#333333", fontSize: "2rem", fontFamily: "Ubuntu"}}>The stage is set! <br />Choose your role.</h2>
        </div>

        <div className="mt-4 w-full md:w-1/2">
          <Carousel />
        </div>

        <div className="mt-4">
          <button className="bg-[#0D99FF] hover:bg-[#80CAFF] text-white font-bold py-2 px-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
      </div>

  
    </div>
  );
};

export default LandingPage;
