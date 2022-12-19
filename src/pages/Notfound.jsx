import React from "react";
import { motion } from "framer-motion";
import { pageVariants } from "../Variants";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Notfound = () => {
  return (
    <motion.div
      className="not-found"
      animate={pageVariants.in}
      exit={pageVariants.out}
    >
      <p className="title">404</p>
      <h1 className="subtitle">Página no encontrada</h1>
      <p className="muted">la página que estás buscando ha sido renombrada, movida o nunca existió :'( </p>
      <Button
          classTag="btn btn_prim"
          text="Inicio"
          link=' '
        />
        <Button
          classTag="btn btn_prim"
          text="Contáctanos"
          link='contactus'
        />
    </motion.div>
  );
};

export default Notfound;
