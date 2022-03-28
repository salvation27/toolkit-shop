import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="menu">
      <div className="container">
        <nav>
          <ul className="menu_wrap">
            <li>
              <Link to="/cart">
              <div>Cart </div>
                <span>0</span>
              </Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
