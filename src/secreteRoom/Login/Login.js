import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [error, setError] = useState("");
  const { providerLogin, login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      login(email, password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          setError("");
          form.reset();

          navigate(from, { replace: true });
        })
        .catch((e) => {
          console.error(e);
          setError(e.message);
        });
    }
  };
  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((e) => console.error(e));
  };
  const handleGithubSignIn = () => {
    const githubProvider = new GithubAuthProvider();
    providerLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((e) => console.error(e));
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
                    If you new?
                    <Link
                      className="label-text-alt link link-hover text-lg ml-2 text-blue-600 px-2 hover:text-orange-700<App />"
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
              <div className="text-red-500">{error}</div>
              <hr />
              <p className="ml-4">or</p>
              <hr />
            </form>
            {/* google authentication */}

            <div className="form-control mx-3">
              <button
                onClick={handleGoogleSignIn}
                className="btn border-t-indigo-500 hover:bg-orange-500"
              >
                <FaGoogle /> <h2 className="ml-3">Login with Google</h2>
              </button>
            </div>
            {/* ------------------- */}

            {/* GitHub Authentication */}

            <div className="form-control m-3">
              <button
                onClick={handleGithubSignIn}
                className="btn btn-black  hover:bg-orange-500"
              >
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
