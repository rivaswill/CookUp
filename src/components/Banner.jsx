import React from "react";

const Banner = () => {
  return (
    <div id="banner" className="banner">
      <h1 className="subtitle">
        ¡Explorá y descubrí todas las{" "}
        <span className="muted">posibilidades</span> que te ofrecemos acorde a
        tus necesidades y preferencias alimentarias!
      </h1>
      <img className="img" src="./Images/1.png" alt="Banner CookUp 1" />
      <h2>Por favor, selecciona tu tipo de alimentación:</h2>
    </div>
  );
};

export default Banner;
