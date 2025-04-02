import React from "react";
import App_button from "../assets/App_button.png";
import Icon from "../assets/Icon2.png";
import "../pages/Brainstormer.css";

function WritingEditor() {
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
            <h1>Writing editor</h1>
            <p>Elevate your writing. Get clear, constructive feedback, from grammar to structure.</p>
          </div>
        </div>

        <div className="chess-options">
          <div className="chess-option">Fix grammatical errors.</div>
          <div className="chess-option">Edit this for a specific style guide.</div>
          <div className="chess-option">Rewrite this sentence to make it clearer.</div>
          <div className="chess-option">Improve the sentence flow, word choice and overall stylistic consistency in this article.</div>
        </div>
      </div>
    </>
  );
}
 export default WritingEditor;