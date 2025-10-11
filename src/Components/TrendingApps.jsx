import axios from "axios";
import React, { use, useEffect, useState } from "react";
import Ftitle from "./Utilities/Ftitle";
import Card from "./Utilities/Card";

function TrendingApps() {
  const [TrendingApps, setTrendingApps] = useState([]);
  useEffect(() => {
    axios
      .get("apps.json")
      .then((res) => {
        setTrendingApps(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    ``;
  }, []);
  return (
    <div className="bg-[#f5f5f5]">
      <div className="my-20 mx-20">
        <Ftitle
          title={"Trending Apps"}
          content={"Explore All Trending Apps on the Market developed by us"}
        ></Ftitle>
        <div className="grid grid-cols-4 gap-5">
          {TrendingApps.map((data, index) => (
            <Card key={index} data={data}></Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrendingApps;
