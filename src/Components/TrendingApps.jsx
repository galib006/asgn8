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
import { AppsContext } from "./Utilities/ApiContext";

function TrendingApps() {
  // const [TrendingApps, setTrendingApps] = useState([]);
  // useEffect(() => {
  //   axios
  //     .get("apps.json")
  //     .then((res) => {
  //       setTrendingApps(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  const { AppsContext } = useContext(AppContext);
  console.log(AppsContext);

  return (
    <div className="bg-[#f5f5f5]">
      <div className="py-20 mx-20">
        <Ftitle
          title={"Trending Apps"}
          content={"Explore All Trending Apps on the Market developed by us"}
        ></Ftitle>
        <div className="grid grid-cols-4 gap-5">
          {/* {TrendingApps.slice(0, 8).map((data, index) => (
            <Card key={index} data={data}></Card>
          ))} */}
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
import { AppProver } from "./Utilities/ApiContext";

export default TrendingApps;
