import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home";
import Main from "./main";

import "./index.css";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
