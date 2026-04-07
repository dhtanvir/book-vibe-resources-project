import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold ${isActive ? " text-green-500 border border-green-400" : ""}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/books"}
          className={({ isActive }) =>
            ` font-semibold ${isActive ? " text-green-500 border border-green-400" : ""}`
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/recharts"}
          className={({ isActive }) =>
            ` font-semibold ${isActive ? " text-green-500 border border-green-400" : ""}`
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <nav className=" bg-base-100 shadow-sm ">
        <div className="navbar container mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <h5 className=" text-xl font-bold ">Book vibe</h5>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-5">{links}</ul>
          </div>
          <div className="navbar-end gap-4">
            <button className="btn btn-info">Sign In</button>
            <button className="btn btn-success">Sign Up</button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
