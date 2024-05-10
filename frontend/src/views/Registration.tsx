import React from "react";
import logo from "../assets/images/logo.png";

const Registration = () => {
  return (
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
    
    </div>
  );
};

export default Registration;
