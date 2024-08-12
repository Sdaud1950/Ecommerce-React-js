import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assest/logo.png";
import cart_icon from "../Assest/cart_icon.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menu, setmenu] = useState("");

  return (
    <div className="navbar">
      <div className="nav-log">
        <img src={logo} alt="logo" />
        <p>Shopper</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setmenu("Shops")}>
          {" "}
          <NavLink style={{ textDecoration: "none" }} to="/">
            Shop
          </NavLink>
          {menu === "Shops" ? <hr /> : <></>}
        </li>
        <li onClick={() => setmenu("Mens")}>
          {" "}
          <NavLink style={{ textDecoration: "none" }} to="/mens">
            Men
          </NavLink>{" "}
          {menu === "Mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setmenu("Womens")}>
          {" "}
          <NavLink style={{ textDecoration: "none" }} to="/womens">
            Women
          </NavLink>{" "}
          {menu === "Womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setmenu("Kids")}>
          {" "}
          <NavLink style={{ textDecoration: "none" }} to="/kids">
            {" "}
            Kids
          </NavLink>{" "}
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>

      <div className="nav-login-cart">
        {
          <NavLink style={{ textDecoration: "none" }} to="/Login">
            <button>Login</button>
          </NavLink>
        }
        {
          <NavLink style={{ textDecoration: "none" }} to="/cart">
            {" "}
            <img src={cart_icon} alt="" />
          </NavLink>
        }

        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
