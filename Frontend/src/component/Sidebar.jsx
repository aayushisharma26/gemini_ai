import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>New Chat</h2>
      <ul>
        <li><Link to="/Chet">New Chat</Link></li>
      </ul>
      <h2>Recent Chats</h2>
      <ul>
        <li><Link to="/chat/1">Chat with Alice</Link></li>
        <li><Link to="/chat/2">Chat with Bob</Link></li>
      </ul>

      <h2>Gems</h2>
      <ul>
        <li><Link to="/chess">♟ Chess Champ</Link></li>
        <li><Link to="/brainstorm">💡 Brainstormer</Link></li>
        <li><Link to="/CareerGuide">📌 Career Guide</Link></li>
        <li><Link to="/CodingPartner">💻 Coding Partner</Link></li>
        <li><Link to="/WritingEditor">✍ Writing Editor</Link></li>
      </ul>

      <ul>
        <li><Link to="/gem-manager">⚙ Gem Manager</Link></li>
        <li><Link to="/help">❓ Help</Link></li>
        <li><Link to="/activity">📝 Activity</Link></li>
        <li>
          <button className="setting-btn" onClick={() => setShowSettingPopup(!showSettingPopup)}>
            ⚙ Settings
          </button>
        </li>
      </ul>

      {showSettingPopup && (
        <div className={`setting-popup ${theme}`}>
          <ul>
            <li>
              <button className="saved-btn" onClick={() => navigate("/Saved")}>
                📁 Saved Info
              </button>
            </li>
            <li>
              <button className="Apps-btn1" onClick={() => navigate("/Apps")}>
                App
              </button>
            </li>
            <li>
              <button className="Public" onClick={() => navigate("/Public")}>
                Your public links
              </button>
            </li>
            <li>
              <button className="theme-btn" onClick={toggleTheme}>
                {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
