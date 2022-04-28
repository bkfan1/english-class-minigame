import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import MatchLetterButton from "./MatchLetterButton";

export default function MatchLettersRecipient() {
  const { matchLetters} = useContext(GameContext);
  return (
    <>
      <menu className="matchLettersRecipient grid grid-cols-3 grid-rows-2 gap-4">
        {matchLetters.map((letter, index) => (
          <MatchLetterButton value={letter} key={index} />
        ))}
      </menu>
    </>
  );
}
