import React from "react";

const MainTopics = (params) => {
  const topics = params.topics;
  console.log(topics);
  return (
    <div className=" shadow-2xl my-5 rounded-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
      <li className=" border-2 border-indigo-600 rounded-2xl hover:bg-orange-500 py-3  pl-2 text-4xl font-bold">
        {topics.name}
      </li>
    </div>
  );
};

export default MainTopics;
