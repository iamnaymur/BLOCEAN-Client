import React from "react";
import { Link, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuthor from "../hooks/useAuthor";

const DashboardLayout = () => {
  const [isAdmin, isAdminLoading] = useAdmin();
  const [isAuthor, isAuthorLoading] = useAuthor();

  if (isAuthorLoading) {
    return (
      <div className="text-center mt-72">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  const navItems = (
    <>
      {isAuthor && (
        <>
          <li>
            <Link to="/dashboard/add-blog">Add blog</Link>
          </li>
          <li>
            <Link to="/dashboard/edit-blog">Edit blog</Link>
          </li>
        </>
      )}
      <li>
        <Link to={"/"}>Home</Link>
      </li>
    </>
  );
  return (
    <div className="drawer font-displayOne">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 text-3xl font-semibold mx-2">
            {isAdmin ? 'Admin Dashboard': 'Author Dashboard'}
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {navItems}
            </ul>
          </div>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          {navItems}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
