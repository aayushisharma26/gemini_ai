import React from "react";
import App_button from "../assets/App_button.png";
import Icon from "../assets/Icon1.png";
import "../pages/Brainstormer.css";

function Brainstorm() {
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
          <h4>Try Gemini Advanced</h4>
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
          <div className="chess-option">Affordable and creative gift ideas for my friend’s birthday.</div>
          <div className="chess-option">How to decorate an office space to look cozier yet professional?</div>
          <div className="chess-option">Help me plan a large family reunion to host at my house.</div>
          <div className="chess-option">What are some fun picnic ideas for kids?</div>
        </div>
      </div>
      <div className="Input">
        <input type="text" placeholder="Enter a prompt for Gemini" />
      </div>
    </>
  );
}

export default Brainstorm;
