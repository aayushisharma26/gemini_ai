

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Sidebar from "./component/Sidebar";
import Sidebar from "./Component/Sidebar";
import Chess from "./pages/Chess";
import Brainstorm from "./pages/Brainstorm";
import CareerGuide from "./pages/CareerGuide";
import CodingPartner from "./pages/CodingPartner";
import WritingEditor from "./pages/WritingEditor";
import Chet from "./pages/Chet";
import Saved from "./pages/Saved"; 
import Setting from "./pages/Setting";
import Apps from "./pages/Apps";
import Public from "./pages/Public";
// import Theme from "./pages/Theme";

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
            <Route path="/Saved" element={<Saved />} />
            <Route path="/Setting" element={<Setting />} />
            <Route path="/Apps" element={<Apps />} />
            <Route path="/Public" element={<Public/>}/>
            {/* <Route path="/Theme" element={<Theme/>}/> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
