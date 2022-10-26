import React from "react";
import { Link } from "react-router-dom";

const RightSide = (params) => {
  const topics = params.topics;
  console.log(topics);
  return (
    <div className="mb-5 mt-4">
      <div className="card lg:w-96 bg-base-100 mx-4 shadow-xl">
        <figure className="px-10 pt-10 bg-gray-500">
          <img src={topics.logo} alt="Shoes" className="rounded-xl h-40 " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">{topics.name}</h2>
          <p>{topics.details}</p>
          <div className="card-actions">
            <Link to="/details">
              <button className="btn btn-primary hover:bg-orange-600">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
