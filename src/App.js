import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Loading Logos Import
// TODO Implement Loading Logo or remove from Application
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Page Imports
import Home from "./pages/Home";

function App() {
  return (
    <>
      This is a test
    </>

    // This code is commented out because is no longer needed.
    //
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //   </Routes>
    // </Router>
  );
}

export default App;
