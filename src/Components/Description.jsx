import React from "react";

function Description({ children }) {
  return (
    <p className="text-[14px] text-[#333] leading-relaxed">
      {children}
    </p>
  );
}

export default Description;
