import React from "react";
import Icon from "../assets/Icon.png";
import "./Chess.css";

function Chess() {
    return (
        <>
            <div className="chess-container">
                <div className="chess-header">
                    <img src={Icon} alt="Chess Icon" className="chess-icon" />
                    <div className="chess-title">
                        <h1>Chess Champ</h1>
                        <p>Play chess with a language model. Make your first move using chess notation to start your match.</p>
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
