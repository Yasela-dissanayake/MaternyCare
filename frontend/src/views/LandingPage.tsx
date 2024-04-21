import React from "react";
import logo from "../assets/images/logo.png";

const LandingPage = () => {
  return (
    <div>
    
    {/* <div className="flex justify-center items-start h-screen">
      <div className="justify-center mt-16">
        <img src={logo} alt="Materny Logo" className="w-24" />
      </div>
    </div>

    <div>
        <h1 style={{ color: "#F580AB", fontSize: "2.25rem", fontFamily: "Ubuntu" }}>Materny Care</h1>
    </div> */}
  

  <div className="flex flex-col justify-center items-center h-screen">
      <div className="justify-center mt-16">
        <img src={logo} alt="Materny Logo" className="w-24" />
      </div>
      <div className="mt-4 text-center">
        <h1 style={{ color: "#F580AB", fontSize: "2.25rem", fontFamily: "Ubuntu" }}>Materny Care</h1>
      </div>
    </div>









  
    </div>
  );
};

export default LandingPage;
