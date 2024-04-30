import React, { ChangeEvent } from "react";

interface InputFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ value, onChange }) => {
  //   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
  //     onChange(event.target.value);
  //   };

  return (
    <input
      className={`shadow appearance-none border rounded-lg py-4 px-4 w-5/12	 text-gray-700 leading-tight focus:outline-[#0D99FF] focus:shadow-outline`}
      id={value}
      type="text"
      //   value={value}
      //   onChange={handleInputChange}
      placeholder={value}
    />
  );
};

export default InputField;
