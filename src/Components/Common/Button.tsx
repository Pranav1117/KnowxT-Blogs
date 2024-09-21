import React from "react";

type ButtonProps = {
  label: string;
  type: buttonType.Submit;
  disabled?: boolean;
};

enum buttonType {
  Submit = "submit",
  Button = "button",
  Reset = "reset",
  Underfined = "undefined",
}

const Button = ({ label, type, disabled = false }: ButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className="text-white w-[100%] bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 "
    >
      {label}
    </button>
  );
};

export default Button;
