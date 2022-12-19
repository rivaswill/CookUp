import React from "react";
import { Link } from "react-router-dom";

const Button = ({ id, classTag, text, link, handle }) => {
  return (
    <button id={id} className={classTag} onClick={handle}>
      {!link ? text : <Link to={"/" + link}>{text}</Link>}
    </button>
  );
};

export default Button;
