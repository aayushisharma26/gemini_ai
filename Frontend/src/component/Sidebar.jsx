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


      <ul >
        <li><Link to="/gem-manager">⚙ Gem Manager</Link></li>
        <li><Link to="/help">❓ Help</Link></li>
        <li><Link to="/activity">📝 Activity</Link></li>
        <li><Link to="/setting">⚙ Setting</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;








// import React from "react";
// import { Link } from "react-router-dom";
// import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <h2>Chats</h2>  {/* Chet wala section added */}
//       <ul>
//         <li><Link to="/Chet">New Chat</Link></li>
//       </ul>

//       <h2>Recent Chats</h2>
//       <ul>
//         <li><Link to="/chat/1">Chat with Alice</Link></li>
//         <li><Link to="/chat/2">Chat with Bob</Link></li>
//       </ul>

//       <h2>Gems</h2>
//       <ul>
//         <li><Link to="/chess">♟ Chess Champ</Link></li>
//         <li><Link to="/brainstorm">💡 Brainstormer</Link></li>
//         <li><Link to="/CareerGuide">📌 Career Guide</Link></li>
//         <li><Link to="/CodingPartner">💻 Coding Partner</Link></li>
//         <li><Link to="/WritingEditor">✍ Writing Editor</Link></li>
//       </ul>

//       <ul className="bottom-links">
//         <li><Link to="/gem-manager">⚙ Gem Manager</Link></li>
//         <li><Link to="/help">❓ Help</Link></li>
//         <li><Link to="/activity">📝 Activity</Link></li>
//         <li><Link to="/setting">⚙ Setting</Link></li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;
