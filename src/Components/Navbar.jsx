import React from "react";
import { NavLink } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <NavLink to={'/'} className="gap-1.5 flex items-center text-base font-bold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent"><img src={logo} alt="Logo" className="w-10" /> HERO.IO</NavLink>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <NavLink to={'/'} className={({isActive})=> isActive ? "font-bold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : "text-gray-700 hover:text-gray-900 font-bold"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/Apps'} className={({isActive})=> isActive ? "font-bold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : "text-gray-700 hover:text-gray-900 font-bold"}>Apps</NavLink>
            </li>
            <li>
              <NavLink to={'/Installation'} className={({isActive})=> isActive ? "font-bold  bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent" : "text-gray-700 hover:text-gray-900 font-bold"}>Installation</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold"><FaGithub /> Contribute</a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
