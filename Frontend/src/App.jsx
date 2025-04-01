import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Chess from "./pages/Chess";
import Brainstorm from "./pages/Brainstorm";


import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/chess" element={<Chess />} />
            <Route path="/brainstorm" element={<Brainstorm />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
