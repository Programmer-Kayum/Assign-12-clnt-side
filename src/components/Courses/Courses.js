import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import MainTopics from "../../MainPart/MainTopics/MainTopics";
import RightSide from "../RightSide/RightSide";

const Courses = (params) => {
  const allTopics = useLoaderData();

  return (
    <div className="lg:flex">
      <div className="lg:w-5/12 lg:px-20 lg:pb-32 lg:pt-10 mt-2 ml-2 rounded-lg bg-gray-400 shadow-2xl border-2">
        {allTopics.map((topics) => (
          <MainTopics key="topics.id" topics={topics}></MainTopics>
        ))}
      </div>
      <div className=" lg:grid lg:grid-cols-2 lg:m-2 lg:px-10  lg:w-full">
        {allTopics.map((topics) => (
          <RightSide key="topics.id" topics={topics}></RightSide>
        ))}
      </div>
    </div>
  );
};

export default Courses;
