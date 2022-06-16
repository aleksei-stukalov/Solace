import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Home from "./pages/Home";
import About from "./pages/About"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
