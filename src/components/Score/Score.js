import React from "react";
import {
  SessionKeys,
  getNameOfCurrentUserScores,
  getHighScore
} from "../Common/CommonFunction";
import "./Score.css";

export default function Score() {
  const playerName = sessionStorage.getItem(SessionKeys.PLAYERNAME);
  const currentUserScores = sessionStorage.getItem(
    getNameOfCurrentUserScores(playerName)
  );

  const currentUserScoresArray = currentUserScores.trim().split(" ");

  const highestScore = getHighScore();
  const scoreBoardContent = currentUserScores ? (
    <ul className="score-list">
      {currentUserScoresArray.map((score, index) => (
        <li key={index}>
          {highestScore === Number(score) ? (
            <p className="highScore">PERSONAL BEST</p>
          ) : (
            ""
          )}
          {`Game ${index + 1} : ${score}`}
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div className="scoreboard-inside">
      <h1 className="score-title">SCORE BOARD</h1>
      {scoreBoardContent}
    </div>
  );
}
