import React from "react";

const RightSide = (params) => {
  const topics = params.topics;
  console.log(topics);
  return (
    <div className="mb-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={topics.logo} alt="Shoes" className="rounded-xl h-40" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{topics.name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions">
            <button className="btn btn-primary">Learn More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
