import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleAbout from "./Utilities/SingleAbout";
import image1 from "../assets/icon-downloads.png";
import image3 from "../assets/icon-ratings.png";
import image2 from "../assets/icon-review.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function SingleApps() {
  const { id } = useParams();
  const loadData = useLoaderData();
  const data = loadData.find((apps) => apps.id === parseInt(id));
  // console.log(data);
  function formatNumber(num) {
    if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
    } else {
      return num.toString();
    }
  }

  const ratingOrder = ["5 star", "4 star", "3 star", "2 star", "1 star"];
  const sortedRatings = ratingOrder
    .map((name) => data.ratings.find((r) => r.name === name))
    .filter(Boolean);
  const [items, setitems] = useState(() => {
    const saved = localStorage.getItem("Apps");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("Apps", JSON.stringify(items));
  }, [items]);
  const btnClick = () => {
    if (!items.includes(data.id)) {
      setitems([...items, data.id]);
      toast.success("App Insstalled Successfull!");
    } else {
      toast.error("Alerady Add", {
        style: {
          border: "#dc2626",
          color: "#000",
          fontWeight: "600",
        },
      });
    }
  };
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-4 mx-6 lg:mx-20 items-center">
        <div className="col-span-1">
          <img className="w-[350px]" src={data.image} alt="" />
        </div>
        <div className="col-span-3">
          <h3 className="font-bold text-3xl">{data.title}</h3>
          <p className="text-xl text-[#627382] mt-2">
            Developed by{" "}
            <span className="font-bold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              {data.companyName}
            </span>
          </p>
          <div className="divider"></div>
          <div className="flex gap-18">
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
          <button
            className="btn btn-success text-white mt-7"
            onClick={() => {
              btnClick();
            }}
          >
            Install Now ({data.size} MB)
          </button>
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

      <div className="mx-6 lg:mx-20">
        <div className="divider"></div>
        <h4 className="font-semibold text-2xl text-[#001931]">Ratings</h4>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={sortedRatings}
            layout="vertical"
            margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
          >
            <XAxis type="number" axisLine={false} tickLine={false} />
            <YAxis
              dataKey="name"
              type="category"
              axisLine={false}
              tickLine={false}
            />
            <Bar
              dataKey="count"
              fill="#FF8811"
              barSize={20}
              isAnimationActive={true}
              activeIndex={-1}
              activeShape={null}
              shape={<Rectangle />}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="divider"></div>
      </div>
      <div className="mx-6 lg:mx-20 mb-10">
        <h4 className="font-semibold text-2xl text-[#001931]">Description</h4>
        <div className="text-[#627382] text-xl mt-6">{data.description}</div>
      </div>
    </div>
  );
}

export default SingleApps;
