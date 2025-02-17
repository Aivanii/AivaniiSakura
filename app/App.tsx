import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./styles.scss";

//import pages from "pages"
import HomePage from "./pages/Home.page";
import Error404Page from "./pages/Error404.page";
//

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="*" element={<Error404Page/>} />
        </Routes>
    </Router>
);

export default App;