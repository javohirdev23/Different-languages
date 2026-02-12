import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-screen fixed inset-0 bg-white gap-x-2 flex justify-center items-center">
      <div className="w-5 bg-[#604457] animate-pulse h-5 rounded-full animate-bounce" />
      <div className="w-5 animate-pulse h-5 bg-[#2d0c43] rounded-full animate-bounce" />
      <div className="w-5 h-5 animate-pulse bg-[#0b081b] rounded-full animate-bounce" />
    </div>
  );
};

export default Loader;
