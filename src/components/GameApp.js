import { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import FormingWordRecipient from "./FormingWordRecipient";
import FoundWordsRecipient from "./FoundWordsRecipient";
import MatchLetterButton from "./MatchLetterButton";
import MatchLettersRecipient from "./MatchLettersRecipient";
import SubmitButton from "./SubmitButton";
import Timer from "./Timer";

export default function GameApp() {
  const {
    setMatch,
    error,
    setError,
    clueCounter,
    clueWord,
    handleClickClueBtn,
    percentCompleted,
  } = useContext(GameContext);

  return (
    <>
      <header className="flex flex-col justify-center items-center mb-6">
        <span className="animate__bounceIn text-3xl">🇬🇧</span>

        <h1 className="animate__bounceIn text-2xl text-white font-bold text-center ">
          English Class Minigame
        </h1>
        <h2 className="animate__bounceIn text-base text-white text-center ">
          Created by Jackson Paredes Ferranti{" "}
        </h2>
        <ul className="flex text-white">
          <li>
            <a title="Github profile" href="https://www.github.com/bkfan1">
              <i className="bi bi-github mr-3"></i>
            </a>
          </li>
          <li>
            <a title="Send email" href="mailto:jacksonpf177@gmail.com">
              <i className="bi bi-envelope-fill"></i>
            </a>
          </li>
        </ul>
      </header>
      <Timer />
      {
        <p className={`text-white mb-2 font-bold ${percentCompleted === 100 ? "text-center" : ""}`}>
          {percentCompleted}% completed
        </p>
      }

      <main className="flex flex-col">
        {percentCompleted === 100 ? (
          <>
            <h1 className="text-white text-center text-xl mb-3 font-bold">
              Congrats!
            </h1>
            <button
              className="bg-green-500 p-2 rounded text-white"
              onClick={setMatch}
            >
              Play again
            </button>
          </>
        ) : (
          <>
            <section className="gameplaySection flex">
              <section className="foundWordsSection mr-6">
                <FoundWordsRecipient />
              </section>

              <section className="flex flex-col items-center justify-between">
                <FormingWordRecipient />

                <MatchLettersRecipient />

                <SubmitButton />
              </section>
            </section>

            <menu className="animate__bounceIn mt-3">
              <p className="text-white mb-2">
                Remaining clues{" "}
                <span className="font-bold">{clueCounter}/3</span>
              </p>

              <div className="flex items-center">
                <button
                  className="p-2 bg-emerald-500 rounded text-white"
                  onClick={handleClickClueBtn}
                >
                  <i className="bi bi-search" /> Get clue
                </button>
                {clueWord ? (
                  <p className="bg-white p-2 rounded ml-3">{clueWord}</p>
                ) : (
                  ""
                )}
              </div>
            </menu>
          </>
        )}
      </main>
    </>
  );
}
