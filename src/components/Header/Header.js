import React, { useEffect } from "react";
import keypad_image from "../assets/keypad.png";
import player_image from "../assets/player.png";
import "./Header.css";
import { SessionKeys, GameLevel } from "../Common/CommonFunction";
import PropTypes from "prop-types";

export default function Header({ difficulty, isGameOver }) {
  const userName = sessionStorage.getItem(SessionKeys.PLAYERNAME);
  const currentScore = sessionStorage.getItem(SessionKeys.PRESENTSCORE) ?? 0;

  useEffect(() => {
    return () => {
      sessionStorage.removeItem(SessionKeys.PRESENTSCORE);
    };
  }, []);

  return (
    <header className="header-info">
      <div className="game-info">
        <div className="game-player-info">
          <img
            className="game-player-image"
            src={player_image}
            alt="player icon"
          />
          <span className="player-name-game-level">{userName}</span>
        </div>

        <div className="game-player-info">
          <img
            className="game-keypad-image"
            src={keypad_image}
            alt="keypad icon"
          />
          <span className="player-name-game-level">{`Level: ${difficulty}`}</span>
        </div>
      </div>

      <div className="game-info">
        <div className="game-name-text">fast fingers</div>
        {isGameOver ? null : (
          <div className="game-score-text">SCORE: {currentScore}</div>
        )}
      </div>
    </header>
  );
}

Header.propTypes = {
  difficulty: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool
};

Header.defaultProps = {
  isGameOver: false,
  difficulty: GameLevel.EASY
};
