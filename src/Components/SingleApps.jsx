import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

function SingleApps() {
  const { id } = useParams();
  const loadData = useLoaderData();
  const data = loadData.find((apps) => apps.id === parseInt(id));
  console.log(data);

  return <div></div>;
}

export default SingleApps;
