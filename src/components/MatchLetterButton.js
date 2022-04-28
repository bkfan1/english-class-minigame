import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function MatchLetterButton({ value }) {
  const { selectedLetters, handleClickLetterBtn, error } =
    useContext(GameContext);

  return (
    <>
      <button
        disabled={error ? true : false}
        onClick={(e) => handleClickLetterBtn(e)}
        value={value}
        className={`matchLetter  animate__bounceIn transition ease-in-out ${
          selectedLetters.includes(value) ? "bg-blue-800" : "bg-blue-500"
        } ${error ? "letterDisabled" : ""}  text-white p-3`}
      >
        {value}
      </button>
    </>
  );
}
