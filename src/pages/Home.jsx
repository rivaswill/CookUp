import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { pageVariants } from "../Variants";
import { CardSimple } from "../components/Card";

const Home = () => {
  return (
    <motion.div
      className="home"
      animate={pageVariants.in}
      exit={pageVariants.out}
    >
      <div className="home-banner">
        <h1 className="subtitle">
          ¡Explorá y descubrí todas las posibilidades que te ofrecemos acorde a
          tus necesidades y preferencias alimentarias!
        </h1>
        <div className="img-cnt">
          <img className="img" src="./Images/banner.jpg" alt="banner" />
        </div>
        <div className="svg-cnt">
          <svg
            preserveAspectRatio="none"
            className="svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              className="path"
              fillOpacity="1"
              d="M0,128L48,133.3C96,139,192,149,288,170.7C384,192,480,224,576,245.3C672,267,768,277,864,245.3C960,213,1056,139,1152,128C1248,117,1344,171,1392,197.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <div className="home-info">
        <CardSimple />
        <CardSimple />
        <CardSimple />
      </div>
    </motion.div>
  );
};

export default Home;

{
  /* <Banner
    img="./Images/1.png"
    title="¡Explorá y descubrí todas las posibilidades que te ofrecemos acorde a tus necesidades y preferencias alimentarias!"
  />
  <h2>Por favor, selecciona tu tipo de alimentación:</h2>
  <div id="botones">
    <Button
      id="animal"
      classTag="btn btn_prim"
      text="Origen Animal"
    />
    <Button
      id="plantbased"
      classTag="btn btn_sec"
      text="A base de plantas"
    />
    <Button
      id="glutenfree"
      classTag="btn btn_prim"
      text="Libre de gluten"
    />
  </div> */
}
