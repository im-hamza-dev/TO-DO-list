import React from "react";
import "./header.scss";
// MOVE THIS HEADER TO LEFT SIDE FOR MODERN USER INTERFACE
const Header = () => {
  return (
    <header className="header">
      <h1>
        Notes<sup>+</sup>
      </h1>
    </header>
  );
};

export default Header;
