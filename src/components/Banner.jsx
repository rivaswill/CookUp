import React from "react";

const Banner = ({title,img}) => {
  return (
    <div className="banner">
      <h1 className="subtitle">
        {title}
      </h1>
      <img className="banner-img" src={img} alt="Banner image" />
    </div>
  );
};

export default Banner;
