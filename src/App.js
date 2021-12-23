import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Layout } from "./pages/Layout";

import { NavBar } from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Layout />} />
        <Route exact path="/amu" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
