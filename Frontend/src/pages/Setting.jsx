
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";
// import "./Setting.css";
// function Setting() {
//   const [showPopup, setShowPopup] = useState(false);
//   const navigate = useNavigate();
//   return (
//     <div className="setting-container">
//       <h2>Settings</h2>
//       <ul>
//         <li>
//           <button className="open-popup-btn" onClick={() => setShowPopup(true)}>
//             Open Options
//           </button>
//         </li>
//       </ul>
//       {showPopup && (
//         <div className="popup-box">
//           <div className="popup-content">
//             <h4>Settings Options</h4>
//             <button className="go-to-saved" onClick={() => navigate("/Saved")}>
//               📁 Go to Saved Info
//             </button>
//             <button className="go-to-help" onClick={() => navigate("/Apps")}>
//               ❓ Go to Apps
//             </button>
//             <button className="go-to-Public" onClick={() => navigate("/Public")}>
//                Public
//             </button>
//             <button className="go-to-Theme" onClick={() => navigate("/Theme")}>
//                THeme
//             </button>
//             <button className="close-btn" onClick={() => setShowPopup(false)}>
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Setting;


import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { ThemeContext } from "../pages/Theme";
import "./Setting.css";

function Setting() {
  const [showPopup, setShowPopup] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  return (
    <div className="setting-container">
      <h2>Settings</h2>
      <ul>
        <li>
          <button className="open-popup-btn" onClick={() => setShowPopup(true)}>
            Open Options
          </button>
        </li>
      </ul>
      {showPopup && (
        <div className="popup-box">
          <div className="popup-content">
            <h4>Settings Options</h4>
            <button className="go-to-saved" onClick={() => navigate("/Saved")}>
              📁 Go to Saved Info
            </button>
            <button className="go-to-help" onClick={() => navigate("/Apps")}>
              ❓ Go to Apps
            </button>
            <button className="go-to-Public" onClick={() => navigate("/Public")}>
              Public
            </button>
            <button className="go-to-Theme" onClick={toggleTheme}>
              {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
            </button>
            <button className="close-btn" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Setting;
