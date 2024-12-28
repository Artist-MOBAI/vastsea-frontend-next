import React from "react";

type buttonProps = {
  message: string;
};

const Button: React.FC<buttonProps> = ({ message }) => {
  return (
    <button className="ml-1 backdrop-blur-md bg-opacity-85 bg-vastsea-white text-vastsea-black border-b-4 border-vastsea-black px-6 font-pixel hover:bg-vastsea-black hover:text-vastsea-green text-xl">
      {message}
    </button>
  );
};

export default Button;
