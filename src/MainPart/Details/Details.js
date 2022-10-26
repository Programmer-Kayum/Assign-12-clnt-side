import React from "react";
import { useLoaderData } from "react-router-dom";

const Details = () => {
  const allDetails = useLoaderData();
  console.log(allDetails);
  return (
    <div className="lg:flex">
      <div></div>

      <div></div>
    </div>
  );
};

export default Details;
