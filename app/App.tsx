import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/styles.scss";

import HomePage from "./pages/HomePage/Home.page";

const App = () => (
  <Router>
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
