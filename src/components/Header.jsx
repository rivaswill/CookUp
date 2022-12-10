import React from "react";
import Theme from "./Theme";

const Header = () => {
  return (
    <header>
      <span></span>
      <img className="logo" src="./Images/logo.svg" alt="Logo CookUp" />
      <Theme />
    </header>
  );
};

export default Header;
