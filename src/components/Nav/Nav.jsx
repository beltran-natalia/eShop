import React from "react";
import { Link } from "react-router-dom";
import styles from "./Nav.module.scss";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/images/logo.png" alt="Logo" />
      </Link>
      <Link to="/">My Account</Link>
      <Link to="/cart">My Cart</Link>
    </nav>
  );
};
