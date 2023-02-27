import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const NavbarFuser = () => {
  return (
    <div>
      <nav className=" bg-black">
        <div className=" flex justify-center items-center">
          <NavLink
            to="/Firebasecurd/"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
          >
            Show user
          </NavLink>
          <NavLink
            to="/Firebasecurd/addfuser"
            className="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-grey-dark"
          >
            adduser
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default NavbarFuser;
