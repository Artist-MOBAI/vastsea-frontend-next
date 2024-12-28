import React from "react";

type quoteProps = {
  message: string;
};

const Quote: React.FC<quoteProps> = ({ message }) => {
  return (
    <div className="absolute bg-vastsea-black text-vastsea-white font-pixel w-auto px-1 border-2 border-vastsea-black text-xl my-2">
      {message}
    </div>
  );
};

export default Quote;
