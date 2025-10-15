import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
function Card({ index, data }) {
  function formatNumber(num) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num.toString();
    }
  }
  return (
    <div>
      <NavLink to={`/apps/${data.id}`}>
        <div className="card bg-base-100  shadow-sm p-4">
          <figure className="px-10 pt-10 bg-[#D9D9D9] rounded-2xl">
            <img
              src={data.image}
              alt="Shoes"
              className="rounded-xl h-80 w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <div className="card-actions">
              <div className="flex justify-between w-full text-base mt-3">
                <div className="flex items-center gap-1 text-[#00D390] bg-[#F1F5E8] py-1.5 px-2 rounded-sm">
                  <MdOutlineFileDownload />
                  <p>{formatNumber(data.downloads)}</p>
                </div>
                <div className="flex items-center gap-1 text-[#FF8811] bg-[#FFF0E1] py-1.5 px-2 rounded-sm">
                  <FaStar />
                  <p>{data.ratingAvg}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default Card;
