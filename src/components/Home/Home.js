import React, { useState, useEffect } from "react";
import keyboard_image from "../assets/keyboard.png";
import play_image from "../assets/play.png";
import "./Home.css";
import Game from "../Game/Game";
import {
  GameLevel,
  getNameOfCurrentUserScores,
  SessionKeys
} from "../Common/CommonFunction.js";

const initSessionStorage = (playerName, gameLevel) => {
  sessionStorage.setItem(SessionKeys.PLAYERNAME, playerName);
  sessionStorage.setItem(SessionKeys.SELECTEDGAMELEVEL, gameLevel);
  sessionStorage.setItem(getNameOfCurrentUserScores(playerName), "");
};

export default function Home() {
  const [playerName, setplayerName] = useState("");
  const [gameLevel, setgameLevel] = useState(GameLevel.EASY);
  const [isPlaying, setIsPlaying] = useState(false);
  const [requiredPlayerName, setrequiredPlayerName] = useState(false);

  const playerNameRef = React.createRef();

  const onPlayClick = () => {
    if (playerName) {
      initSessionStorage(playerName, gameLevel);
      setIsPlaying(true);
    } else {
      setrequiredPlayerName(true);
      playerNameRef.current.focus();
    }
  };

  useEffect(() => {
    sessionStorage.clear();
    if (playerNameRef.current) {
      playerNameRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return isPlaying ? (
    <Game />
  ) : (
    <div className="home-container">
      <img className="keyboard-image" src={keyboard_image} alt="keyboard"></img>

      <h1 className="home-title">fast fingers</h1>
      <div className="home-description">
        <hr className="home-line" />
        <p className="home-description-text">the ultimate typing game</p>
        <hr className="home-line" />
      </div>

      <input
        type="text"
        className="home-textbox"
        value={playerName}
        placeholder="TYPE YOUR NAME"
        onChange={(event) => {
          setplayerName(event.target.value);
          setrequiredPlayerName(false);
        }}
        ref={playerNameRef}
        required
      />
      {requiredPlayerName ? <p>Please enter your name</p> : ""}

      <select
        className="home-selection"
        value={gameLevel}
        onChange={(event) => {
          let value = Array.from(
            event.target.selectedOptions,
            (option) => option.value
          );
          setgameLevel(value);
        }}
      >
        <option value={GameLevel.EASY}>{GameLevel.EASY}</option>
        <option value={GameLevel.MEDIUM}>{GameLevel.MEDIUM}</option>
        <option value={GameLevel.HARD}>{GameLevel.HARD}</option>
      </select>

      <button className="start-button" onClick={onPlayClick}>
        <img
          className="button-image"
          src={play_image}
          alt="Start Game Button"
        />{" "}
        START GAME
      </button>
    </div>
  );
}
