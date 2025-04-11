import React from "react";

const Button = ({ children, onClick, variant = "primary" }) => {
  const baseStyle = "px-4 py-2 rounded-lg font-semibold transition-all";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-300 text-black hover:bg-gray-400",
    danger: "bg-red-500 text-white hover:bg-red-600",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

export default Button;