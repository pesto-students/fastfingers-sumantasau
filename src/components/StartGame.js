import React, { Component } from "react";
import keyboard_image from "/data/keyboard.png";
import PlayGame from "./PlayGame";

export default class StartGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      gameLevel: "",
      pageNo: 1
    };
  }

  handleChange = (e) => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    //e.preventDefault();
    const { playerName, gameLevel } = this.state;
    console.log({ playerName, gameLevel });
    sessionStorage.setItem("playerName", playerName);
    sessionStorage.setItem("gameLevel", gameLevel === "" ? "Easy" : gameLevel);
    this.setState({ pageNo: 2 });
  };

  render() {
    const { playerName, gameLevel, pageNo } = this.state;

    if (pageNo === 2) {
      return <PlayGame />;
    }
    return (
      <div>
        <img src={keyboard_image} alt="Keyboard" />
        <div>fast fingers</div>
        <div>the ultimate typing game</div>
        <form id="sign-up-form" onSubmit={this.handleFormSubmit}>
          <input
            type="text"
            name="playerName"
            id="player-name"
            value={playerName}
            placeholder="Type Your Name"
            required
            onChange={this.handleChange}
          />
          <select
            name="gameLevel"
            id="game-level"
            value={gameLevel}
            onChange={this.handleChange}
          >
            <option value="">Dificulty Level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
          <input type="submit" value="Start Game" text="Start Game" />
        </form>
      </div>
    );
  }
}
