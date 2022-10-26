import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { jsPDF } from "jspdf";

const Details = () => {
  const allDetails = useLoaderData();
  const { name, details, link, logo } = allDetails;

  return (
    <div>
      <div className="lg:w-9/12 lg:mx-auto p-5">
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <div>
            <figure>
              <img
                className="lg:h-80 lg:w-80 h-80 w-80 bg-gray-600"
                src={logo}
                alt="Movie"
              />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="text-2xl font-bold p-4">{name}</h2>
            <p>{details}</p>
            <div className="card-actions flex justify-between">
              <div>
                <Link to="/courses">
                  <button className="btn btn-primary px-10 hover:bg-orange-700">
                    Back
                  </button>
                </Link>
              </div>
              <div>
                <a target={"_blank"} href={link}>
                  <button className="btn btn-primary  hover:bg-orange-700">
                    Go to Docs
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
