import LetterButton from "./LetterButton";

export default function FormingWordRecipient({selectedLetters}) {
  return (
    <div className="FormingWordRecipient flex justify-center h-16 py-1 bg-white rounded-md">
      {selectedLetters.map((letter, index)=>(
        <p key={index}>{letter}</p>
      ))}

    </div>
  );
}
