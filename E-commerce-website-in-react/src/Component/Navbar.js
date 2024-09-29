import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3176/3176363.png"
          alt="logo"
        />

        <nav>
          {/* <Link to="/">Home</Link> */}
          <NavLink
            to="/"
            style={({ isActive }) =>
              isActive === true ? { border: "1px solid white" } : undefined
            }
          >
            {" "}
            Home
          </NavLink>
          <NavLink
            to="/list"
            style={({ isActive }) =>
              isActive === true ? { border: "1px solid white" } : undefined
            }
          >
            {" "}
            Items
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) =>
              isActive === true ? { border: "1px solid white" } : undefined
            }
          >
            {" "}
            Contact
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
