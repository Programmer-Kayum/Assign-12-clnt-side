import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import LeftSide from "../components/LeftSide/LeftSide";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="grid grid-cols-2 mx-20 my-10">
        <div className="w-3/12">
          <LeftSide></LeftSide>
        </div>
        <div className="9/12">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
