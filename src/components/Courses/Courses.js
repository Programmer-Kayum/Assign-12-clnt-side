import React from "react";
import { useLoaderData } from "react-router-dom";
import MainTopics from "../../MainPart/MainTopics/MainTopics";
import RightSide from "../RightSide/RightSide";

const Courses = (params) => {
  const allTopics = useLoaderData(params).data;
  //   console.log(allTopics);
  return (
    <div className="lg:flex">
      <div className="lg:w-5/12 lg:px-20 pb-32 pt-10 mt-2 ml-2 rounded-lg bg-gray-400 shadow-2xl border-2">
        {allTopics.map((topics) => (
          <MainTopics key="topics.id" topics={topics}></MainTopics>
        ))}
      </div>
      <div className=" grid grid-cols-2 m-2 px-10  lg:w-full">
        {allTopics.map((topics) => (
          <RightSide key="topics.id" topics={topics}></RightSide>
        ))}
      </div>
    </div>
  );
};

export default Courses;
<h2>This is courses Page</h2>;
