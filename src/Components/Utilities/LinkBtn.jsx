import React from "react";

function LinkBtn({title,img}) {
  return (<>
    <button className="btn font-semibold text-xl "><img src={img} alt="" className="w-7"/>{title}</button>
  </>);
}

export default LinkBtn;
