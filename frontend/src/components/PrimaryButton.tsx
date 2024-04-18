import React from "react";

interface PrimaryButtonProps {
  onClick: () => void;
  label: string;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ onClick, label }) => {
  return (
    <button
      onClick={onClick}
      className="text-xl bg-cyan-400 px-60 py-5 rounded-xl text-white"
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
