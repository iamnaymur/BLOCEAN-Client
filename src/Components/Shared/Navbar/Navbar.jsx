import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/useAuth";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <a>Authors</a>
      </li>

      <li>
        <a>Contact</a>
      </li>
      <li>
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-sm w-full max-w-xs"
        />
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="navbar bg-base-100 font-displayOne">
      <div className="navbar-start">
        <Link
          to={"/"}
          className="cursor-pointer normal-case font-displayTwo text-xl"
        >
          BLOCEAN
        </Link>
      </div>

      <div className="navbar-end">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center">{navItems}</ul>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        {user && (
          <div className="avatar mx-5">
            <div className="w-8 rounded-full">
              <img src={user?.photoURL} alt="Tailwind-CSS-Avatar-component" />
            </div>
          </div>
        )}
        {user ? (
          <Link onClick={handleLogout} className="btn py-3 blog-button">
            Logout
          </Link>
        ) : (
          <Link
            to={"/sign-up"}
            href="#_"
            class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Join
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
