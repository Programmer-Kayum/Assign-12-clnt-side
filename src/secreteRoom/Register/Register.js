// import { error } from "daisyui/src/colors";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { createUsers, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.confrimPassword.value;
    // console.log(name, email, password, password2);

    if (password !== password2) {
      alert("can not match your password!");
      return;
    }

    createUsers(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
        // handleEmailVerification();
        // toast.success('Please verify your email address.')
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };

    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  // const handleEmailVerification  = () => {
  // verifyEmail()
  // .then(() =>{})
  // .catch(error => console.error(error));
  // }

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

              {/* ............... */}

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="Phot URL"
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
                <button className="btn btn-primary">Sign Up</button>
              </div>

              <div className="text-red-500">{error}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
