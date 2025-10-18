import React, { useContext, useEffect, useState } from "react";
import Ftitle from "../Components/Utilities/Ftitle";
import { IoMdArrowDropdown } from "react-icons/io";
import SingleAbout from "../Components/Utilities/SingleAbout";
import { AppContext } from "../Components/Utilities/ApiContext";
import image1 from "../assets/icon-downloads.png";
import image3 from "../assets/icon-ratings.png";
import image2 from "../assets/icon-review.png";
function Installation() {
  const { appsContext } = useContext(AppContext);
  const [Install, setInstall] = useState([]);
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("Apps")) || [];
    const filterData = appsContext.filter((app) => savedData.includes(app.id));
    setInstall(filterData);
  }, [appsContext]);
  console.log({ Install });
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
    <div className="bg-[#f5f5f5]">
      <div className="p-20">
        <Ftitle
          title={"Your Installed Apps"}
          content={"Explore All Trending Apps on the Market developed by us"}
        ></Ftitle>
        <div className="flex justify-between">
          <div>
            <p className="font-semibold text-2xl">
              {Install.length === 0
                ? "No Apps Found"
                : Install.length + " Apps Found"}{" "}
            </p>
          </div>
          <div>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort By Size <IoMdArrowDropdown />
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>To Upper</a>
                </li>
                <li>
                  <a>To Lower</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          {Install.map((data, index) => (
            <div className="flex justify-between mt-7 p-5 bg-white rounded-xl items-center">
              <div className="flex items-center gap-6">
                <div>
                  <img src={data.image} alt="" className="w-20 h-20" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-[#001931]">{data.title}</h4>
                  <div className="flex gap-4 mt-3">
                    <SingleAbout className="flex items-center"
                      icon={image1} imgSize="w-5 h-5" textItem="!text-[#00D390] !text-base ml-2"
                      qty={formatNumber(data.downloads)}
                    ></SingleAbout>
                    <SingleAbout className="flex items-center" imgSize="w-5 h-5" textItem="!text-[#00D390] !text-base ml-2"
                      icon={image3}
                    
                      qty={formatNumber(data.reviews)}
                    ></SingleAbout>
                    <SingleAbout className="flex items-center" imgSize="w-5 h-5" textItem="!text-[#00D390] !text-base ml-2"
                      qty={`${data.size} MB`}
                    ></SingleAbout>
                    
                  </div>
                </div>
              </div>
              <div>
                <button className="btn btn-success text-white">
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Installation;
