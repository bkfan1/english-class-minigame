import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import FoundWord from "./FoundWord";

export default function FoundWordsRecipient() {
  const { guessedWords } = useContext(GameContext);
  return (
    <>
      <ul className="foundWordsRecipient animate__bounceIn bg-slate-200 p-2">
        <h1 className="font-bold text-slate-800 mb-2">Guessed words:</h1>
        {guessedWords.map((word, index) => (
          <FoundWord word={word} key={index} />
        ))}
      </ul>
    </>
  );
}
