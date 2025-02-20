import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/styles.scss";

import Error404Page from "./pages/Error404.page";

const App = () => (
  <Router>
    <Routes>
      <Route path="*" element={<Error404Page />} />
    </Routes>
  </Router>
);

export default App;
