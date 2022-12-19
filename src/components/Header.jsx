import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import { drop, menu } from "../Variants";
import Theme from "./Theme";

const Dropmenu = ({ state }) => {
  return (
    <motion.div
      className="drop"
      variants={drop}
      animate={state ? "enter" : "exit"}
    >
      <div className="list"></div>
      <Theme />
    </motion.div>
  );
};
const Header = () => {
  const [drop, setDrop] = useState(false);

  return (
    <header>
      <Dropmenu state={drop} />
      <span></span>
      <img className="logo" src="./Images/logo.svg" alt="Logo CookUp" />
      <div className="menu" onClick={() => setDrop(!drop)}>
        <motion.div
          variants={menu}
          className="x"
          animate={drop ? "first" : ""}
        />
        <motion.div
          variants={menu}
          className="x"
          animate={drop ? "second" : ""}
        />
        <motion.div
          variants={menu}
          className="x"
          animate={drop ? "third" : ""}
        />
      </div>
      <Theme />
    </header>
  );
};

export default Header;
