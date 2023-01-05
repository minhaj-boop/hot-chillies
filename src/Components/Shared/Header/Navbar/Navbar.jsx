import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../../../images/logo.png";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="nav-flex">
        <img className="logo" src={logo} alt="" />
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
          <li>
            <NavLink to="/cart">
              <FaShoppingCart />
            </NavLink>
          </li>
        </ul>
        <div className="search">
          <i>
            <FaSearch />
          </i>
          <input
            type="search"
            name=""
            className="search-bar"
            id=""
            placeholder="Search..."
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
