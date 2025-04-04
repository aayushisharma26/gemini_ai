

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Sidebar from "./component/Sidebar";
// import Sidebar from "./Component/Sidebar";
// import Chess from "./pages/Chess";
// import Brainstorm from "./pages/Brainstorm";
// import CareerGuide from "./pages/CareerGuide";
// import CodingPartner from "./pages/CodingPartner";
// import WritingEditor from "./pages/WritingEditor";
// import Chet from "./pages/Chet";
// import Saved from "./pages/Saved"; 
// import Setting from "./pages/Setting";
// import Apps from "./pages/Apps";
// import Public from "./pages/Public";
// import Theme from "./pages/Theme";

// function App() {
//   return (
//     <Router>
      
//       <div className="app-container">
//         <Sidebar />
       
//         <div className="main-content">
//           <Routes>
//             <Route path="/chess" element={<Chess />} />
//             <Route path="/brainstorm" element={<Brainstorm />} />
//             <Route path="/CareerGuide" element={<CareerGuide />} />
//             <Route path="/CodingPartner" element={<CodingPartner />} />
//             <Route path="/WritingEditor" element={<WritingEditor />} />
//             <Route path="/Chet" element={<Chet />} />
//             <Route path="/Saved" element={<Saved />} />
//             <Route path="/Setting" element={<Setting />} />
//             <Route path="/Apps" element={<Apps />} />
//             <Route path="/Public" element={<Public/>}/>
//             <Route path="/Theme" element={<Theme/>}/>
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }
// export default App;


import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ThemeProvider, { ThemeContext } from "./pages/Theme";
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
import "./App.css";

const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <Sidebar /> {/* Sidebar ka color change nahi hoga */}
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
          <Route path="/Public" element={<Public />} />
        </Routes>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  );
}

export default App;
