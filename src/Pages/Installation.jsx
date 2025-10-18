import React, { useContext, useEffect, useState } from "react";
import Ftitle from "../Components/Utilities/Ftitle";
import { IoMdArrowDropdown } from "react-icons/io";
import SingleAbout from "../Components/Utilities/SingleAbout";
import { AppContext } from "../Components/Utilities/ApiContext";
import image1 from "../assets/icon-downloads.png";
import image3 from "../assets/icon-ratings.png";
import image2 from "../assets/icon-review.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Installation() {
  const { appsContext } = useContext(AppContext);
  const [Install, setInstall] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("Apps")) || [];
    const filterData = appsContext.filter((app) => savedData.includes(app.id));
    setInstall(filterData);
  }, [appsContext]);

  // Format numbers like 1.2K, 3.5M
  function formatNumber(num) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num.toString();
    }
  }

  // Uninstall an app
  const BtnUninstall = (id) => {
    const savedData = JSON.parse(localStorage.getItem("Apps")) || [];
    const updatedData = savedData.filter((appId) => appId !== id);
    localStorage.setItem("Apps", JSON.stringify(updatedData));
    setInstall((prev) => prev.filter((app) => app.id !== id));
    toast.success("App Uninstalled Successfully!");
  };

  // Sorting by size
  const sortBySize = (order) => {
    const sorted = [...Install].sort((a, b) =>
      order === "asc" ? a.size - b.size : b.size - a.size
    );
    setInstall(sorted);
  };

  return (
    <div className="bg-[#f5f5f5] min-h-screen">
      <div className="p-20">
        <Ftitle
          title={"Your Installed Apps"}
          content={"Explore All Trending Apps on the Market developed by us"}
        />
        <div className="flex justify-between items-center mb-5">
          <p className="font-semibold text-2xl">
            {Install.length === 0 ? "No Apps Found" : `${Install.length} Apps Found`}
          </p>

          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Size <IoMdArrowDropdown />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 p-2 shadow-sm"
            >
              <li>
                <a onClick={() => sortBySize("asc")}>To Lower</a>
              </li>
              <li>
                <a onClick={() => sortBySize("desc")}>To Upper</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-5">
          {Install.map((data, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-5 bg-white rounded-xl shadow-sm"
            >
              <div className="flex items-center gap-6">
                <img src={data.image} alt={data.title} className="w-20 h-20" />
                <div>
                  <h4 className="text-xl font-semibold text-[#001931]">{data.title}</h4>
                  <div className="flex gap-3 mt-3">
                    <SingleAbout
                      className="flex items-center"
                      icon={image1}
                      imgSize="w-5 h-5"
                      textItem="text-green-500 text-base ml-2"
                      qty={formatNumber(data.downloads)}
                    />
                    <SingleAbout
                      className="flex items-center"
                      icon={image3}
                      imgSize="w-5 h-5"
                      textItem="text-[#FF8811] text-base ml-2"
                      qty={formatNumber(data.reviews)}
                    />
                    <SingleAbout
                      className="flex items-center"
                      textItem="text-[#627382] text-base ml-2"
                      qty={`${data.size} MB`}
                    />
                  </div>
                </div>
              </div>

              <button
                className="btn btn-success text-white"
                onClick={() => BtnUninstall(data.id)}
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </div>
    </div>
  );
}

export default Installation;
