import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <div className="mb-0 lg:mt-20">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Main;
