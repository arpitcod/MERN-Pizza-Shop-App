import React from "react";
import { useSelector } from "react-redux";
// import { FaPizzaSlice } from "react-icons/fa6";
// import { CiShop } from "react-icons/ci";
import {NavLink} from 'react-router-dom';
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid ">
        {/* <FaPizzaSlice /> */}
          <NavLink className="navbar-brand " to="/">Pizaa-Shop</NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item active ">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item active ">
                <NavLink className="nav-link " to="/about">
                  About-Us
                </NavLink>
              </li>
              <li className="nav-item active ">
                <NavLink className="nav-link " to="/contact-us">
                  Contact-Us
                </NavLink>
              </li>
              <li className="nav-item active ">
                <NavLink className="nav-link " to="/privacy-policy">
                  Terms-Policy
                </NavLink>
              </li>
        
            </ul>


            <ul className="navbar-nav mx-3 float-end border border-1 border-danger ">
              <li className="nav-item active ">
                <NavLink className="nav-link" aria-current="page" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item active ">
                <NavLink className="nav-link" aria-current="page" to="/cart">
                   Cart {cartItems?.length }
                </NavLink>
              </li>
              </ul>


            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
