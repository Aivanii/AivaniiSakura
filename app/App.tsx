import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles/styles.scss";

//import pages from "pages"
import HomePage from "./pages/HomePage/Home.page";
import Error404Page from "./pages/Error404.page";
//

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tovari" element={<> </>} />
      <Route path="/o-nas" element={<> </>} />
      <Route path="contacti" element={<> </>} />
      <Route path="*" element={<Error404Page />} />
    </Routes>
  </Router>
);

export default App;
