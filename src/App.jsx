import React from "react";
import ReactDOM from "react-dom";

import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Main from "./main";

import "./index.css";

const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </HashRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
