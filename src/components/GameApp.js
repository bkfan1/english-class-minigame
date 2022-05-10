import { useContext } from "react";
import { GameContext } from "../context/GameContext";
import FormingWordLettersRecipient from "./FormingWordLettersRecipient";
import GuessedWordsRecipient from "./GuessedWordsRecipient";
import MatchLettersRecipient from "./MatchLettersRecipient";
import StatsChart from "./StatsChart";
import SubmitButton from "./SubmitButton";

export default function GameApp() {
  const { setMatch, percentCompleted,clueWord, handleClickClueBtn } = useContext(GameContext);
  return (
    <>
      <main className="flex flex-col">
        <header className="animate__bounceIn flex flex-col items-center w-full pb-6 text-white">
          <h1 className="text-2xl">🇬🇧</h1>
          <h2 className="text-2xl font-bold">English Class Minigame</h2>
          <h3 className="text-base">Created by Jackson Paredes Ferranti</h3>
          <ul className="flex">
            <li className="mr-2">
              <a href="https://www.github.com/bkfan1" title="Github profile">
                <i className="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a href="mailto:jacksonpf177@gmail.com" title="Send email">
                <i className="bi bi-envelope-fill"></i>
              </a>
            </li>
          </ul>
        </header>

        {percentCompleted === 100 ? (
          <>
          <menu className="mb-3">
            <button onClick={setMatch} className="p-2 bg-green-500 text-white rounded"><i className="bi bi-plus"/>Play new match</button>
          </menu>
          <StatsChart/>
          </>
        ) : (
          <>
          <section className="statsSection flex flex-col">
          <p className="text-white">{percentCompleted}% completed</p>
          <menu className="flex items-center mt-2 ">
          <button onClick={handleClickClueBtn} className="w-28 p-2 text-white bg-green-500  rounded"><i className="bi bi-search"/> Get clue</button>
          {clueWord ? <p className="animate__bounceIn ml-3 p-2 rounded bg-white text-center"><i className="bi bi-chat-text"/> {clueWord}</p> : ""}

          </menu>

        </section>

        <section className="gameplaySection flex justify-between">
          <section className="sectionA flex flex-col mr-6">
            <GuessedWordsRecipient />
          </section>

          <section className="sectionB flex flex-col justify-around">
            <FormingWordLettersRecipient />
            <MatchLettersRecipient />
              <SubmitButton />

          </section>
        </section>
          </>
        )}

        
      </main>
    </>
  );
}
