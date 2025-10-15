import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleAbout from "./Utilities/SingleAbout";
import image1 from "../assets/icon-downloads.png";
import image3 from "../assets/icon-ratings.png";
import image2 from "../assets/icon-review.png";

function SingleApps() {
  const { id } = useParams();
  const loadData = useLoaderData();
  const data = loadData.find((apps) => apps.id === parseInt(id));
  console.log(data);
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
      <div className="grid grid-cols-2">
        <div>
          <img src={data.image} alt="" />
        </div>
        <div>
          <h3 className="font-bold text-3xl">{data.title}</h3>
          <p className="text-xl text[#627382}">
            Developed by{" "}
            <span className="font-bold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {data.companyName}
            </span>
          </p>
          <div className="flex gap-12">
            <SingleAbout
              icon={image1}
              title={"Downloads"}
              qty={formatNumber(data.downloads)}
            ></SingleAbout>
            <SingleAbout
              icon={image2}
              title={"Average Ratings"}
              qty={data.ratingAvg}
            ></SingleAbout>
            <SingleAbout
              icon={image3}
              title={"Total Reviews"}
              qty={formatNumber(data.reviews)}
            ></SingleAbout>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleApps;
