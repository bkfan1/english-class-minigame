import {useContext} from "react";
import GameContext from "../context/GameContext";

export default function MatchStats(){
    const {percentCompleted, guessedWords} = useContext(GameContext);
    return(
        <>
        <figure className="bg-white p-3">
            <h1>Match Stats</h1>
            
            <h2></h2>

        
        </figure>
        </>
    )
}