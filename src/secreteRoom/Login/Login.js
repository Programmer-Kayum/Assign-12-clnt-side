import React from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(form, email, password);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-4xl pb-5 font-bold">Please Login now!!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <p>
                    If you new?{" "}
                    <Link
                      className="label-text-alt link link-hover hover:bg-orange-700"
                      to="/register"
                    >
                      Register Now
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6 mb-2">
                <button className="btn btn-primary">Login</button>
              </div>

              <hr />
              <p className="ml-4">or</p>
              <hr />
            </form>
            {/* google authentication */}

            <div className="form-control mx-3">
              <button className="btn border-t-indigo-500 hover:bg-orange-500">
                <FaGoogle /> <h2 className="ml-3">Login with Google</h2>
              </button>
            </div>
            {/* ------------------- */}

            {/* GitHub Authentication */}

            <div className="form-control m-3">
              <button className="btn btn-black  hover:bg-orange-500">
                <FaGithub /> <h2 className="ml-3">Login with Github</h2>
              </button>
            </div>

            {/* ---------- */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
