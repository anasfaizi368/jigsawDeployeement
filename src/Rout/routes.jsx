import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About/about";
import Feature from "../pages/Feature/Feature";

const RootRoutes = () => {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/feature" element={<Feature />} />
      </Routes>
  );
};
export default RootRoutes;
