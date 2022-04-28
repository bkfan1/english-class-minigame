import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function SubmitButton() {
  const { handleSubmitFormingWord, error } = useContext(GameContext);
  return (
    <>
      <button
        disabled={error ? true : false}
        onClick={handleSubmitFormingWord}
        className={`animate__bounceIn transition ease-in-out mt-3 p-3 ${
          error ? "btnDisabled" : ""
        } bg-white rounded`}
      >
        Submit
      </button>
    </>
  );
}
