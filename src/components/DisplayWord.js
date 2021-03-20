import PropTypes from "prop-types";
import DICTIONARY_FILE_PATH from "/data/dictionary.json";

const gameLevelSelection = {
  Easy: "Easy",
  Medium: "Medium",
  Hard: "Hard"
};

export default function DisplayWord(gameLevel) {
  let wordData = DICTIONARY_FILE_PATH;
  let filteredWord = [];
  if (gameLevelSelection.Easy === gameLevel) {
    filteredWord = wordData.filter(
      (element) => element.length > 0 && element.length <= 4
    );
  }
  if (gameLevelSelection.Medium === gameLevel) {
    filteredWord = wordData.filter(
      (element) => element.length > 5 && element.length <= 8
    );
  }
  if (gameLevelSelection.Hard === gameLevel) {
    filteredWord = wordData.filter((element) => element.length > 8);
  }

  const disWord = filteredWord[Math.floor(Math.random() * filteredWord.length)];

  return disWord;
}

DisplayWord.propTypes = {
  gameLevel: PropTypes.string.isRequired
};

DisplayWord.defaultProps = {
  gameLevel: "Easy"
};
