import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";
import NavContext from "../src/components/context/NavContext";
import Contact from "./pages/Contact";

import PageLoader from "./components/PageLoader";

const App = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <NavContext>
      {loading && <PageLoader />}

      <div className="overflow-x-hidden">
        <Navbar />
        <FullScreenNav />
        <Routes  location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/agence" element={<Agence />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
      
        </Routes>
      </div>
    </NavContext>
  );
};

export default App;
