import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
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
      <div className="card bg-base-100  shadow-sm p-4">
        <figure className="px-10 pt-10 bg-[#D9D9D9]">
          <img
            src={data.image}
            alt="Shoes"
            className="rounded-xl h-80 w-full"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions">
            <div className="flex justify-between w-full">
              <div className="flex items-center gap-1">
                <MdOutlineFileDownload />
                <p>{formatNumber(data.downloads)}</p>
              </div>
              <div className="flex items-center gap-1">
                <FaStar />
                <p>{data.ratingAvg}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
