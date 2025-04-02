import React from "react";
import App_button from "../assets/App_button.png";
import "./Brainstormer.css";

function Brainstormer() {
  return (
    <div className="brainstormer-container">
      <div className="dropdown-section">
      <div>
      <select className="model-select">
          <option>  </option>
          <option>2.0 Flash Get everyday help</option>
          <option>
            2.0 Flash Thinking (experimental)
            <p className="description">Uses advanced reasoning</p>
          </option>
          <option>
            <h2>Deep Research</h2>
            <p className="description">Get in-depth research reports</p>
          </option>
          <option>
            <h2>Personalization (experimental)</h2>
            <p className="description">Help based on your Search history</p>
          </option>
          <option>
            <h1>2.5 Pro (experimental)</h1>
            <p className="description">Best for complex tasks</p>
          </option>
        </select>
      </div>
        
        
      </div>
      <div className="advanced-section">
        <h3>Try Gemini Advanced</h3>
        <img src={App_button} alt="Try Gemini Advanced" className="app-button" />
      </div>
    </div>
  );
}

export default Brainstormer;