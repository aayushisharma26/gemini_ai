import React from "react";
import App_button from "../assets/App_button.png";
import Icon from "../assets/Icon2.png";
import "../pages/Brainstormer.css";

function CareerGuide() {
  console.log("Brainstorm component loaded!");

  return (
    <>
      <div className="brainstormer-container">
        <div className="dropdown-section">
          <div className="Gemini">
            <h4>Gemini</h4>
          </div>
          <div>
            <select className="model-select">
              <option></option>
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
          <img src={App_button} alt="Try Gemini Advanced" className="app-button" />
        </div>
      </div>

      <div className="chess-container">
        <div className="chess-header">
          <img src={Icon} alt="Chess Icon" className="chess-icon" />
          <div className="chess-title">
            <h1>Brainstormer</h1>
            <p>Find inspiration easily. Fresh ideas for parties, gifts, businesses and more.</p>
          </div>
        </div>

        <div className="chess-options">
          <div className="chess-option">I'd like to improve my presentation skills.</div>
          <div className="chess-option">Help me figure out how to advocate with my manager for a promotion.</div>
          <div className="chess-option">How do I prepare for a job interview with behavioral questions?</div>
          <div className="chess-option">Give me advice on how to find a mentor.</div>
        </div>
      </div>
    </>
  );
}
 export default CareerGuide;