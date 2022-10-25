import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LeftSide from "../components/LeftSide/LeftSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="flex  mx-20 my-10">
        <div className="w-2/12">
          <LeftSide></LeftSide>
        </div>
        <div className="w-full">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
