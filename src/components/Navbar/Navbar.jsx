import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-blue-500 h-14 px-24 text-white">
      <Link to="/">
        <h2 className="text-xl font-semibold">Flipkart</h2>
      </Link>
      <ul className="flex items-center justify-around">
        <li className="p-5">Login</li>
        <Link to="/cart">
          <li className="p-5">Cart</li>
        </Link>
      </ul>
    </nav>
  );
};
