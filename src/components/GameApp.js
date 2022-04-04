import { useEffect, useState } from "react";
import { gameLetters } from "../utils/letters";
import { gameWords } from "../utils/words";
import FormingWordRecipient from "./FormingWordRecipient";
import FoundWordsList from "./FoundWordsList";
import LettersMenu from "./LettersMenu";
import SubmitButton from "./SubmitButton";

export default function GameApp() {
  const [letters, setLetters] = useState([]);
  const [words, setWords] = useState([]);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [foundWords, setFoundWords] = useState([]);
  const [percentCompleted, setPercentCompleted] = useState(0);
  const [error, setError] = useState("");

  useEffect(() => {
    const randInt = Math.floor(Math.random() * 5);
    setLetters(gameLetters[randInt]);

    const wordsInUpperCase = [];
    gameWords[randInt].forEach((word) =>
      wordsInUpperCase.push(word.toUpperCase())
    );

    setWords(wordsInUpperCase);
  }, []);

  useEffect(() => {
    const hideAndResetError = () => {
      setTimeout(() => {
        setError("");
      }, 5000);
    };
    hideAndResetError();
  }, [error]);

  return (
    <>
      <main className="flex flex-col justify-between items-center w-full h-full ">
        <header className="animate__backInDown flex flex-col items-center mb-3">
          <h1 className="text-3xl mb-2">🇬🇧</h1>
          <h1 className="text-xl text-white font-bold">
            English Class Minigame
          </h1>
          <h2 className="text-sm mt-2 text-white">
            Created by{" "}
            <a href="https://www.github.com/bkfan1" className="font-bold">
              @bkfan1
            </a>
          </h2>
        </header>

        <p className={`font-bold ${percentCompleted === 100 ? "text-emerald-400" : "text-white" }`}>{percentCompleted}% completado</p>
        {percentCompleted === 100 ? <button className="my-2 bg-green-500 p-2 rounded text-white hover:bg-green-600 ease-in-out duration-200">Jugar de nuevo</button> : ""}

        <section className="gameplaySection flex py-4">
          <section className="FoundWordsList__Section flex flex-col mr-6">
            <FoundWordsList foundWords={foundWords} />
          </section>
          {percentCompleted < 100 ? (
            <>
            <section className="lettersSection flex flex-col items-center justify-between w-full h-90">
            <FormingWordRecipient selectedLetters={selectedLetters} />

            {error !== "" ? <p className="font-bold text-red-800 my-2">{error}</p> : "" }
    
            <SubmitButton
              words={words}
              selectedLetters={selectedLetters}
              setSelectedLetters={setSelectedLetters}
              foundWords={foundWords}
              setFoundWords={setFoundWords}
              percentCompleted={percentCompleted}
              setPercentCompleted={setPercentCompleted}
              error={error}
              setError={setError}
            />

            <LettersMenu
              letters={letters}
              selectedLetters={selectedLetters}
              setSelectedLetters={setSelectedLetters}
            />
          </section>
            </>
          ) : ""}
        </section>
      </main>
    </>
  );
}
