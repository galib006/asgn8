import React from "react";

function Ftitle({ title, content }) {
  return (
    <div className="text-center">
      <h3 className="font-bold text-5xl text-[#001931]">{title}</h3>
      <p className="text-xl text-[#627382] my-4">{content}</p>
    </div>
  );
}

export default Ftitle;
