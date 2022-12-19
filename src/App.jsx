import { Routes, Route, useLocation } from "react-router-dom"; //aca usamos las urls
import { AnimatePresence } from "framer-motion"; //para manejar las animaciones de transición de la pagina

import Footer from "./components/Footer";
import Header from "./components/Header";

import Home from "./pages/Home";
import Notfound from "./pages/Notfound";

const Pages = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

function App() {
  return (
    <div className="app">
      <Header />
      <Pages />
      <Footer />
    </div>
  );
}

export default App;
