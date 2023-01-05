import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav>
        <ul className="nav-items-flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/outlet">Outlet</NavLink>
          </li>
          <li>
            <NavLink to="/shop-online">Shop Online</NavLink>
          </li>
          <li>
            <NavLink to="/news-and-promotions">News & Promotions</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
          <li>
            <NavLink to="/account">My Account</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
