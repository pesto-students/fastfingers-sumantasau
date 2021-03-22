import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../Header/Header";
import Home from "../Home/Home";
import reload_image from "../assets/reload.png";
import "./EndGame.css";
import {
  SessionKeys,
  getNameOfCurrentUserScores,
  getHighScore
} from "../Common/CommonFunction";

export default function EndScreen({ playAgain }) {
  const highestScore = getHighScore();

  const [isNewGame, setIsNewGame] = useState(false);

  const currentScore =
    Number(sessionStorage.getItem(SessionKeys.PRESENTSCORE)) ?? 0;

  const quitGame = () => {
    sessionStorage.clear();
    setIsNewGame(true);
  };

  const playerName = sessionStorage.getItem(SessionKeys.PLAYERNAME);
  const currentUserScores = sessionStorage.getItem(
    getNameOfCurrentUserScores(playerName)
  );
  const currentUserScoresArray = currentUserScores.trim().split(" ");
  const gameName = currentUserScoresArray.length;
  const showHighScore =
    currentScore === highestScore ? (
      <div className="high-score-text">New High Score</div>
    ) : null;

  return isNewGame ? (
    <Home />
  ) : (
    <main>
      <Header
        difficulty={sessionStorage.getItem(SessionKeys.DIFFICULTYLEVEL)}
        isGameOver={true}
      />
      <section className="score-body-section">
        <div className="score-container">
          <div className="score-heading">{`SCORE : GAME ${currentUserScoresArray.length}`}</div>
          <div className="score-count">{currentScore}</div>
          {showHighScore}
        </div>

        <button className="end-game-button" onClick={playAgain}>
          <img
            className="reload-image"
            src={reload_image}
            alt="Reload Button"
          />
          PLAY AGAIN
        </button>

        <div className="quit-game-container">
          <button className="quit-game-button" onClick={quitGame}>
            QUIT
          </button>
        </div>
      </section>
    </main>
  );
}

EndScreen.propTypes = {
  playAgain: PropTypes.func.isRequired
};

EndScreen.defaultProps = {
  playAgain: () => {}
};
