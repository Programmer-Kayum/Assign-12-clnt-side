import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../Header/Header";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="bg-gradient-to-r from-sky-500 to-indigo-500 pb-28">
      <Header></Header>

      <div className="flex flex-col min-h-[500px] my-10 lg:w-1/2  lg:mx-auto justify-center shadow-2xl bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl  items-center w-11/12 mx-auto">
        <h1 className="text-4xl">Ops! An Error Ocurred!</h1>
        <br />
        {error && (
          <div>
            <p className="text-red-500 text-3xl">
              {error.statusText || error.message}
            </p>
            <p className="text-3xl">{error.status}</p>
          </div>
        )}

        <div className="py-10">
          <p className="text-3xl px-2 rounded-lg ">Back Please !!!</p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
