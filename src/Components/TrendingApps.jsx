import axios from "axios";
import React, {
  createContext,
  use,
  useContext,
  useEffect,
  useState,
} from "react";
import Ftitle from "./Utilities/Ftitle";
import Card from "./Utilities/Card";
import { NavLink } from "react-router-dom";
import { AppContext } from "./Utilities/ApiContext";

function TrendingApps() {
  const { appsContext } = useContext(AppContext);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="py-20 mx-5 lg:mx-20">
        <Ftitle
          title={"Trending Apps"}
          content={"Explore All Trending Apps on the Market developed by us"}
        ></Ftitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {appsContext.slice(0, 8).map((data, index) => (
            <Card key={index} data={data}></Card>
          ))}
        </div>
        <div className="text-center mt-10">
          <NavLink
            to={"/Apps"}
            className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"
          >
            Show All
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TrendingApps;
