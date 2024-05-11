import React from "react";
import { bgStyles } from "../GlobalStyles";

interface PrimaryButtonProps {
  onClick: () => void;
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className={`text-xl py-5 rounded-xl text-white w-5/12 h-16 ${bgStyles.primaryBlue} ${bgStyles.loginHover}`}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
