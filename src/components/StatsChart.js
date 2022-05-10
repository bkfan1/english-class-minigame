import { useContext } from "react"
import { GameContext } from "../context/GameContext"


export default function StatsChart(){
    const {guessedWords, percentCompleted ,guessingAttempts} = useContext(GameContext);
    return(
        <>
        <figure className="flex flex-col h-64 bg-white p-3 rounded">
            <h1 className="mb-3 text-xl font-bold text-center">Match Stats</h1>
            <div>
                 <h2>Percent completed: {percentCompleted}%</h2>
            <h2>Guessed words: {guessedWords.length}</h2>
            <h2>Guessing attempts: {guessingAttempts}</h2>
            </div>
           
        </figure>
        </>
    )
}