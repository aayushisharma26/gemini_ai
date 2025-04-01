import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <h2>New Chat</h2>
      <ul>
        <li><Link to="/chat">New Chat</Link></li>
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
        <li><Link to="/career">📌 Career Guide</Link></li>
        <li><Link to="/coding">💻 Coding Partner</Link></li>
        <li><Link to="/writing">✍ Writing Editor</Link></li>
      </ul>


      <ul>
        <li><Link to="/gem-manager">⚙ Gem Manager</Link></li>
        <li><Link to="/help">❓ Help</Link></li>
        <li><Link to="/activity">📝 Activity</Link></li>
        <li><Link to="/setting">⚙ Setting</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
