import React from "react";
import Icon from "../assets/Icon.png";
import App_button from "../assets/App_button.png";
import "../pages/Chess.css";

function Chess() {
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
                            <a href="Flash"><option>2.0 Flash Get everyday help</option></a>
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
                <div className="Input_Box">
                    <input type="text" placeholder="Enter a prompt for Gemini" />
                </div>
            </div>
        </>
    );
}

export default Chess;
