import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const links = (
    <>
      <li>
        <Link className="btn btn-ghost rounded-lg" to="/home">Home</Link>
      </li>
      <li>
        <Link className="btn btn-ghost rounded-lg" to="/menus">Menus</Link>
      </li>
      <li>
        <Link className="btn btn-ghost rounded-lg" to="/packages">Package's</Link>
      </li>
      <li>
        <Link className="btn btn-ghost rounded-lg" to="/reviews">Reviews</Link>
      </li>
      <li>
        <Link className="btn btn-ghost rounded-lg" to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <button className="btn btn-ghost rounded-lg">Log Out</button>
        <Link className="btn btn-ghost rounded-lg" to="/login">Login</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar lg:text-white bg-yellow-700">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-yellow-700 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost uppercase  text-2xl">
            Sodium Cafe
          </Link>
        </div>
        <div className="lg:navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal">{links}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
