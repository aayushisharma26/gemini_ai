import React, { useState, useRef, useEffect } from "react";
import Icon from "../assets/Icon.png";
import App_button from "../assets/App_button.png";
import "../pages/Chess.css";
import MicrophoneIcon from "../assets/MicrophoneIcon.png";
import PlusIcon from "../assets/PlusIcon.png";

function Chess() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("click", closeMenu);
    };
  }, []);

  return (
    <>
      <div className="brainstormer-container">
        <div className="dropdown-section">
          <div className="Gemini">
            <h3>Gemini</h3>
          </div>
          <div>
            <select className="model-select">
              <option></option>
              <option>2.0 Flash Get everyday help</option>
              <option>2.0 Flash Thinking (experimental)</option>
              <option>Deep Research</option>
              <option>Personalization (experimental)</option>
              <option>2.5 Pro (experimental)</option>
            </select>
          </div>
        </div>

        <div className="advanced-section">
          <h3>Try Gemini Advanced</h3>
          <img src={App_button} alt="Try Gemini Advanced" className="app-button" />
        </div>
      </div>

      <div className="chess-container">
        <div className="chess-header">
          <img src={Icon} alt="Chess Icon" className="chess-icon" />
          <div className="chess-title">
            <h1>Chess Champ</h1>
            <p>Find inspiration easily. Fresh ideas for parties, gifts, businesses and more.</p>
          </div>
        </div>

        <div className="chess-options">
          <div className="chess-option">Let's play chess! I start with e4.</div>
          <div className="chess-option">I start with moving my knight to f3. Write a verse after every move.</div>
          <div className="chess-option">My move is d4. Comment on the game as Sherlock Holmes.</div>
          <div className="chess-option">How do I make a move?</div>
        </div>
        <div className="chess-footer">
          <p>
            Experiments may have unexpected results. Share your feedback with the thumbs up/down button. Learn more.
          </p>
        </div>
      </div>
    </>
  );
}

export default Chess;