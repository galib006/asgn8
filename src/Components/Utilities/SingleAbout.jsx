import React from "react";

function SingleAbout({ icon, title, qty }) {
  return (
    <div>
      <img src={icon} alt="" />
      <p className="text-base text-[#001931] my-3">{title}</p>
      <h3 className="text-[#001931] text-4xl font-bold">{qty}</h3>
    </div>
  );
}

export default SingleAbout;
