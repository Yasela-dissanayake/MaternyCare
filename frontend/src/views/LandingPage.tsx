import React from "react";
import MUIResponsiveDrawer from "../components/MUIResponsiveDrawer";
import RightBar from "../components/RightBar";
import PrimaryButton from "../components/PrimaryButton";

const LandingPage = () => {
  return (
    <div className="text-center">
      <PrimaryButton label="Login" onClick={() => {}} />
      <div className="p-2" />
      <PrimaryButton label="Registration" onClick={() => {}} />
      <div className="p-2" />
      <PrimaryButton label="Login" onClick={() => {}} />
    </div>
  );
};

export default LandingPage;
