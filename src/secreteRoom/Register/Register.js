import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.confrimPassword.value;
    console.log(name, email, password, password2);
  };
  return (
    <div>
      <div className="hero min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-4xl pb-5 font-bold">Please Register now!!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              {/* ........................ */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">User name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter your user name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* .................. */}

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

              {/* .............................. */}

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

                {/* ----------------------------- */}

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confrim Password</span>
                  </label>
                  <input
                    type="password"
                    name="confrimPassword"
                    placeholder="again enter your password"
                    className="input input-bordered"
                    required
                  />
                </div>

                <label className="label">
                  <p>
                    Already Registered?
                    <Link
                      className="label-text-alt link link-hover text-lg text-blue-500 ml-2 px-2 hover:text-orange-700"
                      to="/login"
                    >
                      Log in
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
