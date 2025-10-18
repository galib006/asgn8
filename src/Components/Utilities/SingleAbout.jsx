import React from "react";

function SingleAbout({ className ="" ,icon, title, qty,imgSize,textItem }) {
  return (
    <div className={`${className}`}>
      {icon === "" ? "" : <img src={icon} alt="" className={`${imgSize}`} />}
      
      <p className="text-base text-[#001931] my-3">{title}</p>
      <h3 className={`${textItem} text-[#001931] text-4xl font-bold `}>{qty}</h3>
    </div>
  );
}

export default SingleAbout;
