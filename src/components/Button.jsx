import React from "react";

const Button = ({id, classTag, type, text}) => {
  return (
    <button id={id} className={classTag} type={type}>
      {text}
    </button>
  );
};

export default Button;
