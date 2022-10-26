import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import MainTopics from "../MainTopics/MainTopics";

const Details = () => {
  const allDetails = useLoaderData();
  const { name, details, link, logo } = allDetails;

  return (
    <div>
      <div className="w-9/12 mx-auto py-10">
        <div className="card card-side bg-base-100 shadow-xl">
          <figure>
            <img className="h-80 w-80" src={logo} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className={name}>New movie is released!</h2>
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
