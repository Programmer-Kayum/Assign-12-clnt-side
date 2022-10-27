import React from "react";
import { Link, useLoaderData } from "react-router-dom";
// import { jsPDF } from "jspdf";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Details = () => {
  const allDetails = useLoaderData();
  const { name, details, link, logo } = allDetails;

  return (
    <div>
      <div className="lg:w-9/12 lg:mx-auto p-5">
        <div ref={ref} className="card lg:card-side bg-base-100 shadow-xl">
          <div>
            <figure>
              <img
                className="lg:h-72 lg:w-80 lg:mt-10 rounded-lg h-80 w-80 bg-gray-600"
                src={logo}
                alt="Movie"
              />
            </figure>
            <div>
              <Pdf targetRef={ref} filename={name}>
                {({ toPdf }) => (
                  <button onClick={toPdf}>
                    <p className="border-2 rounded-lg bg-blue-700 text-white px-[83px] hover:bg-orange-700 py-2 text-2xl ">
                      Download Pdf
                    </p>
                  </button>
                )}
              </Pdf>
            </div>
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
                <Link to="/premium">
                  <button className="btn btn-primary px-10 hover:bg-orange-700">
                    Get premium access
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
