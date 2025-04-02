

import React, { useState } from "react";
import "./Saved.css";

function Saved() {
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [showExamplePopup, setShowExamplePopup] = useState(false);
  const [inputText, setInputText] = useState("");

  return (
    <div className="saved-container">
      <h3 className="title">Gemini</h3>
      <h2 className="subtitle">Info you asked Gemini to save</h2>
      <p className="description">
        Share info about your life and preferences to get more helpful responses.
        Add new info here or ask Gemini to remember something during a chat.
      </p>
      
      <div className="button-container">
        <button className="btn" onClick={() => setShowAddPopup(true)}>+ Add</button>
        <button className="btn1" onClick={() => setShowExamplePopup(true)}>Show examples</button>
      </div>

      {showAddPopup && (
        <div className="popup-box">
          <div className="popup-content">
            <h4>Add Information</h4>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Enter your information..."
            ></textarea>
            <button className="close-btn" onClick={() => setShowAddPopup(false)}>Close</button>
          </div>
        </div>
      )}
      
      {showExamplePopup && (
        <div className="popup-box">
          <div className="popup-content">
            <h4>Example Information</h4>
            <ul>
              <li>"Use simple language and avoid jargon"</li>
              <li>"I’m vegetarian, so don’t suggest recipes with meat."</li>
              <li>After responding, include a Spanish translation."</li>
              <li>When trip planning, include the cost per day</li>
              <li>I can only write code in JavaScript</li>
              <li>I prefer short, concise responses</li>
            </ul>
            <button className="close-btn" onClick={() => setShowExamplePopup(false)}>Close</button>
          </div>
        </div>
      )}
      
      <p className="note">You haven't asked Gemini to save anything about you yet.</p>
    </div>
  );
}

export default Saved;
