import React from "react";

type buttonProps = {
  message: string;
};

const Button: React.FC<buttonProps> = ({ message }) => {
  return (
    <button className="flex flex-row border-l-2 border-t-2 border-vastsea-black px-1 mr-2 font-pixel text-xl hover:bg-vastsea-green hover:text-vastsea-black">
      {message}
    </button>
  );
};

export default Button;
