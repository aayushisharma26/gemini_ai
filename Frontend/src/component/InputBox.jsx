import React, { useState, useRef, useEffect } from "react";
import "../pages/Chess.css";
import MicrophoneIcon from "../assets/MicrophoneIcon.png";
import PlusIcon from "../assets/PlusIcon.png";

function InputBox() {
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
    <div className="input-container" ref={menuRef}>
      <button className="icon-button" onClick={toggleMenu}>
        <img src={PlusIcon} alt="Plus" className="icon" />
      </button>
      {isMenuOpen && (
        <div className="dropdown-menu">
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      )}
      <input type="text" placeholder="Ask Gemini" className="text-input" />
      <button className="icon-button">
        <img src={MicrophoneIcon} alt="Microphone" className="icon" />
      </button>
    </div>
  );
}

export default InputBox;
