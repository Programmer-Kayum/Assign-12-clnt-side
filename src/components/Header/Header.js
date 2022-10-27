import React, { useContext, useState } from "react";
import { FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

import { DarkModeToggle } from "react-dark-mode-toggle-2";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="lg:bg-gradient-to-r from-cyan-400 to-blue-400 lg:text-2xl">
      <div className="px-2 py-5  mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2">
        <div className="relative flex items-center justify-between">
          <NavLink
            to="/"
            aria-label="edXprogramming"
            title="edXprogramming"
            className="inline-flex items-center"
          >
            <svg
              className="w-8 text-blck"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
              <span className="text-yellow-400">e</span>d
              <span className="text-orange-800">X</span>{" "}
              <span className="text-orange-600">Progra</span>
              <span>mming</span> <span className="text-blue-700">Plat</span>
              <span className="text-red-500">form</span>
            </span>
          </NavLink>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NavLink
                to="/home"
                aria-label="Home"
                title="Home"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                <p className=" hover:bg-orange-300 rounded-lg px-2 py-1 font-bold ">
                  Home
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Courses"
                aria-label="Courses"
                title="Courses"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                <p className=" hover:bg-orange-300 rounded-lg px-2 py-1 font-bold ">
                  Courses
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                aria-label="FAQ"
                title="FAQ"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                <p className=" hover:bg-orange-300 rounded-lg px-2 py-1 font-bold ">
                  FAQ
                </p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                className={({ isActive }) =>
                  isActive
                    ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                }
              >
                <p className=" hover:bg-orange-300 rounded-lg px-2 py-1 font-bold ">
                  Blog
                </p>
              </NavLink>
            </li>

            <li>
              <NavLink>
                <>
                  {user?.uid ? (
                    <>
                      <div
                        className="text-2xl font-bold"
                        onClick={handleLogOut}
                      >
                        <p className=" hover:bg-orange-300 rounded-lg px-2 py-1 font-bold ">
                          Log out
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <NavLink to="/login">
                        <span className="text-2xl font-bold hover:bg-orange-300 rounded-lg px-2 py-1 ">
                          Login
                        </span>
                      </NavLink>
                    </>
                  )}
                </>
              </NavLink>
            </li>

            <li>
              <>
                {user?.photoURL ? (
                  <div>
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user?.photoURL}
                      title={user?.displayName}
                      alt=""
                    />
                  </div>
                ) : (
                  <FaUser></FaUser>
                )}
              </>
            </li>

            <li>
              <DarkModeToggle
                className="pb-0"
                onChange={setIsDarkMode}
                isDarkMode={isDarkMode}
                // size={20}
              />
            </li>
          </ul>

          {/* --------------------------------------------------------------------------------------------------------------------- */}

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 bg-blue-500  -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <NavLink
                        to="/"
                        aria-label="edXprogramming"
                        title="edXprogramming"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">
                          <span className="text-yellow-400">e</span>d
                          <span className="text-orange-800">X</span>{" "}
                          <span className="text-orange-600">Progra</span>
                          <span>mming</span>{" "}
                          <span className="text-blue-700">Plat</span>
                          <span className="text-red-500">form</span>
                        </span>
                        <div className="ml-10">
                          {user?.photoURL ? (
                            <div>
                              <img
                                className="h-10 w-16 rounded-full"
                                src={user?.photoURL}
                                title={user?.displayName}
                                alt=""
                              />
                            </div>
                          ) : (
                            <FaUser></FaUser>
                          )}
                        </div>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <NavLink
                          to="/"
                          aria-label="Home"
                          title="Home"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          <p className=" hover:bg-blue-500 px-10 rounded-xl text-lg font-bold ">
                            Home
                          </p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          aria-label="Courses"
                          title="Courses"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          <p className=" hover:bg-blue-500 px-10 rounded-xl text-lg font-bold ">
                            Courses
                          </p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          aria-label="FAQ"
                          title="FAQ"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          <p className=" hover:bg-blue-500 px-10 rounded-xl text-lg font-bold ">
                            FAQ
                          </p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/blog"
                          aria-label="Blog"
                          title="Blog"
                          className={({ isActive }) =>
                            isActive
                              ? "font-medium tracking-wide text-blue-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                              : "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          }
                        >
                          <p className=" hover:bg-blue-500 px-10 rounded-xl text-lg font-bold ">
                            Blog
                          </p>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="text-lg font-bold">
                          <>
                            {user?.uid ? (
                              <>
                                <p
                                  className=" hover:bg-blue-500 px-10 rounded-xl "
                                  onClick={handleLogOut}
                                >
                                  Log out
                                </p>
                              </>
                            ) : (
                              <>
                                <NavLink to="/login">
                                  <p className=" hover:bg-blue-500  px-10  rounded-xl ">
                                    Login
                                  </p>
                                </NavLink>
                              </>
                            )}
                          </>
                        </NavLink>
                      </li>
                      <li className="ml-10">
                        <DarkModeToggle
                          onChange={setIsDarkMode}
                          isDarkMode={isDarkMode}
                          size={50}
                        />
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
