import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./assets/styles.scss";

import Error404Page from "./pages/Error404Page/Error404.page";
import HomePage from "./pages/HomePage/Home.page";

const App = () => (
  <Router>
    <Routes>
      <Route path="*" element={<HomePage />} />
    </Routes>
  </Router>
);

export default App;
