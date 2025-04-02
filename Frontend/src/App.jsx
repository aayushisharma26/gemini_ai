import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./component/Sidebar";
import Chess from "./pages/Chess";
import Brainstorm from "../src/pages/Brainstorm.jsx";
import CareerGuide from "./pages/CareerGuide";
import CodingPartner from "./pages/CodingPartner.jsx";
import WritingEditor from "./pages/WritingEditor";
import Chet from "./pages/Chet";
import InputBox from "./component/InputBox.jsx";

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
            <Route path="/CareerGuide" element={<CareerGuide />} />
            <Route path="/CodingPartner" element={<CodingPartner />} />
            <Route path="/WritingEditor" element={<WritingEditor />} />
            <Route path="/Chet" element={<Chet />} />
          </Routes>
        </div>
        <InputBox/>
      </div>
    </Router>
  );
}

export default App;
