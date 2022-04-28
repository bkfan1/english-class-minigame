import { createContext, useEffect, useState } from "react";
import { gameLetters } from "../utils/letters";
import { gameWords } from "../utils/words";

export const GameContext = createContext();

export function GameProvider({ children }) {
  const [matchLetters, setMatchLetters] = useState([]);
  const [matchWords, setMatchWords] = useState([]);

  const [guessedWords, setGuessedWords] = useState([]);

  const [selectedLetters, setSelectedLetters] = useState([]);

  const [clueWord, setClueWord] = useState(null);

  const [clueCounter, setClueCounter] = useState(3);

  const [percentCompleted, setPercentCompleted] = useState(0);

  const [error, setError] = useState(null);

  const setMatch = () => {
    setPercentCompleted(0);
    setSelectedLetters([]);
    setMatchLetters([]);
    setMatchWords([]);
    setGuessedWords([]);

    const randInt = Math.floor(Math.random() * 5);
    setMatchLetters(gameLetters[randInt]);

    let upperCasedWords = [];
    gameWords[randInt].forEach((word) =>
      upperCasedWords.push(word.toUpperCase())
    );

    setMatchWords(upperCasedWords);
  };

  useEffect(() => {
    setMatch();
  }, []);

  const handleClickLetterBtn = (e) => {
    const { target } = e;
    const { value } = target;

    if (selectedLetters.includes(value)) {
      const newSelectedLetters = [...selectedLetters];

      const index = selectedLetters.findIndex((letter) => letter === value);

      newSelectedLetters.splice(index, 1);

      setSelectedLetters(newSelectedLetters);
    } else {
      setSelectedLetters([...selectedLetters, value]);
    }
  };

  const handleClickClueBtn = () => {

    if(clueCounter > 0){

      let randInt = Math.floor(Math.random()*30);

      if(guessedWords.includes(matchWords[randInt])){
        randInt -= 1;
        setClueWord(matchWords[randInt]);
      }
      else{setClueWord(matchWords[randInt])}

      setClueCounter(clueCounter-1);
    }

  };

  const handleSubmitFormingWord = () => {
    const wordAttempt = [...selectedLetters].join("");

    console.log(wordAttempt);

    if (matchWords.includes(wordAttempt)) {
      if (guessedWords.includes(wordAttempt)) {
        setSelectedLetters([]);
        setError("Word already guessed");
        setTimeout(() => {
          setError(null);
        }, 2000);
      } else {
        setError("");
        setGuessedWords([...guessedWords, wordAttempt]);
        setSelectedLetters([]);
        setPercentCompleted(percentCompleted + 5);
      }
    } else {
      setSelectedLetters([]);
      setError("Invalid word");
      setTimeout(() => {
        setError(null);
      }, 2000);
    }
  };

  return (
    <GameContext.Provider
      value={{
        matchLetters,
        setMatchLetters,
        matchWords,
        setMatchWords,
        guessedWords,
        setGuessedWords,
        selectedLetters,
        setSelectedLetters,
        handleClickLetterBtn,
        handleSubmitFormingWord,
        error,
        setError,
        percentCompleted,
        setMatch,
        handleClickClueBtn,
        clueWord,
        clueCounter,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
