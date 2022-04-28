import { useContext } from "react";
import { GameContext } from "../context/GameContext";

export default function FormingWordRecipient() {
  const { selectedLetters, error } = useContext(GameContext);
  return (
    <>
      <h1 className="text-white font-bold pb-1">Forming word:</h1>
      <div className="formingWordRecipient animate__bounceIn flex flex items-center justify-center bg-white">
        {selectedLetters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
        {error ? (
          <div className="flex bg-red-500 p-2 my-3 rounded text-white">
            <i className="bi bi-x-circle-fill mr-1" />
            <p>{error}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
