import React from "react";
import img from "../../Image/favicon.jpg";

const Home = () => {
  return (
    <div className="lg:m-5 m-2  border-2 rounded-lg lg:pb-32 pb-5 lg:pt-20 pt-10 bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div>
        <h1 className="lg:text-6xl text-3xl font-bold text-center">
          <span className="text-orange-800">Welcome</span> To our{" "}
          <span className="text-yellow-600"> Learning</span>
          <span className="text-blue-700"> Platform</span>
          <span className="text-red-800"> !!</span>
        </h1>
        <div className="lg:flex mx-5 mt-10 lg:ml-20">
          <div className="lg:text-3xl text-lg border-2 rounded-lg lg:p-10 p-5 font-bold bg-gradient-to-r from-purple-500 to-pink-500  ">
            <h3 className="text-4xl lg:py-5 pb-5 text-blue-400">
              You can learn this Iteam...
            </h3>
            <li className="hover:bg-orange-500 mb-2 border-2 rounded-xl pl-5">
              HTML
            </li>
            <li className="hover:bg-orange-500 mb-2 border-2 rounded-xl pl-5">
              CSS
            </li>
            <li className="hover:bg-orange-500 mb-2 border-2 rounded-xl pl-5">
              Bootstrap
            </li>
            <li className="hover:bg-orange-500 mb-2 border-2 rounded-xl pl-5">
              Tailwind
            </li>
            <li className="hover:bg-orange-500 mb-2 border-2 rounded-xl pl-5">
              Firebase
            </li>
            <li className="hover:bg-orange-500 mb-2 border-2 rounded-xl pl-5">
              Github
            </li>
            <li className="hover:bg-orange-500 mb-2 border-2 rounded-xl pl-5">
              All Components
            </li>
            <li className="hover:bg-orange-500 border-2 rounded-xl pl-5">
              Learning in Online
            </li>
          </div>
          <div className="lg:ml-10">
            <img
              className="rounded-xl h-full mt-5 lg:mt-0 lg:w-11/12"
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
