import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Comp-news/Navbar";
import Home from "./Comp-news/Home";
import About from "./Comp-news/About";

// API - "7c7c93790a7448f18d1e28fa5dd50aad"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
