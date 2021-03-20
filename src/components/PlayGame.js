import React, { Component } from "react";
import DisplayWord from "./DisplayWord";

export default class PlayGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: "",
      playerName: sessionStorage.getItem("playerName"),
      gameLevel: sessionStorage.getItem("gameLevel"),
      wordTyping: "",
      displayWord: ""
    };
  }

  componentDidMount() {
    const viewWord = DisplayWord(this.state.gameLevel);
    this.setState({ displayWord: viewWord });
    console.log(viewWord);
  }

  handleWordChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ wordTyping: value });
    console.log({ value });
    //let disWord = this.state.displayWord;
    if (this.state.displayWord.match(value)) {
      console.log("true");
      const strColor = this.state.displayWord.replace(/\d+/, (match) => (
        <span style={{ color: "red" }}> {match} </span>
      ));
      console.log(strColor);
      this.setState({ displayWord: strColor });
    }
    if (value.length === this.state.displayWord.length) {
      console.log("new word");
      const viewWord = DisplayWord(this.state.gameLevel);
      this.setState({ displayWord: viewWord });
      this.setState({ wordTyping: "" });
    }
  };

  render() {
    const {
      errorMessage,
      playerName,
      gameLevel,
      wordTyping,
      displayWord
    } = this.state;

    return (
      <div>
        <div>
          fast fingers
          <div>Player Name : {playerName}</div>
          <div>Game Level : {gameLevel}</div>
        </div>
        <div>
          {displayWord}
          <input
            type="text"
            name="txtWordTyping"
            id="word-typing"
            value={wordTyping}
            placeholder="Type Your Name"
            required
            onChange={this.handleWordChange}
          />
        </div>
        <div>the ultimate typing game</div>
      </div>
    );
  }
}
