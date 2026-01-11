import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src="https://placehold.co/48x48" alt="Logo" />
      </Link>
      <Link to="/">My Account</Link>
      <Link to="/cart">My Cart</Link>
    </nav>
  );
};
